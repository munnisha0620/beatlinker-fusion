
import React from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

interface DeviceSyncProps {
  connectedDevices: {
    type: 'mobile' | 'laptop' | 'tablet';
    name: string;
    isActive: boolean;
  }[];
}

const DeviceSync: React.FC<DeviceSyncProps> = ({ connectedDevices }) => {
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="h-5 w-5" />;
      case 'laptop':
        return <Laptop className="h-5 w-5" />;
      case 'tablet':
        return <Tablet className="h-5 w-5" />;
      default:
        return <Smartphone className="h-5 w-5" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-md">
      <h3 className="text-lg font-medium mb-4">Connected Devices</h3>
      
      <div className="space-y-3">
        {connectedDevices.map((device, index) => (
          <div 
            key={index} 
            className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
              device.isActive 
                ? 'bg-accent/10 border border-accent/20' 
                : 'bg-secondary/50 hover:bg-secondary'
            }`}
          >
            <div className={`p-2 rounded-full ${device.isActive ? 'bg-accent/20' : 'bg-secondary'}`}>
              {getDeviceIcon(device.type)}
            </div>
            
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">{device.name}</p>
              <p className={`text-xs ${device.isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                {device.isActive ? 'Currently active' : 'Connected'}
              </p>
            </div>
            
            <div className={`h-2 w-2 rounded-full ${device.isActive ? 'bg-accent animate-pulse-slow' : 'bg-muted'}`}></div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all duration-200 text-sm">
        Add new device
      </button>
    </div>
  );
};

export default DeviceSync;
