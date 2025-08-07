'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface QuestCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  progress: number;
  color?: string;
  carouselImages?: string[]; // List of additional image URLs
}

export default function QuestCard({
  title,
  description,
  image,
  link,
  progress,
  color = 'bg-blue-600',
  carouselImages = [],
}: QuestCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent toggling if clicked inside expanded content
    const target = e.target as HTMLElement;
    if (target.closest('.quest-expanded-content')) return;
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className="cursor-pointer py-4 px-4 bg-white rounded-lg shadow transition hover:bg-gray-50"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={image}
            alt={`${title} preview`}
            width={300}
            height={180}
            className="rounded shadow"
          />
          <div>
            <h3 className="font-bold text-lg mb-1">🧭 {title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 pt-4">
          <div className="w-full h-1 bg-gray-200 rounded">
            <div
              className={`h-full ${color} rounded transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Progress: {progress}%</p>
        </div>

        {/* Expandable Section with Carousel */}
        {expanded && (
          <div className="quest-expanded-content mt-6 space-y-4 border-t pt-4">
            {carouselImages.length > 0 && (
              <div className="overflow-x-auto flex gap-4 pb-2 snap-x">
                {carouselImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(src);
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Detail ${idx + 1}`}
                      width={300}
                      height={200}
                      className="rounded snap-center"
                    />
                  </div>
                ))}
              </div>
            )}
            <p className="text-sm text-gray-700">
              This project includes multiple pages, animations, and responsive layout. Built using Next.js, Tailwind, and Framer Motion.
            </p>
            <div className="text-center">
              <Link
                href={link}
                className="inline-block px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                onClick={(e) => e.stopPropagation()}
              >
                🚀 Visit Full Project
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen preview"
            width={1000}
            height={600}
            className="rounded max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}