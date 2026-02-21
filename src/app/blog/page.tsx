import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockPosts = [
  {
    id: 1,
    title: "100 Boxes Delivered to Local Elementary",
    excerpt: "Thanks to our amazing volunteers, we were able to deliver over 100 hygiene boxes to students this week.",
    date: "Feb 15, 2026",
    category: "News"
  },
  {
    id: 2,
    title: "Tammy's Reflection: The Power of Hope",
    excerpt: "A personal note from our founder on why grace and kindness are at the heart of everything we do.",
    date: "Feb 10, 2026",
    category: "Reflections"
  },
  {
    id: 3,
    title: "Join Our Project Warm Initiative",
    excerpt: "As winter temperatures drop, we are looking for donations of blankets and warm clothing for our neighbors.",
    date: "Feb 01, 2026",
    category: "Programs"
  }
];

export default function BlogPage() {
  return (
    <div className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Our Blog</h1>
          <p className="text-muted-foreground">Stories of hope and updates from the field.</p>
        </div>
        <div className="flex gap-2">
          {["All", "News", "Reflections", "Programs"].map(cat => (
            <Button key={cat} variant="ghost" size="sm">{cat}</Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{post.category}</div>
              <CardTitle className="leading-tight hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t pt-4">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Button variant="link" className="p-0">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
