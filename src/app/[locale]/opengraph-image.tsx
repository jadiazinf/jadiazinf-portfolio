import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Jesús Díaz — Software Engineer & Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Ruby on Rails",
  "tRPC",
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a0e17 0%, #111827 50%, #0a0e17 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
            display: "flex",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f1f5f9",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Jesús Díaz
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginTop: "12px",
            display: "flex",
          }}
        >
          <span style={{ color: "#3b82f6" }}>Software Engineer</span>
          <span style={{ color: "#475569", margin: "0 12px" }}>•</span>
          <span style={{ color: "#06b6d4" }}>Full Stack Web Developer</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
            marginTop: "32px",
            marginBottom: "32px",
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* Skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: 18,
                fontWeight: 500,
                color: "#cbd5e1",
                background: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                display: "flex",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: 20,
            color: "#64748b",
            display: "flex",
          }}
        >
          jadiazinf.com
        </div>
      </div>
    ),
    { ...size }
  );
}
