import type { SVGProps } from 'react';

export function PhpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <title>PHP Logo</title>
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="#8892be" />
        <path d="M7 9.5a2.5 2.5 0 012.5-2.5h1a2.5 2.5 0 010 5h-1a2.5 2.5 0 000 5h1a2.5 2.5 0 002.5-2.5M13.5 9.5a2.5 2.5 0 012.5-2.5h1a2.5 2.5 0 010 5h-1a2.5 2.5 0 000 5h1a2.5 2.5 0 002.5-2.5" stroke="#fff" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
