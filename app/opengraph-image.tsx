import { ImageResponse } from "next/og";

export const alt = "Luke Randolph — Full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 85% -10%, rgba(0,240,255,0.28), transparent 45%), radial-gradient(circle at 15% 110%, rgba(255,43,214,0.22), transparent 45%)",
          color: "#e8e8f0",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#00f0ff",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#8a8aa0", marginRight: 12 }}>{"//"}</span>
          luke-randolph.com
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 148,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#e8e8f0",
            textShadow:
              "0 0 24px rgba(0,240,255,0.45), 0 0 8px rgba(0,240,255,0.6)",
          }}
        >
          <span>LUKE</span>
          <span>RANDOLPH</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            color: "#8a8aa0",
            marginTop: 48,
          }}
        >
          <span style={{ color: "#00f0ff", marginRight: 14 }}>{">"}</span>
          full-stack developer
          <span
            style={{
              display: "flex",
              width: 14,
              height: 36,
              background: "#00f0ff",
              marginLeft: 12,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
