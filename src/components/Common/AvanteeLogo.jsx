import React from 'react';

export const AvanteeLogo = ({ width = 180, height, showTagline = true, className = '' }) => {
  // SVG aspect ratio 420x120 => height is 28.57% of width if height is not explicitly passed
  const calcHeight = height || Math.round((width * 120) / 420);

  return (
    <svg
      width={width}
      height={calcHeight}
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Green Apex Chevron "A" */}
      <path
        d="M65 15L120 110H90L65 62L40 110H10L65 15Z"
        fill="#22C55E"
      />

      {/* Inner Silver Chevron "A" */}
      <path
        d="M65 42L85 82H70L65 70L60 82H45L65 42Z"
        fill="#A1A1AA"
      />

      {/* Center Sparkle Star in Inner Chevron */}
      <path
        d="M65 58C65 62 62 65 58 65C62 65 65 68 65 72C65 68 68 65 72 65C68 65 65 62 65 58Z"
        fill="#111111"
      />

      {/* Text "AVANTEE" */}
      <g fill="#22C55E">
        {/* A 1 */}
        <path d="M142 20H166L182 90H162L159 74H145L142 90H126L142 20ZM152 40L147 60H157L152 40Z" />
        {/* Star Sparkle in A 1 Counter */}
        <path d="M152 44C152 47 150 49 147 49C150 49 152 51 152 54C152 51 154 49 157 49C154 49 152 47 152 44Z" fill="#111111" />

        {/* V */}
        <path d="M184 20H202L212 70L222 20H240L221 90H203L184 20Z" />

        {/* A 2 */}
        <path d="M242 20H266L282 90H262L259 74H245L242 90H226L242 20ZM252 40L247 60H257L252 40Z" />
        {/* Star Sparkle in A 2 Counter */}
        <path d="M252 44C252 47 250 49 247 49C250 49 252 51 252 54C252 51 254 49 257 49C254 49 252 47 252 44Z" fill="#111111" />

        {/* N */}
        <path d="M285 20H303L321 62V20H336V90H318L300 48V90H285V20Z" />

        {/* T */}
        <path d="M338 20H380V34H367V90H351V34H338V20Z" />

        {/* E 1 */}
        <path d="M382 20H414V34H397V47H411V60H397V76H415V90H382V20Z" />

        {/* E 2 */}
        <path d="M418 20H450V34H433V47H447V60H433V76H451V90H418V20Z" />
      </g>

      {/* Tagline "WHERE VARIETY MEETS EXCELLENCE" */}
      {showTagline && (
        <text
          x="142"
          y="108"
          fill="#D4D4D8"
          fontSize="13.5"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
          fontWeight="700"
          letterSpacing="2.2"
        >
          WHERE VARIETY MEETS EXCELLENCE
        </text>
      )}
    </svg>
  );
};

export const AvanteeLogoMark = ({ size = 44, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Green Apex Chevron "A" */}
      <path
        d="M60 10L115 110H85L60 60L35 110H5L60 10Z"
        fill="#22C55E"
      />
      {/* Inner Silver Chevron "A" */}
      <path
        d="M60 40L80 82H68L60 68L52 82H40L60 40Z"
        fill="#E4E4E7"
      />
      {/* Center Sparkle Star */}
      <path
        d="M60 56C60 60 56 63 52 63C56 63 60 66 60 70C60 66 64 63 68 63C64 63 60 60 60 56Z"
        fill="#061A14"
      />
    </svg>
  );
};
