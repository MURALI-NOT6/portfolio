"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center gap-1 bg-card/95 backdrop-blur-md p-1.5 rounded-full shadow-xl border border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.href.substring(1));
                }}
                className={cn(
                  "transition-all duration-300 hover:text-primary font-medium px-5 py-2.5 rounded-full text-sm",
                  activeSection === link.href.substring(1)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md md:hidden border-b border-primary/10 shadow-sm">
        <div className="font-headline font-bold text-xl tracking-tight text-primary px-2">Portfolio</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[350px] border-l-primary/10">
            <SheetTitle className="text-left font-headline text-2xl font-bold mb-8">Navigation</SheetTitle>
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(link.href.substring(1));
                    }}
                    className={cn(
                      "text-xl font-medium transition-all duration-300 py-2 border-b border-transparent hover:border-primary/50",
                      activeSection === link.href.substring(1)
                        ? "text-primary border-primary pl-2"
                        : "text-muted-foreground hover:text-foreground hover:pl-2"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-xs text-muted-foreground">© 2025 Muralidharan Portfolio</p>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
