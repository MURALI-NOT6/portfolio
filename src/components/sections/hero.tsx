"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { AnimatedTechBackground } from '@/components/ui/animated-tech-background';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import img from '../../assets/banner.png'

interface HeroSectionProps {
  animationsEnabled: boolean;
  setActiveSection: (section: string) => void;
}

export default function HeroSection({ animationsEnabled, setActiveSection }: HeroSectionProps) {
    const roles = ["Frontend Developer", "React Developer", "Automation Developer (n8n)", "Gen AI Developer","UI Developer"];
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-person');

  return (
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 min-h-screen">
      {animationsEnabled && <AnimatedTechBackground />}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
            <div className="relative flex justify-center items-center animate-in fade-in zoom-in-90 duration-500 delay-200 order-1 lg:order-2 h-[280px] sm:h-[350px] lg:h-[450px]">
                {heroImage && (
                    <div className="animated-border">
                        <Image
                            src={img}
                            alt={heroImage.description}
                            width={400}
                            height={400}
                            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] border-4 border-transparent"
                            data-ai-hint={heroImage.imageHint}
                            priority
                        />
                    </div>
                )}
            </div>
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                Muralidharan
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl md:text-3xl text-primary font-medium mt-2">
                {animationsEnabled && <TypingAnimation roles={roles} />}
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-500 delay-200">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                I build beautiful, functional, and accessible web experiences. Welcome to my personal corner of the internet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-500 delay-300">
              <Button size="lg" asChild variant={'default'}>
                <Link href="/resume.pdf" target="_blank" className='text-white flex items-center'>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
              <Button size="lg" variant="secondary" onClick={() => setActiveSection("contact")}>
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
