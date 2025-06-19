import React from 'react';

interface FormattedContentProps {
  content: string;
  className?: string;
}

export default function FormattedContent({ content, className = "" }: FormattedContentProps) {
  // Function to convert URLs to clickable links
  const linkifyText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s)]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Function to format content with proper bullet points and line breaks
  const formatContent = (text: string) => {
    // Split by newlines to handle different sections
    const sections = text.split('\n\n');
    
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n');
      
      if (lines.length === 1) {
        // Single line - just return as paragraph with linkified text
        return (
          <p key={sectionIndex} className="mb-4">
            {linkifyText(lines[0])}
          </p>
        );
      }
      
      // Multiple lines - check if it contains bullet points
      const bulletLines = lines.filter(line => line.trim().startsWith('•'));
      const regularLines = lines.filter(line => !line.trim().startsWith('•') && line.trim() !== '');
      
      return (
        <div key={sectionIndex} className="mb-4">
          {regularLines.map((line, lineIndex) => (
            <p key={`reg-${lineIndex}`} className="mb-2">
              {linkifyText(line)}
            </p>
          ))}
          {bulletLines.length > 0 && (
            <ul className="list-disc list-inside space-y-2 ml-4">
              {bulletLines.map((line, bulletIndex) => {
                const cleanedLine = line.replace('•', '').trim();
                return (
                  <li key={`bullet-${bulletIndex}`} className="text-gray-700 dark:text-gray-300">
                    {linkifyText(cleanedLine)}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      );
    });
  };

  return (
    <div className={className}>
      {formatContent(content)}
    </div>
  );
} 