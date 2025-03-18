
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Smartphone, Laptop, Tablet, QrCode, Link2, PlusCircle, CheckCircle2, Loader2 } from 'lucide-react';

const Connect = () => {
  const [connectingDevice, setConnectingDevice] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);

  const startConnecting = (deviceType: string) => {
    setConnectingDevice(deviceType);
    
    // Simulate connection process
    setTimeout(() => {
      setShowQRCode(true);
    }, 1000);
  };

  return (
    <Layout>
      <section className="mb-8 animate-slide-up">
        <h1 className="text-4xl font-light mb-2">Connect Devices</h1>
        <p className="text-muted-foreground">Link your devices for seamless music syncing.</p>
      </section>

      <section className="max-w-3xl mx-auto mb-10 animate-slide-up animate-delay-100">
        <div className="glass-card rounded-2xl p-6 transition-all duration-300">
          <h2 className="text-xl font-light mb-5 text-center">Select device type to connect</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <button 
              onClick={() => startConnecting('mobile')}
              className={`glass-morphism p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 hover:bg-secondary/50 ${
                connectingDevice === 'mobile' ? 'ring-2 ring-accent' : ''
              }`}
            >
              <Smartphone size={36} className="text-accent" />
              <span className="font-medium">Mobile</span>
            </button>
            
            <button 
              onClick={() => startConnecting('tablet')}
              className={`glass-morphism p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 hover:bg-secondary/50 ${
                connectingDevice === 'tablet' ? 'ring-2 ring-accent' : ''
              }`}
            >
              <Tablet size={36} className="text-accent" />
              <span className="font-medium">Tablet</span>
            </button>
            
            <button 
              onClick={() => startConnecting('laptop')}
              className={`glass-morphism p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 hover:bg-secondary/50 ${
                connectingDevice === 'laptop' ? 'ring-2 ring-accent' : ''
              }`}
            >
              <Laptop size={36} className="text-accent" />
              <span className="font-medium">Computer</span>
            </button>
          </div>
          
          {connectingDevice && (
            <div className="animate-scale-in">
              {!showQRCode ? (
                <div className="flex flex-col items-center py-10">
                  <Loader2 size={40} className="animate-spin text-accent mb-4" />
                  <p className="text-center">Preparing connection for your {connectingDevice}...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center py-6">
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <QrCode size={180} strokeWidth={0.5} className="text-black" />
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2">Connect your {connectingDevice}</h3>
                  <p className="text-center text-muted-foreground max-w-md mb-6">
                    Scan this QR code with your device's camera or BeatSync app to establish connection.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                    <button className="flex-1 py-2.5 bg-accent text-white rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors duration-200">
                      <Link2 size={18} />
                      <span>Copy Link</span>
                    </button>
                    
                    <button className="flex-1 py-2.5 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors duration-200">
                      <PlusCircle size={18} />
                      <span>Manual Setup</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      <section className="max-w-3xl mx-auto mb-24 animate-slide-up animate-delay-200">
        <h2 className="text-xl font-light mb-4">Connection Instructions</h2>
        
        <div className="glass-morphism rounded-xl p-5">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="p-1.5 bg-accent/10 rounded-full text-accent mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Download BeatSync App</h4>
                <p className="text-sm text-muted-foreground">Available on iOS, Android and desktop platforms.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="p-1.5 bg-accent/10 rounded-full text-accent mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Scan QR or Use Link</h4>
                <p className="text-sm text-muted-foreground">Use the device's camera or enter the link manually.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="p-1.5 bg-accent/10 rounded-full text-accent mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Confirm Connection</h4>
                <p className="text-sm text-muted-foreground">Approve the connection request on both devices.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="p-1.5 bg-accent/10 rounded-full text-accent mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Start Syncing</h4>
                <p className="text-sm text-muted-foreground">Your devices are now connected and ready to sync music.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
