import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 800,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.06em',
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          W
        </span>
        <svg
          width="16"
          height="5"
          viewBox="0 0 32 10"
          style={{ marginTop: 1 }}
        >
          <path
            d="M1 5 Q8 1 16 5 T31 5"
            fill="none"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
