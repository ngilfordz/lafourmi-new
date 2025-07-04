
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, X, Minimize2, Maximize2 } from 'lucide-react';

const PremiumSpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMood, setCurrentMood] = useState<'energetic' | 'chill'>('energetic');
  const [isCompact, setIsCompact] = useState(false);

  const energeticPlaylistId = "6HIRUh3exeZ05hzT3O0I4L";
  const chillPlaylistId = "37i9dQZF1DZ06evO03FbPP";

  const SpotifyLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );

  if (isCompact) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <Card className="w-80 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl shadow-2xl border-grocery-yellow/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="text-green-500">
                  <SpotifyLogo />
                </div>
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
            
            <div className="w-full h-[152px]">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${currentMood === 'energetic' ? energeticPlaylistId : chillPlaylistId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Spotify Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl glow-effect transition-all duration-300 hover:scale-110 relative overflow-hidden text-white"
        style={{
          background: 'linear-gradient(145deg, #1ed760, #1db954)',
          boxShadow: '0 8px 32px rgba(29, 185, 84, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <SpotifyLogo />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-full"></div>
      </Button>

      {/* Music Player Card */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-96 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl border shadow-2xl animate-fade-in-up glow-effect border-grocery-yellow/20 overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-green-500">
                <SpotifyLogo />
                La Fourmi Store Playlist
              </div>
              <div className="flex gap-1">
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

            {/* Spotify Embed */}
            <div className="w-full h-[152px]">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${currentMood === 'energetic' ? energeticPlaylistId : chillPlaylistId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PremiumSpotifyPlayer;
