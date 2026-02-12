"use client";

import { useEffect, useRef } from "react";

export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Array<{ x: number; y: number; size: number; speed: number; opacity: number }> = [];

        // Inner Compass drift variables
        let offset = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((canvas.width * canvas.height) / 4000); // Density control
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.1, // Tiny, distant stars
                    speed: Math.random() * 0.2 + 0.05, // Very slow drift
                    opacity: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Void Gradient
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width
            );
            gradient.addColorStop(0, "#111111"); // Space Surface center
            gradient.addColorStop(1, "#000000"); // Space Black edges
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            ctx.fillStyle = "#FFF";
            stars.forEach((star) => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                // Parallax drift mainly vertical (upwards levitation)
                const yPos = (star.y - offset * star.speed) % canvas.height;
                const finalY = yPos < 0 ? yPos + canvas.height : yPos;

                ctx.arc(star.x, finalY, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            offset += 0.5; // Constant slow upward drift
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
        />
    );
}
