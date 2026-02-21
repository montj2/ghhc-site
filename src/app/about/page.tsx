import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Intro */}
      <section className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h1>
        <p className="text-xl text-muted-foreground max-w-[900px] mx-auto leading-relaxed">
          God&apos;s Hygiene Help Center was founded on the belief that everyone deserves the dignity of being clean. 
          We provide hygiene products to those who need them most, sharing the love of Jesus through every interaction.
        </p>
      </section>

      {/* Our Work */}
      <section className="bg-muted py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Meeting Essential Needs</h3>
              <p className="text-muted-foreground">
                For many in our community, basic hygiene products are a luxury they cannot afford. 
                We fill that gap by providing everything from soap and toothpaste to school hygiene boxes.
              </p>
              <ul className="space-y-3">
                {[
                  "Monthly hygiene box distribution",
                  "Support for local schools and students",
                  "Winter warmth programs",
                  "Spiritual support and prayer"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/20 text-primary font-medium">
              Image: Community Impact
            </div>
          </div>
        </div>
      </section>

      {/* Meet Tammy / Team Placeholder */}
      <section className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Tammy", role: "Founder", bio: "Driven by a vision to serve the community through grace." },
            { name: "Board Member", role: "Leadership", bio: "Guiding our mission with wisdom and dedication." },
            { name: "Volunteer", role: "Community", bio: "The hands and feet of our organization." },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                {member.name[0]}
              </div>
              <div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container px-4 py-8">
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Want to join our mission?</h2>
          <p className="text-lg opacity-90 max-w-[600px]">
            Whether through donation, volunteering, or prayer, your support makes a direct impact on our neighbors.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary">Volunteer</Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary transition-colors">Donate</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
