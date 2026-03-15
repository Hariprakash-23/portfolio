import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Add a new bubble
      bubblesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 3,   // bubbles between 2px and 8px
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.5, // slight upward drift
        opacity: 1 + Math.random() * 0.4,
        color: `hsl(${Math.random() * 40 + 220}, 70%, 65%)`, // soft blue/indigo tones
        life: 1,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update bubbles
      bubblesRef.current = bubblesRef.current.filter(b => {
        b.x += b.speedX;
        b.y += b.speedY;
        b.life -= 0.008;
        b.opacity *= 0.99;
        return b.life > 0 && b.opacity > 0.01;
      });

      // Draw bubbles
      bubblesRef.current.forEach(b => {
        ctx.globalAlpha = b.opacity * b.life;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorEffect;