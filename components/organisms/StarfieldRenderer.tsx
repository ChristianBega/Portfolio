"use client";
import { useRef } from "react";
import { useStarfield } from "@/lib/starfield";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function StarfieldRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useStarfield(canvasRef, !reduced);
  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 z-[1] pointer-events-none" />;
}
