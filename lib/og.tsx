import { ImageResponse } from "next/og";
import { ogIconDataUri, ogWordmarkDataUri } from "./ogImageAssets";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
const OgRaster = "img";

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#141110",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 84 }}>
          <OgRaster src={ogIconDataUri} width={150} height={150} alt="" />
          <OgRaster src={ogWordmarkDataUri} width={540} height={180} alt="KAJI" />
        </div>
        <div style={{ marginTop: 36, color: "#a5a09c", fontSize: 30, letterSpacing: 0.5, fontFamily: "monospace" }}>
          Terminal-native coding agents for Mac
        </div>
      </div>
    ),
    ogSize,
  );
}
