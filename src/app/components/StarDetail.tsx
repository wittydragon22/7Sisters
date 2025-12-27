import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { Star } from '../data/stars';

interface StarDetailProps {
  star: Star;
  onBack: () => void;
}

export function StarDetail({ star, onBack }: StarDetailProps) {
  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 粒子背景 */}
      <ParticleCanvas color={star.color} />

      {/* 返回按钮 */}
      <motion.button
        className="absolute top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>返回星图</span>
      </motion.button>

      {/* 内容区域 */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="max-w-4xl w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* 星星标题 */}
            <div className="mb-6">
              <h1
                className="text-7xl mb-4 tracking-wide"
                style={{
                  color: star.color,
                  textShadow: `0 0 30px ${star.color}, 0 0 60px ${star.color}`,
                }}
              >
                {star.name}
              </h1>
              <p className="text-3xl text-white/80">{star.chineseName}</p>
            </div>

            {/* 装饰性星星图标 */}
            <motion.div
              className="flex justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: star.color }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* 星星介绍 */}
            <motion.div
              className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-lg text-white/90 leading-relaxed">
                {star.description}
              </p>
            </motion.div>

            {/* 鼓舞人心的话 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4" style={{ color: star.color }}>
                  "
                </div>
                <p className="text-xl text-white italic leading-relaxed px-4">
                  {star.inspirationalQuote}
                </p>
                <div className="text-6xl mt-4 text-right" style={{ color: star.color }}>
                  "
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 漂浮的小星星装饰 */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            backgroundColor: star.color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${star.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
}
