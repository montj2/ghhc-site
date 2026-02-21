import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MailchimpSignup } from "@/components/integrations/mailchimp-form";
import { GiveButterButton } from "@/components/integrations/givebutter-button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary/5">
        <div className="container px-4 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Where the love of Jesus wins!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
            Giving the gift of hope & self-respect through hygiene products and community support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button size="lg" asChild className="px-8 text-lg">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 text-lg">
              <Link href="/about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Hope", desc: "Providing a path forward for those in need." },
            { title: "Grace", desc: "Acting with compassion and understanding." },
            { title: "Kindness", desc: "Spreading love in every interaction." },
            { title: "Generosity", desc: "Sharing our resources with the community." },
          ].map((v) => (
            <Card key={v.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 max-w-[600px] text-center flex flex-col gap-6 items-center">
          <h2 className="text-3xl font-bold">Stay Connected</h2>
          <p className="text-muted-foreground">
            Sign up for our newsletter to receive updates on our impact and how you can help.
          </p>
          <MailchimpSignup />
        </div>
      </section>

      {/* GiveButter Placeholder */}
      <section className="container px-4 text-center py-8">
        <h2 className="text-3xl font-bold mb-8 text-primary">Support Our Cause</h2>
        <div className="bg-white border rounded-xl p-12 shadow-sm flex flex-col items-center gap-4">
          <p className="text-lg italic text-muted-foreground mb-4">
            &quot;For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink...&quot;
          </p>
          <GiveButterButton />
          <Button variant="link" className="mt-4">Learn more about where your donations go</Button>
        </div>
      </section>
    </div>
  );
}
