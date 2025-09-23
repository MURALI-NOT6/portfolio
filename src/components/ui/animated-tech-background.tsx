"use client";

import { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import { gsap } from 'gsap';
import {
  Code, BrainCircuit, Database, Server, Palette, Briefcase, Cloud, Wind, Bot, GitGraph
} from 'lucide-react';
import { ReactIcon } from '../icons/react-icon';
import { NodeIcon } from '../icons/node-icon';
import { TailwindIcon } from '../icons/tailwind-icon';
import { HtmlIcon } from '../icons/html-icon';
import { CssIcon } from '../icons/css-icon';
import { SassIcon } from '../icons/sass-icon';
import { TypescriptIcon } from '../icons/typescript-icon';
import { PythonIcon } from '../icons/python-icon';
import { PhpIcon } from '../icons/php-icon';

export function AnimatedTechBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const iconComponents = [
            ReactIcon, NodeIcon, TailwindIcon, HtmlIcon, CssIcon, SassIcon,
            TypescriptIcon, PythonIcon, PhpIcon, Code, BrainCircuit, Database,
            Server, Palette, Briefcase, Cloud, Wind, Bot, GitGraph
        ];
        const numParticles = 50;

        const particles = Array.from({ length: numParticles }).map((_, i) => {
            const IconComponent = iconComponents[i % iconComponents.length];
            const iconHtml = ReactDOMServer.renderToStaticMarkup(<IconComponent className="w-full h-full" />);

            const particle = document.createElement('div');
            particle.className = 'tech-particle';
            particle.innerHTML = iconHtml;
            container.appendChild(particle);

            const size = gsap.utils.random(20, 50);
            gsap.set(particle, {
                width: size,
                height: size,
                x: gsap.utils.random(0, container.offsetWidth),
                y: gsap.utils.random(0, container.offsetHeight),
                opacity: 0,
            });

            return particle;
        });

        particles.forEach((particle) => {
            const duration = gsap.utils.random(15, 30);
            const delay = gsap.utils.random(0, 3);

            gsap.to(particle, {
                x: `+=${gsap.utils.random(-200, 200)}`,
                y: `+=${gsap.utils.random(-200, 200)}`,
                rotation: `+=${gsap.utils.random(-360, 360)}`,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
                duration: duration,
                delay: delay
            });

            gsap.to(particle, {
                opacity: 0.2,
                duration: 2,
                delay: delay,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-background to-indigo-950/80 -z-10 overflow-hidden">
        </div>
    );
}
