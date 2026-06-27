const repositoryOwner = "dishant0406";
const repositoryName = "kaji";
const releaseApiUrl = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/releases/latest`;
const fallbackReleaseUrl = `https://github.com/${repositoryOwner}/${repositoryName}/releases/latest`;

const releaseAssetNamePattern = /^Kaji-[\d.]+(?:-[\w.]+)?-(arm64|x86_64)\.dmg$/;

type GitHubReleaseAsset = {
  name?: unknown;
  browser_download_url?: unknown;
  content_type?: unknown;
  state?: unknown;
};

type GitHubRelease = {
  assets?: unknown;
};

type KajiDmgAsset = {
  name: string;
  browser_download_url: string;
};

export type KajiDownloadTarget = {
  url: string;
  fallback: boolean;
};

export async function resolveKajiDownloadTarget(fetcher: typeof fetch = fetch): Promise<KajiDownloadTarget> {
  try {
    const response = await fetcher(releaseApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "kaji-landing-download-route",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return fallbackDownloadTarget();
    }

    const release = (await response.json()) as GitHubRelease;
    const asset = selectKajiDmgAsset(release.assets);

    if (!asset) {
      return fallbackDownloadTarget();
    }

    return { url: asset.browser_download_url, fallback: false };
  } catch {
    return fallbackDownloadTarget();
  }
}

export function selectKajiDmgAsset(assets: unknown): KajiDmgAsset | null {
  if (!Array.isArray(assets)) {
    return null;
  }

  const validAssets = assets.flatMap(normalizeReleaseAsset);
  return validAssets.find((asset) => releaseAssetNamePattern.test(asset.name) && asset.name.endsWith("-arm64.dmg"))
    ?? validAssets.find((asset) => releaseAssetNamePattern.test(asset.name))
    ?? validAssets.find((asset) => asset.name.startsWith("Kaji-") && asset.name.endsWith(".dmg"))
    ?? null;
}

function normalizeReleaseAsset(asset: unknown): KajiDmgAsset[] {
  if (!isReleaseAsset(asset)) {
    return [];
  }

  if (asset.state !== "uploaded") {
    return [];
  }

  if (!asset.name.endsWith(".dmg")) {
    return [];
  }

  return [{ name: asset.name, browser_download_url: asset.browser_download_url }];
}

function isReleaseAsset(asset: unknown): asset is GitHubReleaseAsset & KajiDmgAsset & { state: string } {
  if (!asset || typeof asset !== "object") {
    return false;
  }

  const candidate = asset as GitHubReleaseAsset;
  return typeof candidate.name === "string"
    && typeof candidate.browser_download_url === "string"
    && typeof candidate.state === "string";
}

function fallbackDownloadTarget(): KajiDownloadTarget {
  return { url: fallbackReleaseUrl, fallback: true };
}
