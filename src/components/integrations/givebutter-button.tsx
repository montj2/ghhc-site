'use client';

import { Button } from '@/components/ui/button';

interface GiveButterProps {
  campaign?: string;
}

export function GiveButterButton({ campaign = 'general' }: GiveButterProps) {
  const handleDonate = () => {
    // In a real implementation, you would:
    // 1. Add the GiveButter script to your layout
    // 2. Use their JS API to open the overlay
    // Or simply link to your campaign page
    window.open(`https://givebutter.com/godshygiene`, '_blank');
  };

  return (
    <Button 
      size="lg" 
      onClick={handleDonate}
      className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-full px-8"
    >
      Donate via GiveButter
    </Button>
  );
}
