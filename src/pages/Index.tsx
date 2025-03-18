
import React from 'react';
import Layout from '../components/Layout';
import MusicPlayer from '../components/MusicPlayer';
import DeviceSync from '../components/DeviceSync';
import GroupSession from '../components/GroupSession';

const Index = () => {
  // Mock data for demonstration
  const connectedDevices = [
    { type: 'laptop', name: 'MacBook Pro', isActive: true },
    { type: 'mobile', name: 'iPhone 13', isActive: false },
    { type: 'tablet', name: 'iPad', isActive: false },
  ];
  
  const activeSession = {
    name: "Ambient Focus",
    participants: 3,
    duration: "45 min"
  };

  return (
    <Layout>
      <section className="mb-10 animate-slide-up">
        <h1 className="text-4xl font-light mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Pick up where you left off across all your devices.</p>
      </section>

      <section className="mb-10 animate-slide-up animate-delay-100">
        <MusicPlayer isPlaying={false} />
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up animate-delay-200">
        <DeviceSync connectedDevices={connectedDevices} />
        <GroupSession activeSession={activeSession} />
      </section>
    </Layout>
  );
};

export default Index;
