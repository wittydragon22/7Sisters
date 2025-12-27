import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WelcomeDialog } from './components/WelcomeDialog';
import { StarMap } from './components/StarMap';
import { StarDetail } from './components/StarDetail';
import { FinalMessage } from './components/FinalMessage';
import { MusicPlayer } from './components/MusicPlayer';
import { pleiadesStars } from './data/stars';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedStarId, setSelectedStarId] = useState<string | null>(null);
  const [visitedStars, setVisitedStars] = useState<Set<string>>(new Set());
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  
  const selectedStar = pleiadesStars.find(star => star.id === selectedStarId);

  const handleStarClick = (starId: string) => {
    setSelectedStarId(starId);
    setVisitedStars(prev => new Set(prev).add(starId));
  };

  const handleBackToMap = () => {
    setSelectedStarId(null);
    // 只有在返回星图时才检查是否所有星星都被访问过
    if (visitedStars.size === pleiadesStars.length && !showFinalMessage) {
      // 延迟显示，让返回动画先完成
      setTimeout(() => {
        setShowFinalMessage(true);
      }, 600);
    }
  };

  if (showWelcome) {
    return <WelcomeDialog onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {selectedStar ? (
          <StarDetail
            key={selectedStar.id}
            star={selectedStar}
            onBack={handleBackToMap}
          />
        ) : (
          <motion.div
            key="star-map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StarMap onStarClick={handleStarClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 最终祝福消息 */}
      <AnimatePresence>
        {showFinalMessage && !selectedStar && (
          <FinalMessage onClose={() => setShowFinalMessage(false)} />
        )}
      </AnimatePresence>

      {/* 音乐播放器 */}
      <MusicPlayer />
    </div>
  );
}