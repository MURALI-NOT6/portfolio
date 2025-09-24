"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-2 rounded-full shadow-lg border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(link.href.substring(1));
              }}
              className={cn(
                "transition-colors hover:text-primary text-foreground/80 font-medium px-3 py-2 sm:px-4 rounded-full",
                activeSection === link.href.substring(1)
                  ? "bg-white text-primary"
                  : "hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
