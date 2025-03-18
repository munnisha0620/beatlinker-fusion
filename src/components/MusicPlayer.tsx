
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Share2, Heart } from 'lucide-react';

interface MusicPlayerProps {
  track?: {
    title: string;
    artist: string;
    album: string;
    coverArt: string;
    duration: number;
  };
  isPlaying?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  track = {
    title: "Synced Harmony",
    artist: "BeatSync Orchestra",
    album: "Connected Rhythms",
    coverArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: 237
  }, 
  isPlaying: initialIsPlaying = false 
}) => {
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isFavorite, setIsFavorite] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="glass-card rounded-2xl p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="relative aspect-square h-56 w-56 mx-auto sm:mx-0 rounded-xl overflow-hidden">
          <img 
            src={track.coverArt} 
            alt={`${track.title} by ${track.artist}`} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-medium tracking-tight mb-1">{track.title}</h2>
            <p className="text-muted-foreground">{track.artist} • {track.album}</p>
          </div>
          
          <div className="mt-auto space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-10">{formatTime(currentTime)}</span>
                <input 
                  type="range" 
                  min="0" 
                  max={track.duration} 
                  value={currentTime}
                  onChange={handleTimeChange}
                  className="flex-1 h-1 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent"
                />
                <span className="text-xs text-muted-foreground w-10 text-right">{formatTime(track.duration)}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200">
                  <SkipBack size={20} />
                </button>
                
                <button 
                  onClick={togglePlay}
                  className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/90 transition-colors duration-200"
                >
                  {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
                </button>
                
                <button className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200">
                  <SkipForward size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isFavorite ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                </button>
                
                <button className="h-9 w-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Share2 size={18} />
                </button>
                
                <div className="flex items-center gap-1 ml-2">
                  <Volume2 size={18} className="text-muted-foreground" />
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:w-2 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
