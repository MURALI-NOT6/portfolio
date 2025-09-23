"use client";

import { useState, useEffect } from 'react';

type TypingAnimationProps = {
  roles: string[];
  className?: string;
};

export function TypingAnimation({ roles, className }: TypingAnimationProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex, roles, deletingSpeed, typingSpeed, delay]);

  return (
    <span className={className}>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
