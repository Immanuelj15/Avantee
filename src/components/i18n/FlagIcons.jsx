import React from 'react';

// Circular Vector SVG Flags for crisp retina display
export const FlagIcon = ({ code, size = 26 }) => {

  switch (code) {
    case 'en':
      // UK Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <circle cx="50" cy="50" r="50" fill="#00247D" />
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="16" />
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="#CF142B" strokeWidth="10" />
          <path d="M50,0 V100 M0,50 H100" stroke="#FFFFFF" strokeWidth="24" />
          <path d="M50,0 V100 M0,50 H100" stroke="#CF142B" strokeWidth="14" />
        </svg>
      );

    case 'fr':
      // France Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="33.3" height="100" fill="#002395" />
          <rect x="33.3" y="0" width="33.3" height="100" fill="#FFFFFF" />
          <rect x="66.6" y="0" width="33.4" height="100" fill="#ED2939" />
        </svg>
      );

    case 'de':
      // Germany Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#000000" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#DD0000" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#FFCC00" />
        </svg>
      );

    case 'es':
      // Spain Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="25" fill="#AA151B" />
          <rect x="0" y="25" width="100" height="50" fill="#F1BF00" />
          <rect x="0" y="75" width="100" height="25" fill="#AA151B" />
          <circle cx="35" cy="50" r="10" fill="#AA151B" opacity="0.4" />
        </svg>
      );

    case 'nl':
      // Netherlands Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#AE1C28" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#21468B" />
        </svg>
      );

    case 'sv':
    case 'se':
      // Sweden Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#006AA7" />
          <rect x="30" y="0" width="18" height="100" fill="#FECC00" />
          <rect x="0" y="41" width="100" height="18" fill="#FECC00" />
        </svg>
      );

    case 'ta':
    case 'hi':
      // India Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#FF9933" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#138808" />
          <circle cx="50" cy="50" r="10" stroke="#000080" strokeWidth="2.5" fill="none" />
        </svg>
      );

    case 'ja':
      // Japan Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="28" fill="#BC002D" />
        </svg>
      );

    case 'zh':
      // China Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#EE1C25" />
          <polygon points="25,18 29,30 40,30 31,37 34,48 25,41 16,48 19,37 10,30 21,30" fill="#FFFF00" />
        </svg>
      );

    case 'ar':
      // Saudi Arabia Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#006C35" />
          <path d="M25,50 H75 M30,58 H70" stroke="#FFFFFF" strokeWidth="4" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <circle cx="50" cy="50" r="50" fill="#1B7F5B" />
        </svg>
      );
  }
};
