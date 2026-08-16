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
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef<{ x: number; y: number } | null>(null);
  const locked = useRef<"slider" | "scroll" | null>(null);

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
      startPos.current = { x: e.clientX, y: e.clientY };
      locked.current = null;
      isDragging.current = false;
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!startPos.current) return;

      // Determine direction on first significant move
      if (!locked.current) {
        const dx = Math.abs(e.clientX - startPos.current.x);
        const dy = Math.abs(e.clientY - startPos.current.y);
        if (dx < 5 && dy < 5) return; // too small to decide

        if (dx > dy) {
          // Horizontal — lock to slider
          locked.current = "slider";
          isDragging.current = true;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        } else {
          // Vertical — let page scroll
          locked.current = "scroll";
          startPos.current = null;
          return;
        }
      }

      if (locked.current === "slider") {
        e.preventDefault();
        updatePosition(e.clientX);
      }
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    // If user tapped without dragging, update position to tap location
    isDragging.current = false;
    startPos.current = null;
    locked.current = null;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className={`comparator-container relative aspect-[4/3] w-full rounded-lg bg-concreto/20 select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      style={{ touchAction: "pan-y" }}
    >
      {/* Bottom layer: clean / after */}
      <div className="absolute inset-0 pointer-events-none">
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
        className="absolute inset-0 pointer-events-none"
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
        className="comparator-divider pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Shark fin handle */}
      <div
        className="comparator-handle pointer-events-none"
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
