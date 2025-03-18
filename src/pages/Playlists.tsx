
import React from 'react';
import Layout from '../components/Layout';
import { Search, Plus, Clock, MoreHorizontal } from 'lucide-react';

const Playlists = () => {
  // Mock data for demonstration
  const playlists = [
    {
      id: 1,
      title: "Morning Vibes",
      tracks: 23,
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 2
    },
    {
      id: 2,
      title: "Workout Mix",
      tracks: 15,
      cover: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 3
    },
    {
      id: 3,
      title: "Focus & Productivity",
      tracks: 34,
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 1
    },
    {
      id: 4,
      title: "Chill Evening",
      tracks: 18,
      cover: "https://images.unsplash.com/photo-1614149162883-504ce46d75a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 2
    },
    {
      id: 5,
      title: "Weekend Party",
      tracks: 45,
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 0
    },
    {
      id: 6,
      title: "Road Trip",
      tracks: 27,
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      syncedDevices: 3
    }
  ];

  const recentlyPlayed = [
    {
      title: "Synced Harmony",
      artist: "BeatSync Orchestra",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      playedAt: "2 hours ago"
    },
    {
      title: "Digital Pulse",
      artist: "Electronic Waves",
      cover: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      playedAt: "Yesterday"
    },
    {
      title: "Acoustic Journey",
      artist: "Strings & Soul",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      playedAt: "3 days ago"
    }
  ];

  return (
    <Layout>
      <section className="mb-8 animate-slide-up">
        <h1 className="text-4xl font-light mb-2">Your Playlists</h1>
        <p className="text-muted-foreground">Manage and sync your music collections.</p>
        
        <div className="mt-5 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search playlists..." 
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 hover:bg-secondary focus:bg-secondary rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </section>

      <section className="mb-10 animate-slide-up animate-delay-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-light">Your Playlists</h2>
          <button className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/70 transition-colors duration-200">
            <Plus size={16} />
            <span>Create</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square">
                <img 
                  src={playlist.cover} 
                  alt={playlist.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Play size={20} className="ml-1" />
                  </button>
                </div>
                
                {playlist.syncedDevices > 0 && (
                  <span className="absolute top-2 right-2 bg-accent/90 text-white text-xs py-1 px-2 rounded-full">
                    Synced ({playlist.syncedDevices})
                  </span>
                )}
              </div>
              
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm">{playlist.title}</h3>
                    <p className="text-xs text-muted-foreground">{playlist.tracks} tracks</p>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground p-1 rounded-full transition-colors duration-200">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-24 animate-slide-up animate-delay-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-light">Recently Played</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground">
            View all
          </button>
        </div>
        
        <div className="space-y-2">
          {recentlyPlayed.map((track, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-2 flex items-center gap-3 transition-all duration-200 hover:bg-secondary/50"
            >
              <img 
                src={track.cover} 
                alt={track.title} 
                className="h-12 w-12 object-cover rounded-md"
              />
              
              <div className="flex-1">
                <h4 className="text-sm font-medium">{track.title}</h4>
                <p className="text-xs text-muted-foreground">{track.artist}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock size={12} className="mr-1" />
                  {track.playedAt}
                </span>
                
                <button className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
                  <Play size={16} className="ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

// Need to import Play for playlist cards
import { Play } from 'lucide-react';

export default Playlists;
