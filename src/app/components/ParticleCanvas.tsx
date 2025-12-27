import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX: number;
  targetY: number;
}

interface ParticleCanvasProps {
  color: string;
  particleCount?: number;
}

export function ParticleCanvas({ color, particleCount = 150 }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const imageFormingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < particleCount; i++) {
        // 在圆形区域内随机分布
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 200 + 50;
        const targetX = centerX + Math.cos(angle) * radius;
        const targetY = centerY + Math.sin(angle) * radius;

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          targetX,
          targetY,
        });
      }

      // 2秒后开始聚合成图案
      setTimeout(() => {
        imageFormingRef.current = true;
      }, 2000);
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        if (imageFormingRef.current) {
          // 向目标位置移动
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          particle.vx += dx * 0.0001;
          particle.vy += dy * 0.0001;

          // 添加阻尼
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // 边界处理（只在未形成图案时）
        if (!imageFormingRef.current) {
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        }

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // 连接相近的粒子
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dist = Math.hypot(particle.x - other.x, particle.y - other.y);
          
          if (dist < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `${color}${Math.floor((1 - dist / 80) * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [color, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: '#000' }}
    />
  );
}
