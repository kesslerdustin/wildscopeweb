'use client';

import React from 'react';
import Image from 'next/image';

type ImageModalProps = {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageModal({ imageUrl, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full">
        <button 
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Image 
          src={imageUrl} 
          alt="Fullscreen image"
          width={1200}
          height={800}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
} 