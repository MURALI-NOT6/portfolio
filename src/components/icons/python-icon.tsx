import type { SVGProps } from 'react';

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Python Logo</title>
      <path d="M11 11v-4a2 2 0 012-2h1" stroke="#3776ab" />
      <path d="M11 11h-1a2 2 0 00-2 2v1" stroke="#ffde57" />
      <path d="M13 13v4a2 2 0 01-2 2h-1" stroke="#ffde57" />
      <path d="M13 13h1a2 2 0 002-2v-1" stroke="#3776ab" />
      <circle cx="15.5" cy="6.5" r="1.5" fill="#3776ab" />
      <circle cx="8.5" cy="17.5" r="1.5" fill="#ffde57" />
    </svg>
  );
}
