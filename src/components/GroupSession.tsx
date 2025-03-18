
import React from 'react';
import { Users, Clock, Plus } from 'lucide-react';

interface GroupSessionProps {
  activeSession?: {
    name: string;
    participants: number;
    duration: string;
  };
  recentSessions?: {
    name: string;
    participants: number;
    lastActive: string;
  }[];
}

const GroupSession: React.FC<GroupSessionProps> = ({ 
  activeSession,
  recentSessions = [
    { name: "Friday Vibes", participants: 4, lastActive: "2 days ago" },
    { name: "Workout Mix", participants: 2, lastActive: "1 week ago" }
  ]
}) => {
  return (
    <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-md">
      <h3 className="text-lg font-medium mb-4">Group Sessions</h3>
      
      {activeSession ? (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-sm">{activeSession.name}</h4>
            <span className="text-xs py-1 px-2 rounded-full bg-accent/20 text-accent">Live</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{activeSession.participants} listening</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{activeSession.duration}</span>
            </div>
          </div>
          
          <button className="w-full mt-3 py-2 bg-accent text-white rounded-lg text-sm">
            Join Session
          </button>
        </div>
      ) : (
        <div className="border border-dashed border-muted rounded-lg p-4 mb-5 flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground mb-2">No active sessions</p>
          <button className="py-1.5 px-3 bg-accent text-white rounded-lg text-xs flex items-center gap-1">
            <Plus size={14} />
            Create Session
          </button>
        </div>
      )}
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">Recent Sessions</h4>
        
        {recentSessions.map((session, index) => (
          <div key={index} className="bg-secondary/50 hover:bg-secondary rounded-lg p-3 transition-all duration-200">
            <div className="flex items-center justify-between mb-1">
              <h5 className="font-medium text-sm">{session.name}</h5>
              <span className="text-xs text-muted-foreground">{session.lastActive}</span>
            </div>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <Users size={12} className="mr-1" />
              <span>{session.participants} participants</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all duration-200 text-sm flex items-center justify-center gap-1">
        <Plus size={16} />
        Start New Session
      </button>
    </div>
  );
};

export default GroupSession;
