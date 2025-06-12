
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playlist = [
    { title: "Groovy Beats", artist: "Store Vibes", duration: "3:24" },
    { title: "Shopping Jazz", artist: "Market Music", duration: "4:12" },
    { title: "Fresh Produce", artist: "Grocery Sounds", duration: "2:58" },
    { title: "Checkout Chill", artist: "Retail Rhythms", duration: "3:45" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Spotify Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-2xl glow-effect transition-all duration-300 hover:scale-110"
      >
        <Music className="h-6 w-6 text-white" />
      </Button>

      {/* Music Player Card */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 bg-card/95 backdrop-blur-lg border shadow-2xl animate-fade-in-up">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-500">
              <Music className="h-5 w-5" />
              Store Playlist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Song */}
            <div className="text-center">
              <h3 className="font-semibold">{playlist[currentSong].title}</h3>
              <p className="text-sm text-muted-foreground">{playlist[currentSong].artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1:23</span>
                <span>{playlist[currentSong].duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setCurrentSong(prev => Math.max(0, prev - 1))}
                className="rounded-full"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setCurrentSong(prev => Math.min(playlist.length - 1, prev + 1))}
                className="rounded-full"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm" className="rounded-full">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Playlist */}
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {playlist.map((song, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSong(index)}
                  className={`p-2 rounded cursor-pointer transition-colors ${
                    index === currentSong ? 'bg-green-500/20' : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium">{song.title}</p>
                      <p className="text-xs text-muted-foreground">{song.artist}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{song.duration}</span>
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

export default SpotifyPlayer;
