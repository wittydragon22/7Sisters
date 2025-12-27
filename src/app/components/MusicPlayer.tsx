import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 自动播放（大多数浏览器需要用户交互后才能播放）
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // 如果自动播放失败，用户需要手动点击
          console.log('需要用户交互才能播放音乐');
        });
      }
    };

    // 尝试在用户第一次点击时播放
    document.addEventListener('click', playAudio, { once: true });
    
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        // 如果还没播放，先播放
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(err => {
          console.error('播放失败:', err);
        });
      } else {
        // 切换静音
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  // 检查音频加载错误
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleError = (e: Event) => {
        console.error('音频加载失败:', e);
        console.error('尝试加载的文件:', audio.src);
      };
      const handleCanPlay = () => {
        console.log('音频加载成功:', audio.src);
      };
      
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      
      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <>
      {/* 背景音乐 - 使用本地音乐文件 */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
      >
        {/* 添加版本号强制刷新缓存 */}
        <source src="/background-music.mp3?v=2" type="audio/mpeg" />
      </audio>

      {/* 音乐控制按钮 */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
        
        {/* 音波动画 */}
        {isPlaying && !isMuted && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    </>
  );
}
