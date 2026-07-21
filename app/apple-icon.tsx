import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#14231C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        {/* Peak mark — matches site logomark */}
        <svg
          width="110"
          height="100"
          viewBox="0 0 32 30"
          fill="none"
        >
          <polyline
            points="16,2 30,27 2,27"
            stroke="#B8935A"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="16,10 23,25 9,25" fill="#B8935A" fillOpacity="0.3" />
          <line
            x1="2"
            y1="27"
            x2="30"
            y2="27"
            stroke="#B8935A"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
