'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function MailchimpSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation: Use Mailchimp API or a service like 'react-mailchimp-subscribe'
    console.log('Signing up:', email);
    alert('Thank you for signing up!');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-sm">
      <div className="flex gap-2">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </div>
      <p className="text-[10px] text-muted-foreground">
        By subscribing, you agree to receive our updates and news.
      </p>
    </form>
  );
}
