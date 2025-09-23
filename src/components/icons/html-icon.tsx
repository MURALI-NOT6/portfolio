import type { SVGProps } from 'react';

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
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
      <title>HTML5 Logo</title>
      <path d="M4 3l1.78 20.25L12 21l6.22-1.75L20 3H4zm11.5 5.5h-5L10.8 11h4.4l-.3 3.5-2.9.8-2.9-.8-.2-2H6.5l.3 4.5 5.2 1.5 5.2-1.5.7-7.5H15.5z" />
    </svg>
  );
}
