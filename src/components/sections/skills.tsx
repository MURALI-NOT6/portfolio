import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Database, Briefcase, BrainCircuit } from 'lucide-react';
import { ReactIcon } from "../icons/react-icon";
import { NodeIcon } from "../icons/node-icon";
import { TailwindIcon } from "../icons/tailwind-icon";

const skillsData = [
  {
    category: "Frontend",
    icon: <Palette className="h-6 w-6 text-accent" />,
    skills: [
      { name: "React", icon: <ReactIcon className="h-5 w-5" /> },
      { name: "Next.js", icon: <Code className="h-5 w-5" /> },
      { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="h-5 w-5" /> },
      { name: "HTML5 & CSS3", icon: <Code className="h-5 w-5" /> },
      { name: "Sass", icon: <Code className="h-5 w-5" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Node.js", icon: <NodeIcon className="h-5 w-5" /> },
      { name: "Express", icon: <Server className="h-5 w-5" /> },
      { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    ],
  },
  {
    category: "AI & Automation",
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Gemini AI", icon: <Code className="h-5 w-5" /> },
      { name: "Gemini CLI", icon: <Code className="h-5 w-5" /> },
      { name: "n8n", icon: <Code className="h-5 w-5" /> },
    ],
  },
  {
    category: "Tools",
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    skills: [
      { name: "Git & GitHub", icon: <Code className="h-5 w-5" /> },
      { name: "Webpack", icon: <Code className="h-5 w-5" /> },
      { name: "Azure", icon: <Server className="h-5 w-5" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 md:py-24 animate-in fade-in duration-500">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A look at the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((skillCategory, index) => (
            <Card key={skillCategory.category} className="animate-in fade-in zoom-in-95 duration-500" style={{'--index': index} as React.CSSProperties}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {skillCategory.icon}
                  <CardTitle className="font-headline text-xl sm:text-2xl">{skillCategory.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <Badge variant="secondary" key={skill.name} className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-normal flex items-center gap-2">
                       {skill.icon}
                       {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
