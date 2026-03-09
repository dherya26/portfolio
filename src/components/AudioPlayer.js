import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
    }

    const startAudio = () => {
      if (audio && audio.paused) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            // Once playing, remove all interaction listeners
            cleanup();
          })
          .catch(err => {
            console.log("Playback failed:", err);
          });
      }
    };

    const cleanup = () => {
      window.removeEventListener('mousedown', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
    };

    // Add multiple event listeners to catch the first user interaction
    window.addEventListener('mousedown', startAudio);
    window.addEventListener('keydown', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('scroll', startAudio);

    return cleanup;
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Toggle play failed:", err));
    }
  };

  return (
    <div className="audio-player fixed bottom-8 right-8 z-50">
      <audio 
        ref={audioRef}
        loop 
        preload="auto"
        crossOrigin="anonymous"
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" 
      />
      <button 
        onClick={togglePlay}
        className="flex items-center space-x-2 bg-background/20 backdrop-blur-md border border-border/40 px-4 py-2 rounded-full hover:bg-background/40 transition-all duration-300 group shadow-lg"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end space-x-0.5 h-3">
              <div className="w-0.5 bg-primary animate-[music-bar_0.6s_ease-in-out_infinite]"></div>
              <div className="w-0.5 bg-primary animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
              <div className="w-0.5 bg-primary animate-[music-bar_0.7s_ease-in-out_infinite]"></div>
              <div className="w-0.5 bg-primary animate-[music-bar_0.9s_ease-in-out_infinite]"></div>
            </div>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </div>
        <span className="text-[10px] font-bold text-foreground tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {isPlaying ? 'Mute' : 'Music'}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
