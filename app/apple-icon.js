import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #4B8BF5 0%, #1D5FD6 100%)',
          borderRadius: 40,
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 100,
            fontWeight: 800,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.06em',
            lineHeight: 1,
          }}
        >
          W
        </span>
        <svg
          width="88"
          height="22"
          viewBox="0 0 88 22"
          style={{ marginTop: 6 }}
        >
          <path
            d="M4 12 Q22 2 44 12 T84 12"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
