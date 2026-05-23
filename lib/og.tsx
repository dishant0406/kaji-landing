import { ImageResponse } from "next/og";
import { ogIconDataUri, ogWordmarkDataUri } from "./ogImageAssets";

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

export function createOgImage(options: OgImageOptions = {}) {
  const image = { ...defaultOgImage, ...options };

  return new ImageResponse(
    (
      <div
        style={{
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <OgRaster src={ogIconDataUri} width={56} height={56} alt="" />
            <OgRaster src={ogWordmarkDataUri} width={168} height={56} alt="KAJI" />
          </div>
          <div style={{ color: "#a5a09c", fontSize: 24, fontFamily: "monospace" }}>{image.detail}</div>
        </div>

        <div style={{ display: "flex", width: "100%", flex: 1, alignItems: "center" }}>
          <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#a4847f", fontSize: 26, fontFamily: "monospace" }}>
              <div style={{ width: 48, height: 2, background: "#a4847f" }} />
              <div>{image.label}</div>
            </div>
            <div style={{ marginTop: 30, maxWidth: 940, fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>{image.title}</div>
            <div style={{ marginTop: 28, maxWidth: 900, color: "#d9d4d0", fontSize: 30, lineHeight: 1.35 }}>{image.description}</div>
          </div>
        </div>

        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", borderTop: "1px solid #ffffff1a", paddingTop: 24 }}>
          <div style={{ color: "#a5a09c", fontSize: 22, fontFamily: "monospace" }}>Native macOS command center</div>
          <div style={{ color: "#a5a09c", fontSize: 22, fontFamily: "monospace" }}>kaji.sh</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
