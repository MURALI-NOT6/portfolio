"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Plus } from 'lucide-react';
import { ProjectDialog } from './project-dialog';

const allProjects = [
  {
    id: "project-1",
    title: "Multi-Content AI Detection Platform",
    year: "2025",
    type: "Web Application",
    description: "Developed a multi-content authenticity analysis tool for text, images, and videos using Next.js, TypeScript, and Google Genkit. This platform serves various sectors including media, marketing, and cybersecurity. Delivered business value in media, marketing, education, cybersecurity, and HR.",
    longDescription: "Built a powerful AI-driven platform that detects and verifies the authenticity of multiple content types—including text, images, and videos—to support industries such as media, marketing, education, cybersecurity, and HR. The platform was developed using Next.js as a web application.",
    responsibilities: [
        "Led R&D efforts focused on AI-based detection of fake or manipulated content (text, images, and videos), ensuring high accuracy and reliability.",
        "Designed the architecture and end-to-end technical strategy to support scalable and modular AI pipelines for real-time content analysis.",
        "Integrated Gemini AI (via Google Genkit) to handle advanced detection tasks such as:AI-generated text classification, Deepfake or altered image detection, Video authenticity analysis",
        "Developed core application features using Next.js, TypeScript, and TailwindCSS, ensuring a responsive and user-friendly interface.",
        "Led deployment and delivery of the project, aligning technical outcomes with stakeholder and industry-specific needs.",
        "Delivered a high-value solution used across various sectors to combat misinformation, ensure content integrity, and support digital trust."
    ],
    tags: ["Next.js", "Gemini AI", "TypeScript", "TailwindCSS", "Shadcn UI"],
    useCases: ["Media validation", "content moderation", "e-learning integrity", "brand safety", "HR candidate screening"],
    liveUrl: "#",
    mediaType: "image",
    mediaUrl: "https://storage.googleapis.com/makerteams-assets/cjs-story-screenshots/story-2-final.png"
  },
  {
    id: "project-2",
    title: "Auto Post",
    year: "2024",
    type: "Web Application",
    description: "Built a web application for social media automation that integrates AI (Gemini) and n8n workflows. The application can generate content and images automatically, or allow users to manually add post details, and then schedule or post directly to multiple social networks.",
    longDescription: "Built a web application for social media automation that integrates AI (Gemini) and n8n workflows. The application can generate content and images automatically, or allow users to manually add post details, and then schedule or post directly to multiple social networks.",
    responsibilities: [
        "Led the research and development (R&D) efforts for this project, focusing on the integration of AI and automation to create a seamless user experience.",
        "Architected the application and designed its overall flow, ensuring an efficient, scalable, and intuitive system for users.",
        "Developed the AI-powered features using Gemini AI, enabling automatic content generation, including text and images, based on user-defined themes or keywords.",
        "Integrated n8n to automate backend workflows, allowing the application to schedule and post directly to platforms like Facebook, Twitter, LinkedIn, etc., without manual intervention.",
        "Managed project progress by tracking development milestones, ensuring alignment with business objectives, and delivering iterative improvements.",
        "Oversaw testing and debugging phases, addressing issues related to integration between AI and social media APIs, as well as enhancing the overall user experience.",
        "Delivered regular updates and progress reports, ensuring stakeholders were aligned on the status and improvements made to the platform."
    ],
    tags: ["Next.js", "Gemini AI", "n8n", "AWS"],
    useCases: ["Social Media Automation", "Content Generation", "Workflow Integration"],
    liveUrl: "http://autopost.yenmin.in",
    mediaType: "video",
    mediaUrl: "https://storage.googleapis.com/makerteams-assets/cjs-story-screenshots/story-3-final.mp4"
  },
  {
    id: "project-3",
    title: "GOVT",
    year: "2023",
    type: "Web Site",
    description: "Developed a dynamic, responsive, and animation-rich government website that delivered real-time content updates with smooth transitions and user interactions.",
    longDescription: "Developed a dynamic, responsive, and animation-rich government website that delivered real-time content updates with smooth transitions and user interactions. The website focused on delivering a modern, interactive experience for public-facing government communications.",
    responsibilities: [
      "Led the end-to-end development of the project, guiding a frontend team to implement advanced UI animations and real-time content delivery.",
      "Architected and built a responsive design that dynamically loads content from APIs and displays it with smooth UI animations to enhance user engagement.",
      "Implemented content loader animations, scroll-based effects, and transition components to create a modern, engaging user experience.",
      "Ensured cross-browser compatibility and mobile responsiveness using best practices in CSS and component-based frontend frameworks.",
      "Managed project timelines, delegated tasks to the team, and ensured the project met performance, accessibility, and design standards.",
      "Collaborated with backend developers and designers to create a cohesive, scalable frontend system for ongoing content updates."
    ],
    tags: ["Wordpress", "CSS", "GSAP", "Javascript"],
    useCases: [],
    liveUrl: "#",
    mediaType: "image",
    mediaUrl: "https://storage.googleapis.com/makerteams-assets/cjs-story-screenshots/story-4-final.png"
  },
  {
    id: "project-4",
    title: "Alpha Deserve",
    year: "2022",
    type: "Web Site",
    description: "Alpha Deserve, a responsive, multi-page static website using React.js. This project combines modern design with seamless functionality, ensuring optimal performance and adaptability across devices.",
    longDescription: "Alpha Deserve, a responsive, multi-page static website using React.js. This project combines modern design with seamless functionality, ensuring optimal performance and adaptability across devices. Built with a focus on user experience, the website efficiently showcases content while leveraging React.js for enhanced interactive elements.",
    responsibilities: [
      "Developed UI for all screens Figma to web screen with responsive screen.",
      "Conducted testing, identified issues, and implemented fixes.",
      "Guided team members and provided training to maintain code standards."
    ],
    tags: ["React JS", "HTML", "CSS", "Javascript"],
    useCases: [],
    liveUrl: "https://alphadeserve.com/",
    mediaType: "video",
    mediaUrl: "https://storage.googleapis.com/makerteams-assets/cjs-story-screenshots/story-5-final.mp4"
  },
  {
    id: "project-5",
    title: "NFTICKET",
    year: "2022",
    type: "Web3-Web Site",
    description: "The NFTicket event ticket was designed for a digital event. The website is built on React and Mindbase blockchain technology. Users can use cryptocurrency tokens (NEAR) to purchase tickets and create event tokens on the website.",
    longDescription: "The NFTicket event ticket was designed for a digital event. The website is built on React and Mindbase blockchain technology. Users can use cryptocurrency tokens (NEAR) to purchase tickets and create event tokens on the website.",
    responsibilities: [
      "Developed user interfaces for multiple pages, translating designs from Figma into responsive web layouts.",
      "Conducted thorough testing of the application, identified issues, and implemented fixes to ensure smooth functionality.",
      "Integrated the web application with Mind-based blockchain technology for seamless interaction and data management."
    ],
    tags: ["React JS", "Redux", "Mindbase", "Metamask"],
    useCases: [],
    liveUrl: "#",
  },
  {
    id: "project-6",
    title: "Sulochana Pharmacy",
    year: "2021",
    type: "Website & Mobile App",
    description: "Sulochana Pharmacy is an e-commerce based website and mobile app. This platform is used to buy and sell medicine through online shopping.",
    longDescription: "Sulochana Pharmacy is an e-commerce based website and mobile app. This platform is used to buy and sell medicine through online shopping, providing a convenient solution for customers.",
    responsibilities: [
      "Developed both website and mobile applications, ensuring a consistent user experience across platforms.",
      "Conducted thorough testing, identified issues, and implemented fixes to maintain smooth functionality.",
      "Connected the backend for both web and mobile apps to a single WooCommerce database, ensuring seamless data synchronization and unified management."
    ],
    tags: ["WordPress", "Divi Builder", "Flutter", "WooCommerce"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-7",
    title: "RepGuardian",
    year: "2020",
    type: "Web Site",
    description: "A multi-page CMS website with a focus on mobile responsiveness, built using Wordpress and Divi builder.",
    longDescription: "Developed a multi-page CMS website for RepGuardian, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for multiple pages CMS website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["Wordpress", "Divi Builder", "UI Developer"],
    useCases: [],
    liveUrl: "https://www.repguardian.co/"
  },
  {
    id: "project-8",
    title: "Medicine Man",
    year: "2020",
    type: "Web Site",
    description: "Developed a single-page CMS website with a focus on mobile responsiveness using Wordpress and Divi builder.",
    longDescription: "Developed a single-page CMS website for Medicine Man, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for a single-page CMS website.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["WordPress", "Divi Builder", "HTML", "CSS", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-9",
    title: "Kiragrouplaw",
    year: "2019",
    type: "Web Site",
    description: "A multi-page CMS website with a focus on mobile responsiveness, built using Wordpress and Divi builder.",
    longDescription: "Developed a multi-page CMS website for Kiragrouplaw, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for multiple pages CMS website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["Wordpress", "Divi Builder", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-10",
    title: "Jsglobal",
    year: "2019",
    type: "Web Site",
    description: "A single-page website with a focus on mobile responsiveness.",
    longDescription: "Developed a single-page website for Jsglobal, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with HTML, CSS, JQuery, and Git, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for single page website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["HTML", "CSS", "JQuery", "Git", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-11",
    title: "Jayanthi Robert",
    year: "2019",
    type: "Web Site",
    description: "A multi-page CMS website with a focus on mobile responsiveness, built using Wordpress and Divi builder.",
    longDescription: "Developed a multi-page CMS website for Jayanthi Robert, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for multiple pages CMS website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["Wordpress", "Divi Builder", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-12",
    title: "Jatocorp",
    year: "2018",
    type: "Web Site",
    description: "A multi-page CMS website with a focus on mobile responsiveness, built using Wordpress and Divi builder.",
    longDescription: "Developed a multi-page CMS website for Jatocorp, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for multiple pages CMS website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["Wordpress", "Divi Builder", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-13",
    title: "Hijauan Agro",
    year: "2018",
    type: "Web Site",
    description: "A single-page website with a focus on mobile responsiveness.",
    longDescription: "Developed a single-page website for Hijauan Agro, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with HTML, CSS, JQuery, and Git, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for single page website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["HTML", "CSS", "JQuery", "Git", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-14",
    title: "Glottis",
    year: "2018",
    type: "Web Site",
    description: "Glottis has transformed the world’s most complicated supply chain difficulties into seamless, efficient systems. In order to meet clients’ requirements, Glottis provides unparalleled services and guarantees the best service and transportation for your shipment through air, land, and sea.",
    longDescription: "Glottis has transformed the world’s most complicated supply chain difficulties into seamless, efficient systems. In order to meet clients’ requirements, Glottis provides unparalleled services and guarantees the best service and transportation for your shipment through air, land, and sea.",
    responsibilities: [
      "Development of technical designs for Multiple pages cms website development.",
      "Mobile Responsive.",
      "Testing and Debugging."
    ],
    tags: ["WordPress", "Divi builder", "Git", "Web Applications", "Redux", "React Hooks", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-15",
    title: "Gamepay",
    year: "2017",
    type: "Web Application",
    description: "Gamepay NFT marketplace and Play-to-Earn game creation platform.",
    longDescription: "Gamepay NFT marketplace and Play-to-Earn game creation platform.",
    responsibilities: [
      "Convert design wireframes into website elements.",
      "Collaborated with web designers, backend developers to design, build, and test."
    ],
    tags: ["Git", "Web Applications", "React.js", "Redux", "React Hooks", "UI Developer"],
    useCases: [],
    liveUrl: "#"
  },
  {
    id: "project-16",
    title: "Fenceabroad",
    year: "2017",
    type: "Web Site",
    description: "A multi-page CMS website with a focus on mobile responsiveness, built using Wordpress and Divi builder.",
    longDescription: "Developed a multi-page CMS website for Fenceabroad, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.",
    responsibilities: [
      "Development of technical designs for multiple pages CMS website development.",
      "Ensured the website was fully mobile responsive.",
      "Conducted testing and debugging to ensure a high-quality, bug-free launch."
    ],
    tags: ["Wordpress", "Divi Builder", "UI Developer"],
    useCases: [],
    liveUrl: "https://www.fenceabroad.com/"
  }
];

const INITIAL_PROJECT_COUNT = 6;
const MAX_TAGS_VISIBLE = 3;

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECT_COUNT);

  const projects = allProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prevCount => prevCount + 6);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            const visibleTags = project.tags.slice(0, MAX_TAGS_VISIBLE);
            const hiddenTagsCount = project.tags.length - visibleTags.length;

            return (
              <ProjectDialog key={project.id} project={project} projectImage={projectImage}>
                <div className="h-full">
                  <Card className="group flex flex-col h-full animate-in fade-in zoom-in-95 duration-500 hover:border-primary/50 transition-all ease-in-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer" style={{'--index': index} as React.CSSProperties}>
                    {project.mediaType && project.mediaUrl ? (
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        {project.mediaType === 'image' ? (
                          <Image
                            src={project.mediaUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <video
                            src={project.mediaUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        )}
                      </div>
                    ) : projectImage && (
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={projectImage.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="font-headline text-xl lg:text-2xl truncate">{project.title}</CardTitle>
                        <Badge variant="outline" className="flex-shrink-0">{project.year}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{project.type}</Badge>
                      </div>
                      <CardDescription className="line-clamp-3 pt-2 text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {visibleTags.map(tag => (
                          <Badge key={tag} variant="secondary" className="whitespace-nowrap">{tag}</Badge>
                        ))}
                          {hiddenTagsCount > 0 && (
                          <Badge variant="outline" className="whitespace-nowrap">+{hiddenTagsCount}</Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex-grow flex items-center justify-between gap-4">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                            <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                                <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Live Site
                                </Link>
                            </Button>
                        ) : <div></div>}
                          <Button variant="link" className="text-primary hover:text-primary/80 px-0">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </ProjectDialog>
            )
          })}
        </div>

        {visibleProjects < allProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={handleLoadMore} variant="outline" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
