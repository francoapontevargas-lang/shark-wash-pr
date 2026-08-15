"use client";

import { useState, useCallback } from "react";

interface ComparatorProps {
  before: string;
  after: string;
  alt: string;
  className?: string;
  afterStyle?: React.CSSProperties;
}

function FallbackBlock({ path }: { path: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-concreto/30 text-abismo/60 text-sm font-mono p-4 text-center">
      {path}
    </div>
  );
}

export default function Comparator({
  before,
  after,
  alt,
  className = "",
  afterStyle,
}: ComparatorProps) {
  const [position, setPosition] = useState(50);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(Number(e.target.value));
    },
    []
  );

  return (
    <div
      className={`comparator-container relative aspect-[4/3] w-full rounded-lg bg-concreto/20 ${className}`}
    >
      {/* Bottom layer: clean / after */}
      <div className="absolute inset-0">
        {afterError ? (
          <FallbackBlock path={after} />
        ) : (
          <img
            src={after}
            alt={`${alt} (después)`}
            className="absolute inset-0 h-full w-full object-cover"
            style={afterStyle}
            onError={() => setAfterError(true)}
            draggable={false}
          />
        )}
      </div>

      {/* Top layer: dirty / before, clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeError ? (
          <FallbackBlock path={before} />
        ) : (
          <img
            src={before}
            alt={`${alt} (antes)`}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setBeforeError(true)}
            draggable={false}
          />
        )}
      </div>

      {/* Divider line */}
      <div
        className="comparator-divider"
        style={{ left: `${position}%` }}
      />

      {/* Shark fin handle */}
      <div
        className="comparator-handle"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          className="drop-shadow-md"
        >
          {/* Circle background */}
          <circle cx="18" cy="18" r="16" fill="#6EC6E8" />
          {/* Shark fin */}
          <path
            d="M18 8 C18 8, 24 16, 24 20 C24 24, 18 26, 18 26 C18 26, 12 24, 12 20 C12 16, 18 8, 18 8Z"
            fill="#06263D"
          />
          {/* Left/right arrows */}
          <path d="M8 18L12 15V21L8 18Z" fill="#06263D" />
          <path d="M28 18L24 15V21L28 18Z" fill="#06263D" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute left-3 bottom-3 rounded-full bg-abismo px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-lg z-10">
        ANTES
      </span>
      <span className="absolute right-3 bottom-3 rounded-full bg-espuma px-4 py-1.5 text-sm font-bold tracking-wide text-abismo shadow-lg z-10">
        DESPUÉS
      </span>

      {/* Invisible range input for interaction */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={handleChange}
        className="comparator-range"
        aria-label={`Comparador antes y después: ${alt}`}
      />
    </div>
  );
}
