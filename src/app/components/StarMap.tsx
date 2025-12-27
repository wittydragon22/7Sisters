import { motion } from 'motion/react';
import { pleiadesStars } from '../data/stars';

interface StarMapProps {
  onStarClick: (starId: string) => void;
}

export function StarMap({ onStarClick }: StarMapProps) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 背景星空 */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 标题 */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl mb-4 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
          昂宿星团
        </h1>
        <p className="text-xl text-blue-200/80">The Pleiades · 七姐妹星团</p>
      </motion.div>

      {/* 星团容器 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[600px]">
          {/* 连接线 */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {pleiadesStars.map((star, i) => {
              return pleiadesStars.slice(i + 1).map((otherStar, j) => (
                <motion.line
                  key={`${star.id}-${otherStar.id}`}
                  x1={`${star.position.x}%`}
                  y1={`${star.position.y}%`}
                  x2={`${otherStar.position.x}%`}
                  y2={`${otherStar.position.y}%`}
                  stroke="rgba(147, 197, 253, 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
                />
              ));
            })}
          </svg>

          {/* 星星 */}
          {pleiadesStars.map((star, index) => (
            <motion.div
              key={star.id}
              className="absolute cursor-pointer group"
              style={{
                left: `${star.position.x}%`,
                top: `${star.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.3 }}
              onClick={() => onStarClick(star.id)}
            >
              {/* 星星光晕 */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  width: `${star.size * 2}px`,
                  height: `${star.size * 2}px`,
                  backgroundColor: star.color,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 星星核心 */}
              <div
                className="relative rounded-full"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: star.color,
                  boxShadow: `0 0 ${star.size}px ${star.color}`,
                }}
              />

              {/* 星星名称 */}
              <motion.div
                className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ zIndex: 20 }}
              >
                <div className="text-white text-center">
                  <div className="text-sm">{star.name}</div>
                  <div className="text-xs text-blue-200/60">{star.chineseName}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 说明文字 */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-blue-200/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        点击星星探索它的故事
      </motion.div>
    </div>
  );
}
