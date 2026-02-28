import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Digital Detox Japan — Unplug in Japan\'s Wilderness'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
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
          backgroundColor: '#1a1209',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Dark overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,8,4,0.85) 0%, rgba(30,20,10,0.70) 100%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            padding: '60px 80px',
            textAlign: 'center',
          }}
        >
          {/* Top label */}
          <p
            style={{
              fontSize: 16,
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.25em',
              color: '#a08060',
              textTransform: 'uppercase',
              margin: '0 0 28px 0',
            }}
          >
            Digital Detox Japan
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontSize: 62,
              fontWeight: 300,
              color: '#f5f0e8',
              lineHeight: 1.15,
              margin: '0 0 24px 0',
              fontFamily: 'Georgia, serif',
            }}
          >
            Unplug in Japan's Wilderness
          </h1>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 1,
              backgroundColor: '#6b4f2a',
              margin: '0 0 28px 0',
              display: 'flex',
            }}
          />

          {/* Sub-line */}
          <p
            style={{
              fontSize: 22,
              color: '#b89a72',
              margin: '0',
              letterSpacing: '0.05em',
              fontFamily: 'Georgia, serif',
            }}
          >
            Private Onsen · Barrel Sauna · Glamping
          </p>

          {/* Kanji accent */}
          <p
            style={{
              fontSize: 80,
              color: 'rgba(180,140,80,0.18)',
              margin: '20px 0 0 0',
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
            }}
          >
            森
          </p>
        </div>
      </div>
    ),
    { ...size },
  )
}
