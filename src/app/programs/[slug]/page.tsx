import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

const programsData: Record<string, any> = {
  'school-boxes': {
    title: 'School Hygiene Boxes',
    description: 'Providing essential hygiene supplies to local elementary and middle schools.',
    content: 'Our School Hygiene Boxes are distributed monthly to partner schools. Each box contains items like soap, toothpaste, deodorant, and more, ensuring students can focus on learning without the stress of missing basic necessities.',
  },
  'student-bags': {
    title: 'Student Hygiene Bags',
    description: 'Individual hygiene kits designed specifically for students on the go.',
    content: 'We provide discrete, well-stocked hygiene bags for students who may not have a stable home environment. These kits are compact and contain all the essentials for daily personal care.',
  },
  'prayer': {
    title: 'Prayer Gathering',
    description: 'A space for spiritual growth and community support.',
    content: 'Join us every week for a time of reflection, prayer, and community. We believe in supporting the whole person—physically, emotionally, and spiritually.',
  },
  'project-warm': {
    title: 'Project Warm',
    description: 'Helping our neighbors stay warm during the cold winter months.',
    content: 'Project Warm provides blankets, coats, hats, and gloves to those experiencing homelessness or living in unheated homes. We accept donations of new or gently used winter gear throughout the year.',
  },
};

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programsData[params.slug];

  if (!program) {
    notFound();
  }

  return (
    <div className="container px-4 py-16 max-w-[800px]">
      <Link href="/" className="text-primary hover:underline mb-8 block">← Back to Home</Link>
      <h1 className="text-4xl font-bold text-primary mb-6">{program.title}</h1>
      <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
        {program.description}
      </p>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-lg leading-relaxed text-foreground/80">
          {program.content}
        </p>
      </div>
      <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
        <h3 className="text-2xl font-bold mb-4">Want to support this program?</h3>
        <p className="text-muted-foreground mb-8">
          Your donations specifically towards {program.title} make a direct difference in these students&apos; lives.
        </p>
        <Button size="lg" asChild>
          <Link href="/donate">Donate to this Program</Link>
        </Button>
      </div>
    </div>
  );
}
