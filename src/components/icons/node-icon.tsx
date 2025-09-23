import type { SVGProps } from 'react';

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <title>Node.js Logo</title>
      <path d="M11.996 2.195c-1.34.02-4.63.29-5.9 2.05-.75 1.05-1.02 3.03-.89 5.42.11 2.07.61 3.12 1.34 4.39.99 1.68 2.22 2.91 4.54 3.7.83.28 2.27.42 3.12.42 1.5 0 3.32-.23 4.52-1.24 1.25-1.05 1.76-2.58 1.76-4.52s-.62-3.15-1.42-4.26c-1.1-1.52-2.9-2.5-5.23-2.73a1.43 1.43 0 0 0-.84.17z"/>
      <path d="M12.28 12.38a3.18 3.18 0 0 0-2.43.08c-1.46.5-2.26 1.83-2.28 3.22-.02 1.3.48 2.37 1.38 3.06.94.7 2.2.93 3.5.67 1.6-.32 2.7-1.55 2.87-3.16.2-1.8-1.03-3.3-2.87-3.87a.38.38 0 0 0-.17-.02z"/>
    </svg>
  );
}
