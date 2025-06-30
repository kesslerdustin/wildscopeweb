import React from 'react';
import ReactMarkdown from 'react-markdown';

interface FormattedContentProps {
  content: string;
  className?: string;
}

export default function FormattedContent({ content, className = "" }: FormattedContentProps) {
  return (
    <div className={`prose dark:prose-invert ${className}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
} 