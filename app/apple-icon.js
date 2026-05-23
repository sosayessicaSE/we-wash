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
          background: 'linear-gradient(145deg, #60a5fa 0%, #2563eb 100%)',
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 96,
            fontWeight: 800,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          W
        </span>
        <span
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 18,
            fontWeight: 600,
            fontFamily: 'system-ui, sans-serif',
            marginTop: 8,
          }}
        >
          WeWash
        </span>
      </div>
    ),
    { ...size }
  );
}
