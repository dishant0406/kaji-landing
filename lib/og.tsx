import { ImageResponse } from "next/og";
import { ogWordmarkDataUri } from "./ogImageAssets";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
const OgRaster = "img";

type OgImageOptions = {
  description?: string;
  detail?: string;
  label?: string;
  title?: string;
};

const defaultOgImage: Required<OgImageOptions> = {
  label: "Kaji",
  title: "Terminal-native coding agents for Mac",
  description: "Run Codex, Claude Code, OpenCode, Pi, worktrees, diffs, and verification inside one native macOS command center.",
  detail: "kaji.sh",
};

function limitText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

function titleStyle(title: string) {
  if (title.length > 64) {
    return { fontSize: 50, lineHeight: 1.08, lines: 3 };
  }

  if (title.length > 48) {
    return { fontSize: 56, lineHeight: 1.08, lines: 2 };
  }

  return { fontSize: 62, lineHeight: 1.06, lines: title.length > 28 ? 2 : 1 };
}

export function createOgImage(options: OgImageOptions = {}) {
  const image = {
    ...defaultOgImage,
    ...options,
    description: limitText(options.description ?? defaultOgImage.description, 190),
    detail: limitText(options.detail ?? defaultOgImage.detail, 34),
    label: limitText(options.label ?? defaultOgImage.label, 28),
    title: limitText(options.title ?? defaultOgImage.title, 82),
  };
  const title = titleStyle(image.title);
  const descriptionTop = 202 + title.fontSize * title.lineHeight * title.lines + 26;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#141110",
          color: "#eae8e6",
          padding: 72,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 64, left: 72, right: 72, height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <OgRaster src={ogWordmarkDataUri} width={168} height={56} alt="KAJI" />
          <div style={{ color: "#a5a09c", fontSize: 23, fontFamily: "monospace" }}>{image.detail}</div>
        </div>

        <div style={{ position: "absolute", top: 156, left: 72, display: "flex", alignItems: "center", gap: 16, color: "#a4847f", fontSize: 24, fontFamily: "monospace" }}>
          <div style={{ width: 44, height: 2, background: "#a4847f" }} />
          <div>{image.label}</div>
        </div>

        <div style={{ position: "absolute", top: 202, left: 72, width: 940, fontSize: title.fontSize, fontWeight: 700, lineHeight: title.lineHeight }}>
          {image.title}
        </div>

        <div style={{ position: "absolute", top: descriptionTop, left: 72, width: 900, color: "#d9d4d0", fontSize: 27, lineHeight: 1.32 }}>
          {image.description}
        </div>

        <div style={{ position: "absolute", left: 72, right: 72, bottom: 58, display: "flex", justifyContent: "space-between", borderTop: "1px solid #ffffff1a", paddingTop: 22 }}>
          <div style={{ color: "#a5a09c", fontSize: 22, fontFamily: "monospace" }}>Native macOS command center</div>
          <div style={{ color: "#a5a09c", fontSize: 22, fontFamily: "monospace" }}>kaji.sh</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
