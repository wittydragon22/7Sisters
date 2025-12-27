import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeDialogProps {
  onComplete: () => void;
}

const dialogues = [
  "Hello，夏夏，你来咯",
  "欢迎来看我给你做的圣诞礼物！",
  "嘿嘿，没想到吧",
  "说点什么呢, emmmm",
  "算了你自己去看吧，我把话都藏在了星星里！",
  "晚会儿见！",
  "哦对了",
  "不准不喜欢啊"
];

// 流星组件
function ShootingStar({ delay }: { delay: number }) {
  const startX = Math.random() * 100;
  const startY = Math.random() * 50;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, 200, 400],
        y: [0, 150, 300],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 8 + 5,
        ease: "easeOut",
      }}
    >
      {/* 流星尾巴 */}
      <div
        className="absolute w-12 h-0.5 bg-gradient-to-r from-white to-transparent"
        style={{
          transformOrigin: 'left center',
          transform: 'rotate(35deg) translateX(-100%)',
        }}
      />
    </motion.div>
  );
}

export function WelcomeDialog({ onComplete }: WelcomeDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
      onClick={handleNext}
    >
      {/* 背景星空 */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 流星 */}
        {[...Array(8)].map((_, i) => (
          <ShootingStar key={`shooting-${i}`} delay={i * 2} />
        ))}
      </div>

      {/* 对话文字 - 无框 */}
      <div className="relative z-10 max-w-3xl w-full px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-4xl text-white leading-relaxed">
              {dialogues[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}