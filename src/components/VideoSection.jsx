import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { motion, AnimatePresence } from 'framer-motion';

const VideoSection = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const playerRef = useRef(null);
  const videoId = "hbL8dYiFkBg";

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      playsinline: 1,
      modestbranding: 1,
      rel: 0,
      loop: 1,
      playlist: videoId,
    },
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
      }
      setShowOverlay(false);
    }
  };

  const soundIconUrl = "https://horizons-cdn.hostinger.com/efa1de6f-091d-4d54-823a-b1f9a03d2947/de757a8a9d237e4b0282660c10994ccd.jpg";

  return (
    <section className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full h-0 bg-black overflow-hidden rounded-xl shadow-lg shadow-red-500/20 border border-gray-800" style={{ paddingBottom: '56.25%' }}>
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col justify-center items-center gap-4 z-20 cursor-pointer pointer-events-auto bg-black/30"
              aria-label="Ativar Som"
            >
              <motion.img 
                src={soundIconUrl} 
                alt="Ativar Som" 
                className="w-16 h-16 object-contain drop-shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white font-bold text-lg md:text-xl text-center uppercase tracking-wider px-4"
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}
              >
                🎬 Seu vídeo já começou! Toque 2x para ouvir 🔊
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={handleReady}
          className="absolute top-0 left-0 w-full h-full z-10"
          iframeClassName="w-full h-full"
        />
      </div>
    </section>
  );
};

export default VideoSection;