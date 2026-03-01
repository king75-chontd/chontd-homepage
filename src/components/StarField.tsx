"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    function resize() {
      canvas!.width = canvas!.offsetWidth * window.devicePixelRatio;
      canvas!.height = canvas!.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    }

    function initStars() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      const count = Math.floor((w * h) / 4000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        drift: (Math.random() - 0.5) * 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    }

    function draw(time: number) {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      for (const star of stars) {
        star.y -= star.speed;
        star.x += star.drift;

        if (star.y < -5) {
          star.y = h + 5;
          star.x = Math.random() * w;
        }
        if (star.x < -5) star.x = w + 5;
        if (star.x > w + 5) star.x = -5;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity * (0.5 + twinkle * 0.5);

        // Gold color gradient
        const gradient = ctx!.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, `rgba(245, 230, 163, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(201, 168, 76, ${alpha * 0.6})`);
        gradient.addColorStop(1, `rgba(201, 168, 76, 0)`);

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Bright core
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 248, 220, ${alpha})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
