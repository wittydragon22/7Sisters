import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface FinalMessageProps {
  onClose: () => void;
}

export function FinalMessage({ onClose }: FinalMessageProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-3xl px-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
      >
        {/* 装饰性星星 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>
        ))}

        {/* 主要文字内容 */}
        <div className="relative text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-5xl text-white leading-relaxed mb-8">
              说了这么多，最重要的一点
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p 
              className="text-6xl mb-8"
              style={{
                background: 'linear-gradient(45deg, #ffd700, #ffed4e, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              夏夏一定要开开心心，健健康康！
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <p className="text-7xl bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              圣诞快乐！！！
            </p>
          </motion.div>

          <motion.p
            className="text-white/60 text-lg mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            点击任意处返回星图
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
