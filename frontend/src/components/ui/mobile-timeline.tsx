"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "./card";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  title: string;
  image: string;
  description: string;
  content: React.ReactNode;
}

export const MobileTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dotLineRef = useRef<SVGLineElement>(null);
  const progressLineRef = useRef<SVGLineElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Infinite scroll animation for dotted background line
      gsap.to(".js-mobile-dotted-line", {
        strokeDashoffset: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // 2. Blue progress line fills from top to bottom based on scroll
      if (progressLineRef.current && containerRef.current) {
        gsap.to(progressLineRef.current, {
          attr: { y2: containerRef.current.offsetHeight },
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      }

      // 3. Step nodes trigger animation with smart replay when reaching card center
      nodeRefs.current.forEach((el) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "center center",
          onEnter: () => triggerStepAnimation(el, true),
          onEnterBack: () => triggerStepAnimation(el, true),
          onLeave: () => revertStepAnimation(el),
          onLeaveBack: () => revertStepAnimation(el),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const triggerStepAnimation = (nodeElement: HTMLDivElement, animate: boolean = true) => {
    // Change background color
    nodeElement.classList.remove("bg-white");
    nodeElement.classList.add("bg-blue-600");
    nodeElement.childNodes.forEach((child) => {
      if (child instanceof HTMLElement) {
        child.style.color = "white";
      }
    });

    if (!animate) return;

    const check = nodeElement.querySelector(".js-check") as HTMLElement | null;
    const stars = nodeElement.querySelectorAll(".js-star");

    if (check) {
      // Reset animation by killing any existing timeline
      gsap.killTweensOf([check, stars]);

      const tl = gsap.timeline({ defaults: { duration: 0.3 } });
      tl.to(check, { scale: 2.2, duration: 0.25, ease: "back.out(3)" })
        .to(
          check,
          {
            rotation: 8,
            duration: 0.06,
            yoyo: true,
            repeat: 3,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          stars,
          {
            opacity: 1,
            scale: 1.3,
            duration: 0.2,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .to(
          stars,
          {
            opacity: 0,
            scale: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.in",
          },
          "+=0.2"
        )
        .to(
          check,
          { scale: 1, rotation: 0, duration: 0.35, ease: "back.in(2)" },
          "-=0.2"
        );
    }
  };

  const revertStepAnimation = (nodeElement: HTMLDivElement) => {
    // Revert background color back to original
    nodeElement.classList.remove("bg-blue-600");
    nodeElement.classList.add("bg-white");

    // Revert text color back to blue
    nodeElement.childNodes.forEach((child) => {
      if (child instanceof HTMLElement) {
        child.style.color = "";
      }
    });

    const check = nodeElement.querySelector(".js-check") as HTMLElement | null;
    const stars = nodeElement.querySelectorAll(".js-star");

    if (check && stars) {
      // Kill any ongoing animations
      gsap.killTweensOf([check, stars]);

      // Reset to default state
      gsap.set(check, { scale: 1, rotation: 0 });
      gsap.set(stars, { opacity: 0, scale: 0 });
    }
  };

  return (
    <div
      className="w-full font-sans relative "
      ref={containerRef}
    >
      {/* Full-height SVG container for timeline lines */}
      <svg
        ref={svgRef}
        className="absolute left-4 sm:left-12 top-0 w-8 h-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden
        style={{ zIndex: 10 }}
      >
        {/* Dotted background line - infinite scroll animation */}
        <line
          ref={dotLineRef}
          className="js-mobile-dotted-line"
          x1="16"
          x2="16"
          y1="0"
          y2="100%"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
          stroke="#cbd5e1"
          style={{ filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.05))' }}
        />

        {/* Blue progress line - fills from top to bottom */}
        <line
          ref={progressLineRef}
          className="js-mobile-progress-line"
          x1="16"
          x2="16"
          y1="0"
          y2="-10"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="#3b82f6"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))',
          }}
        />
      </svg>

      {/* Grid: 1 col for line+steps, 1 col for cards */}
      <div className="space-y-16 relative">
        {/* Step nodes and Cards paired in rows */}
        {data.map((_, index) => (
          <div key={index} className="grid grid-cols-[50px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 px-1 sm:px-4 items-center">
            {/* Left Column: Timeline line and step nodes */}
            <div className="relative flex items-center sm:justify-center">
              {/* Step node - centered in this column */}
              <div className="relative flex items-center sm:justify-center">
                <div
                  ref={(el) => (nodeRefs.current[index] = el)}
                  className="relative z-20 w-14 h-14 rounded-full bg-white backdrop-blur-xl flex items-center justify-center text-white text-lg font-bold shadow-lg border-2 border-blue-500 transition-colors duration-300"
                >
                  <span className="js-check inline-block origin-center text-blue-600 font-bold">
                    {index + 1}
                  </span>

                  {/* Stars for animation */}
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      className="js-star absolute -top-3 -right-3 opacity-0 text-yellow-400"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.35 17.77 16.88 20.16 25.08 12 19.77 3.84 25.08 6.23 16.88 0 10.35 8.91 10.26" />
                    </svg>
                    <svg
                      className="js-star absolute -bottom-2 right-0 opacity-0 text-yellow-300"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.35 17.77 16.88 20.16 25.08 12 19.77 3.84 25.08 6.23 16.88 0 10.35 8.91 10.26" />
                    </svg>
                    <svg
                      className="js-star absolute -left-2 -top-1 opacity-0 text-yellow-500"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.35 17.77 16.88 20.16 25.08 12 19.77 3.84 25.08 6.23 16.88 0 10.35 8.91 10.26" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Card */}
            <Card className="w-full border border-blue-200/50 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300" >
              <CardContent className="p-4 sm:p-6">
                {/* Image */}
                <img
                  src={data[index].image}
                  alt={data[index].title}
                  className="w-full h-32 sm:h-40 object-contain mb-3 sm:mb-4 rounded-lg"
                />

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  {data[index].title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {data[index].description}
                </p>

                {/* Content */}
                {data[index].content}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
