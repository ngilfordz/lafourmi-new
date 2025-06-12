
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';

const PremiumSpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playlist = [
    { title: "Lebanese Vibes", artist: "Market Sounds", duration: "3:24" },
    { title: "Shopping Jazz", artist: "Grocery Grooves", duration: "4:12" },
    { title: "Fresh Produce Beat", artist: "Lafourmi Sessions", duration: "2:58" },
    { title: "Checkout Chill", artist: "Store Ambience", duration: "3:45" },
    { title: "Lebanese Coffee Shop", artist: "Beirut Beats", duration: "4:23" }
  ];

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
        <Music className="h-7 w-7 text-white drop-shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-full"></div>
      </Button>

      {/* Premium Music Player Card */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-96 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl border shadow-2xl animate-fade-in-up glow-effect">
          <CardHeader className="pb-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-green-500">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Music className="h-4 w-4 text-white" />
              </div>
              Lafourmi Store Playlist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Current Song */}
            <div className="text-center space-y-2">
              <h3 className="font-bold text-lg">{playlist[currentSong].title}</h3>
              <p className="text-muted-foreground">{playlist[currentSong].artist}</p>
            </div>

            {/* Album Art Placeholder */}
            <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-inner">
              <Music className="h-12 w-12 text-white/80" />
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-green-500 h-2 rounded-full w-1/3 transition-all duration-300 shadow-sm"></div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1:23</span>
                <span>{playlist[currentSong].duration}</span>
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
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setCurrentSong(prev => Math.min(playlist.length - 1, prev + 1))}
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

            {/* Playlist */}
            <div className="space-y-1 max-h-40 overflow-y-auto">
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">Up Next</h4>
              {playlist.map((song, index) => (
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
    </div>
  );
};

export default PremiumSpotifyPlayer;
