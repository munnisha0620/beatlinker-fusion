
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, Link2 } from 'lucide-react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="animate-fade-in">{children}</div>
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t z-10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link 
              to="/" 
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('/') 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Home size={20} className={isActive('/') ? 'animate-scale-in' : ''} />
              <span className="text-xs font-medium">Home</span>
            </Link>
            
            <Link 
              to="/playlists" 
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('/playlists') 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <List size={20} className={isActive('/playlists') ? 'animate-scale-in' : ''} />
              <span className="text-xs font-medium">Playlists</span>
            </Link>
            
            <Link 
              to="/connect" 
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('/connect') 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Link2 size={20} className={isActive('/connect') ? 'animate-scale-in' : ''} />
              <span className="text-xs font-medium">Connect</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
