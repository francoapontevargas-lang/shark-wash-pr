"use client";

import { useState, useCallback, useRef } from "react";

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
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`comparator-container relative aspect-[4/3] w-full rounded-lg bg-concreto/20 select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "none" }}
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
        <div className="flex size-11 items-center justify-center rounded-full bg-marea shadow-lg">
          <img
            src="/shark.png"
            alt=""
            className="size-7 object-contain"
            draggable={false}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 bottom-3 rounded-full bg-abismo px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-lg z-10 pointer-events-none">
        ANTES
      </span>
      <span className="absolute right-3 bottom-3 rounded-full bg-espuma px-4 py-1.5 text-sm font-bold tracking-wide text-abismo shadow-lg z-10 pointer-events-none">
        DESPUÉS
      </span>
    </div>
  );
}
