import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up scroll-triggered animations
      gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
        gsap.fromTo(element, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="overflow-hidden">
      <HeroSection />
      <div className="animate-on-scroll">
        <AboutSection />
      </div>
      <div className="animate-on-scroll">
        <ServicesSection />
      </div>
      <div className="animate-on-scroll">
        <WhyChooseUsSection />
      </div>
      <div className="animate-on-scroll">
        <StatsSection />
      </div>
      <div className="animate-on-scroll">
        <TestimonialsSection />
      </div>
      <div className="animate-on-scroll">
        <CTASection />
      </div>
    </div>
  );
};

export default Home;