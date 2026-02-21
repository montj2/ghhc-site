import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiveButterButton } from "@/components/integrations/givebutter-button";

export default function DonatePage() {
  return (
    <div className="container px-4 py-16 flex flex-col items-center gap-12">
      <div className="text-center max-w-[800px] flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Your Gift Changes Lives</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Every dollar you donate goes directly towards providing hygiene products, 
          hope, and dignity to those in need within our community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-[1000px]">
        {[
          { amount: "$25", impact: "Provides a full hygiene box for one student." },
          { amount: "$100", impact: "Supports our Project Warm initiative for a family." },
          { amount: "$500", impact: "Funds a community distribution event." },
        ].map((tier) => (
          <Card key={tier.amount} className="text-center border-2 hover:border-primary transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="text-3xl text-primary group-hover:scale-110 transition-transform">{tier.amount}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tier.impact}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GiveButter Embed Placeholder */}
      <div className="w-full max-w-[600px] border-2 border-dashed border-primary/20 rounded-2xl p-12 bg-muted/30 flex flex-col items-center gap-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Donate with GiveButter</h3>
          <p className="text-muted-foreground mb-6">
            We use GiveButter for secure, transparent donation processing.
          </p>
          <GiveButterButton />
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" /></svg>
            Secure Checkout
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
            Tax Deductible
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Prefer to mail a check? <br />
        <strong>God&apos;s Hygiene Help Center</strong><br />
        123 Grace Street, City, ST 12345
      </p>
    </div>
  );
}
