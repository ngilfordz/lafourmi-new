
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, Heart, X, ExternalLink, Minimize2, Maximize2 } from 'lucide-react';

const PremiumSpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentMood, setCurrentMood] = useState<'energetic' | 'chill'>('energetic');
  const [isCompact, setIsCompact] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number>();

  const energeticPlaylist = [
    { title: "High Energy Beat", artist: "Pump Music", duration: "3:24", spotifyUrl: "https://open.spotify.com/track/example1" },
    { title: "Workout Vibes", artist: "Gym Beats", duration: "4:12", spotifyUrl: "https://open.spotify.com/track/example2" },
    { title: "Dance Revolution", artist: "Club Mix", duration: "2:58", spotifyUrl: "https://open.spotify.com/track/example3" },
    { title: "Power Hour", artist: "Energy Flow", duration: "3:45", spotifyUrl: "https://open.spotify.com/track/example4" },
    { title: "Beast Mode", artist: "Motivational", duration: "4:23", spotifyUrl: "https://open.spotify.com/track/example5" }
  ];

  const chillPlaylist = [
    { title: "Peaceful Moments", artist: "Chill Vibes", duration: "4:15", spotifyUrl: "https://open.spotify.com/track/chill1" },
    { title: "Sunset Dreams", artist: "Relaxing Sounds", duration: "3:42", spotifyUrl: "https://open.spotify.com/track/chill2" },
    { title: "Ocean Breeze", artist: "Nature Mix", duration: "5:18", spotifyUrl: "https://open.spotify.com/track/chill3" },
    { title: "Coffee Shop Jazz", artist: "Ambient Cafe", duration: "3:56", spotifyUrl: "https://open.spotify.com/track/chill4" },
    { title: "Gentle Rain", artist: "Meditation Music", duration: "4:33", spotifyUrl: "https://open.spotify.com/track/chill5" }
  ];

  const currentPlaylist = currentMood === 'energetic' ? energeticPlaylist : chillPlaylist;

  // Music visualization setup
  useEffect(() => {
    if (audioRef.current && canvasRef.current) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audioRef.current);
      
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
      
      analyserRef.current = analyser;
    }
  }, []);

  // Visualization animation
  const drawVisualization = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      
      ctx!.fillStyle = currentMood === 'energetic' ? 'rgba(20, 20, 20, 0.1)' : 'rgba(10, 25, 40, 0.1)';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = canvas.width / bufferLength;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        
        const gradient = ctx!.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        if (currentMood === 'energetic') {
          gradient.addColorStop(0, '#ff6b35');
          gradient.addColorStop(1, '#f7931e');
        } else {
          gradient.addColorStop(0, '#4facfe');
          gradient.addColorStop(1, '#00f2fe');
        }
        
        ctx!.fillStyle = gradient;
        ctx!.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
        
        x += barWidth;
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    if (isPlaying) {
      draw();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      drawVisualization();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, currentMood]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openInNewWindow = () => {
    const newWindow = window.open('', '_blank', 'width=400,height=600,scrollbars=no,resizable=yes');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Lafourmi Music Player</title>
            <style>
              body { 
                margin: 0; 
                font-family: Arial, sans-serif; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
              }
            </style>
          </head>
          <body>
            <div id="player-container">
              <h3>Lafourmi Music Player - ${currentMood === 'energetic' ? 'Energetic' : 'Chill'} Mode</h3>
              <p>Now Playing: ${currentPlaylist[currentSong].title}</p>
              <p>Artist: ${currentPlaylist[currentSong].artist}</p>
              <button onclick="window.close()">Close Player</button>
            </div>
          </body>
        </html>
      `);
    }
  };

  const SpotifyLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );

  if (isCompact) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <Card className="w-80 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <SpotifyLogo />
                <span className="text-sm font-medium">Now Playing</span>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCompact(false)}
                  className="h-6 w-6 p-0"
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                onClick={togglePlay}
                className="rounded-full w-10 h-10 bg-green-500 hover:bg-green-600"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </Button>
              
              <div className="flex-1">
                <p className="text-sm font-medium truncate">{currentPlaylist[currentSong].title}</p>
                <p className="text-xs text-muted-foreground truncate">{currentPlaylist[currentSong].artist}</p>
              </div>
            </div>
            
            <canvas
              ref={canvasRef}
              width="280"
              height="40"
              className="w-full h-10 mt-2 rounded"
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* 3D Spotify Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl glow-effect transition-all duration-300 hover:scale-110 relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #1ed760, #1db954)',
          boxShadow: '0 8px 32px rgba(29, 185, 84, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <SpotifyLogo />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-full"></div>
      </Button>

      {/* Premium Music Player Card */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-96 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl border shadow-2xl animate-fade-in-up glow-effect">
          <CardHeader className="pb-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-green-500">
                <SpotifyLogo />
                Lafourmi Store Playlist
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openInNewWindow}
                  className="h-8 w-8 p-0 hover:bg-green-500/20"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCompact(true)}
                  className="h-8 w-8 p-0 hover:bg-green-500/20"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-red-500/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Mood Selection */}
            <div className="flex gap-2">
              <Button
                variant={currentMood === 'energetic' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentMood('energetic')}
                className="flex-1"
              >
                🔥 Energetic
              </Button>
              <Button
                variant={currentMood === 'chill' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentMood('chill')}
                className="flex-1"
              >
                🌊 Chill
              </Button>
            </div>

            {/* Current Song */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-lg">{currentPlaylist[currentSong].title}</h3>
              <p className="text-muted-foreground">{currentPlaylist[currentSong].artist}</p>
            </div>

            {/* Music Visualization */}
            <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden">
              <canvas
                ref={canvasRef}
                width="320"
                height="128"
                className="absolute inset-0 w-full h-full"
              />
              {!isPlaying && <Music className="h-12 w-12 text-white/80 relative z-10" />}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-green-500 h-2 rounded-full w-1/3 transition-all duration-300 shadow-sm"></div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1:23</span>
                <span>{currentPlaylist[currentSong].duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full w-10 h-10 hover:bg-green-500/20"
              >
                <Heart className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setCurrentSong(prev => Math.max(0, prev - 1))}
                  className="rounded-full w-10 h-10 hover:bg-green-500/20"
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
                
                <Button 
                  onClick={togglePlay}
                  className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setCurrentSong(prev => Math.min(currentPlaylist.length - 1, prev + 1))}
                  className="rounded-full w-10 h-10 hover:bg-green-500/20"
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full w-10 h-10 hover:bg-green-500/20"
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="flex-1 h-2 bg-muted rounded-full appearance-none slider"
              />
              <span className="text-sm w-8">{volume}</span>
            </div>

            {/* Playlist */}
            <div className="space-y-1 max-h-40 overflow-y-auto">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                {currentMood === 'energetic' ? 'Energetic Vibes' : 'Chill & Relax'}
              </h4>
              {currentPlaylist.map((song, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSong(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    index === currentSong 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-sm font-medium truncate">{song.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">{song.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Hidden Audio Element for Real Playback */}
      <audio
        ref={audioRef}
        loop
        volume={volume / 100}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/api/placeholder/audio" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default PremiumSpotifyPlayer;
