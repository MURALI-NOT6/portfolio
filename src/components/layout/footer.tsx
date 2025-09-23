import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="w-full container py-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <p className="text-sm text-secondary-foreground">
          © 2025 muralidharan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
