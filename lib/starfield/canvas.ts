import { RefObject, useEffect } from "react";

// --- Types ---

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  twinkleOffset: number;
  twinkleSpeed: number; // each star pulses at its own rate
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

// --- Helpers ---

function createStars(width: number, height: number, count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1,
    opacity: Math.random() < 0.15 ? 0.7 : 0.3 + Math.random() * 0.4,
    twinkle: Math.random() < 0.04,
    twinkleOffset: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.3 + Math.random() * 0.4, // slow: 0.3–0.7 (was driven by global elapsed)
  }));
}

function maybeSpawnShootingStar(shootingStars: ShootingStar[], width: number, height: number): ShootingStar[] {
  if (Math.random() < 0.0002 && shootingStars.length === 0) {
    shootingStars.push({
      x: Math.random() * width * 0.6,
      y: Math.random() * height * 0.3,
      vx: 2.5 + Math.random() * 1.5, // slightly slower: 2.5–4
      vy: 0.8 + Math.random() * 1.2,
      life: 0,
      maxLife: 90 + Math.random() * 40, // longer life
    });
  }
  return shootingStars;
}

function drawStars(ctx: CanvasRenderingContext2D, stars: Star[], mouseX: number, mouseY: number, width: number, height: number, elapsed: number) {
  stars.forEach((s) => {
    const px = s.x + (mouseX - width / 2) * 0.008;
    const py = s.y + (mouseY - height / 2) * 0.008;

    let opacity = s.opacity;

    if (s.twinkle) {
      // Smooth sine wave at each star's own slow speed
      // Result stays in range [baseOpacity * 0.5 ... baseOpacity * 1.5]
      // smoothstep-style: use sin only, no abs() — that's what caused the LED flash
      const wave = Math.sin(elapsed * s.twinkleSpeed + s.twinkleOffset);
      // wave is -1..1; remap to 0.5..1.5 multiplier
      const multiplier = 1 + wave * 0.5;
      opacity = Math.min(s.opacity * multiplier, 1);
    }

    ctx.beginPath();
    ctx.arc(px, py, s.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(223, 226, 255, ${opacity})`;
    ctx.fill();
  });
}

function drawShootingStars(ctx: CanvasRenderingContext2D, shootingStars: ShootingStar[]): ShootingStar[] {
  shootingStars.forEach((s) => {
    const progress = s.life / s.maxLife;

    // Smooth ease-in / ease-out alpha using smoothstep
    const alpha =
      progress < 0.15
        ? (progress / 0.15) ** 2 // ease in
        : 1 - ((progress - 0.15) / 0.85) ** 1.5; // ease out

    // Longer trail — 30 frames back
    const trailLength = 30;
    const tailX = s.x - s.vx * trailLength;
    const tailY = s.y - s.vy * trailLength;

    const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
    grad.addColorStop(0, `rgba(223, 226, 255, 0)`);
    grad.addColorStop(0.3, `rgba(223, 226, 255, ${alpha * 0.15})`);
    grad.addColorStop(0.7, `rgba(223, 226, 255, ${alpha * 0.5})`);
    grad.addColorStop(1, `rgba(223, 226, 255, ${alpha * 0.95})`);

    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(s.x, s.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Soft glow at head
    const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 3);
    glow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    glow.addColorStop(1, `rgba(223, 226, 255, 0)`);
    ctx.beginPath();
    ctx.arc(s.x, s.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    s.x += s.vx;
    s.y += s.vy;
    s.life++;
  });

  return shootingStars.filter((s) => s.life < s.maxLife);
}

// --- Hook ---

export function useStarfield(canvasRef: RefObject<HTMLCanvasElement | null>, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let stars = createStars(canvas.width, canvas.height, COUNT);
    let shootingStars: ShootingStar[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let elapsed = 0;
    let frame: number;

    const onMouse = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      elapsed += 0.01; // slower tick — was 0.02
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars(ctx, stars, mouseX, mouseY, canvas.width, canvas.height, elapsed);

      shootingStars = maybeSpawnShootingStar(shootingStars, canvas.width, canvas.height);
      shootingStars = drawShootingStars(ctx, shootingStars);

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [canvasRef, enabled]);
}
