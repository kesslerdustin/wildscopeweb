import React from 'react';

interface FormattedContentProps {
  content: string;
  className?: string;
}

export default function FormattedContent({ content, className = "" }: FormattedContentProps) {
  // Function to format content with proper bullet points and line breaks
  const formatContent = (text: string) => {
    // Split by newlines to handle different sections
    const sections = text.split('\n\n');
    
    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n');
      
      if (lines.length === 1) {
        // Single line - just return as paragraph
        return <p key={sectionIndex} className="mb-4">{lines[0]}</p>;
      }
      
      // Multiple lines - check if it contains bullet points
      const bulletLines = lines.filter(line => line.trim().startsWith('•'));
      const regularLines = lines.filter(line => !line.trim().startsWith('•') && line.trim() !== '');
      
      return (
        <div key={sectionIndex} className="mb-4">
          {regularLines.map((line, lineIndex) => (
            <p key={`reg-${lineIndex}`} className="mb-2">{line}</p>
          ))}
          {bulletLines.length > 0 && (
            <ul className="list-disc list-inside space-y-2 ml-4">
              {bulletLines.map((line, bulletIndex) => (
                <li key={`bullet-${bulletIndex}`} className="text-gray-700 dark:text-gray-300">
                  {line.replace('•', '').trim()}
                </li>
              ))}
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