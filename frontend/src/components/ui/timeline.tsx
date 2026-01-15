"use client";
import {
  useScroll,
} from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  image: string;
  description: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div
      className="w-full bg-oklch-white-pure font-sans relative"
      ref={containerRef}
    >
      {/* Full-height SVG container with continuous lines */}
      <svg
        ref={svgRef}
        className="absolute left-8 top-0 w-8 h-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden
        style={{ zIndex: 10 }}
      >
        {/* Dotted line */}
        <line
          x1="16"
          x2="16"
          y1="0"
          y2="100%"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 8"
          stroke="#87CEEB"
          className="js-mobile-dotted-line"
        />
        {/* Blue progress overlay line - exactly on top of dotted line */}
        <line
          x1="16"
          x2="16"
          y1="0"
          y2="0"
          strokeWidth="3"
          strokeLinecap="round"
          stroke="#3b82f6"
          style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))' }}
          className="js-mobile-progress-line"
        />
      </svg>

      <div ref={ref} className="relative mx-auto pb-20 pl-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative mb-12"
          >
            {/* Step node - positioned on the line using inline style */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-oklch-secondary-light backdrop-blur-xl flex items-center justify-center text-oklch-white-pure text-lg font-bold shadow-lg z-20 border-2 border-blue-500"
              style={{ left: 'calc(-4rem + 2px)' }}
            >
              <span className="js-check inline-block origin-center text-blue-600 font-bold">
                {index + 1}
              </span>
            </div>

            {/* Card */}
            <div className="border border-oklch-secondary-lighter/50 shadow-xl rounded-xl overflow-hidden bg-oklch-white-pure">
              {/* Image above */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain p-6"
              />
              {/* Content below */}
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-700 text-base mb-4 leading-relaxed">
                  {item.description}
                </p>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
