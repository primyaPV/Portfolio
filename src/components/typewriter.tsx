"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  strings: string[];
  wrapperClassName?: string;
  cursorClassName?: string;
  typingDelay?: number;
  deletingDelay?: number;
  newStringDelay?: number;
}

export default function Typewriter({
  strings,
  wrapperClassName,
  cursorClassName,
  typingDelay = 150,
  deletingDelay = 100,
  newStringDelay = 2000,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        typingTimeoutRef.current = setTimeout(() => setIsDeleting(true), newStringDelay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingTimeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deletingDelay : typingDelay
    );

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [text, isDeleting, loopNum, strings, typingDelay, deletingDelay, newStringDelay]);

  return (
    <span className={cn('font-mono', wrapperClassName)}>
      {text}
      <span className={cn('animate-ping', cursorClassName)}>|</span>
    </span>
  );
}
