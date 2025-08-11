import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext"; // Corrija o import para o contexto local
import { IconType } from "react-icons";

type SkillIcon = {
  icon: React.ComponentType;
  name: string;
};

type MarqueeRowProps = {
  readonly icons: ReadonlyArray<SkillIcon>;
  readonly direction?: "left" | "right";
  readonly speed?: number;
  readonly gapPx?: number;
};

export function MarqueeRow({
  icons,
  direction = "right",
  speed = 50,
  gapPx = 40,
}: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const COPIES = 6;
  const allIcons = Array(COPIES).fill(icons).flat();
  const contentWidthRef = useRef(0);

  const { theme } = useTheme(); // hook do next-themes

  useEffect(() => {
    if (!contentRef.current) return;
    contentWidthRef.current = contentRef.current.scrollWidth / COPIES;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!isPaused && lastTimestamp !== null) {
        const deltaTime = (timestamp - lastTimestamp) / 1000;
        const deltaX = speed * deltaTime;
        setOffsetX((prev) => {
          let next = direction === "left" ? prev - deltaX : prev + deltaX;
          if (direction === "left" && next <= -contentWidthRef.current) {
            next += contentWidthRef.current;
          } else if (direction === "right" && next >= contentWidthRef.current) {
            next -= contentWidthRef.current;
          }
          return next;
        });
      }
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed, isPaused]);

  const fadeBase = theme === "light" ? "#fff" : "#0f131a";

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-16 md:py-24 flex flex-col justify-center"
      style={{ minHeight: 260, height: "clamp(260px, 22vw, 320px)" }}
    >
      {/* Fade lateral esquerda */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 z-10"
        style={{
          background: `linear-gradient(to right, ${fadeBase} 80%, transparent 100%)`,
        }}
      />
      {/* Fade lateral direita */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 z-10"
        style={{
          background: `linear-gradient(to left, ${fadeBase} 80%, transparent 100%)`,
        }}
      />
      <div
        ref={contentRef}
        className="flex items-center justify-center whitespace-nowrap w-full"
        style={{
          transform: `translateX(${offsetX}px)`,
          width: "max-content",
          transition: isPaused ? "none" : undefined,
        }}
      >
        {allIcons.map((skill, idx) => {
          const Icon = skill.icon;
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="flex flex-col items-center justify-end"
              style={{ marginRight: gapPx, minWidth: 70, position: "relative" }}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIdx(null);
                setIsPaused(false);
              }}
            >
              <span
                className={`transition-all duration-300 flex-none
                  ${isHovered ? "scale-150 z-20" : "scale-100"}
                  ${hoveredIdx !== null && !isHovered ? "opacity-40" : ""}
                  text-4xl md:text-6xl text-primary drop-shadow-md`}
                style={{ cursor: "pointer" }}
              >
                <Icon />
              </span>
              {isHovered && (
                <span
                  className={`block mt-2 text-primary text-base md:text-lg font-semibold px-3 py-1 rounded shadow z-30`}
                  style={{
                    position: "absolute",
                    top: "-4.5rem",
                    whiteSpace: "nowrap",
                    background: theme === "light" ? "#fff" : "#0f131a",
                  }}
                >
                  {skill.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}