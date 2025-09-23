import type { SVGProps } from 'react';

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <title>TypeScript Logo</title>
      <path d="M1.5 1h21v21h-21z" fill="#3178c6" />
      <path d="M12.1 14.8V9.5c0-.4-.1-.6-.4-.7-.2-.1-.5-.1-.8-.1h-2.1v6.1h1.7v-2.3h.4V13c0 .8.5 1.1 1.1 1.1s1.1-.3 1.1-1.3zm-1.8-3.1v-1.3h.7c.3 0 .4.1.4.3v.7c0 .2-.1.3-.4.3zM19 12.2c0-1.4-.9-2-2.3-2s-2.3.6-2.3 2v2.6h1.7v-2.7c0-.2 0-.4.3-.4s.4.1.4.4v2.7h1.7z" fill="#fff" />
    </svg>
  );
}
