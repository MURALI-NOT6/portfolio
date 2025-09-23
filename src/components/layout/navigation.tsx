"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // A slight delay to ensure the hero section is fully rendered before we get its ref
    const timer = setTimeout(() => {
      heroRef.current = document.getElementById("home");
    }, 100);

    const handleScroll = () => {
      if (!navRef.current || !heroRef.current) return;

      const navHeight = navRef.current.offsetHeight;
      const heroHeight = heroRef.current.offsetHeight;
      const stickyPoint = heroHeight - navHeight;

      if (window.scrollY > stickyPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Find the active section
      let currentSection = '';
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));

      const scrollPosition = window.scrollY + navHeight + 50;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = `#${section.id}`;
          break;
        }
      }
      
      if(!currentSection && window.scrollY < heroHeight){
        currentSection = '';
      } else if (!currentSection && sections.length > 0 && sections[sections.length-1] && window.scrollY > sections[sections.length-1]!.offsetTop) {
        currentSection = `#${sections[sections.length-1]!.id}`;
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        ref={navRef}
        className={cn(
            "w-full transition-all duration-300 ease-in-out z-40 py-4",
            isSticky 
                ? "fixed top-0 animate-in fade-in slide-in-from-top-4" 
                : "absolute"
        )}
        style={{ bottom: isSticky ? undefined : 0 }}
      >
        <div className="container mx-auto flex items-center justify-center">
             <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-2 rounded-full shadow-lg border">
                {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = link.href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          const navHeight = isSticky && navRef.current ? navRef.current.offsetHeight : 0;
                          const offset = 50;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = targetElement.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - navHeight - offset;
                          
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className={cn(
                        "transition-colors hover:text-primary text-foreground/80 font-medium px-3 py-2 sm:px-4 rounded-full",
                        activeLink === link.href ? "bg-white text-primary" : "hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                ))}
            </div>
        </div>
      </nav>
      {isSticky && navRef.current && <div style={{ height: navRef.current.offsetHeight }} />}
    </>
  );
}
