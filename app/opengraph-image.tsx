import { ImageResponse } from "next/og";
import { heroLayers } from "@/data/engineering";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  background: "#09090b",
  surface: "#111113",
  line: "#27272a",
  fg: "#f4f4f5",
  secondary: "#a1a1aa",
  muted: "#8b8b94",
  accent: "#38bdf8",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: colors.background,
          color: colors.fg,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: colors.muted, fontSize: 22 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: colors.accent }} />
            {profile.location}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.04em" }}>{profile.name}</div>
            <div style={{ marginTop: 12, fontSize: 40, color: colors.secondary, letterSpacing: "-0.03em" }}>
              {profile.title}
            </div>
          </div>
          <div style={{ fontSize: 24, color: colors.muted, maxWidth: 640, lineHeight: 1.4 }}>
            {profile.positioning}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            width: 300,
          }}
        >
          {heroLayers.map((layer, index) => (
            <div
              key={layer.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 20px",
                borderRadius: 14,
                border: `1px solid ${index === 2 ? colors.accent : colors.line}`,
                backgroundColor: colors.surface,
                fontSize: 20,
                letterSpacing: "0.12em",
                color: index === 2 ? colors.fg : colors.secondary,
              }}
            >
              <span style={{ color: colors.muted, fontSize: 16 }}>{`0${index + 1}`}</span>
              {layer.label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
