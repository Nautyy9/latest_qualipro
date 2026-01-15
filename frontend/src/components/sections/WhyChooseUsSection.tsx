import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { staggerContainer, textReveal, fadeInUp, scaleIn } from '../../utils/motion';
import { Card, CardContent } from "../ui/card";
import MotionCard from "../ui/motion-card";
import { Clock, Shield, Users, Trophy, CheckCircle, Star } from 'lucide-react';
import { MobileTimeline } from '../ui/mobile-timeline';
import AnimatedIcon from '../ui/animated-icon';
import stepImg1 from "../../../../design_assets/qualipro/service1i.webp";
import stepImg2 from "../../../../design_assets/qualipro/service2.webp";
import stepImg3 from "../../../../design_assets/qualipro/service3.webp";
import stepImg4 from "../../../../design_assets/qualipro/service5ii.webp";

const WhyChooseUsSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progressLineRef = useRef<SVGPathElement>(null);
  const mobileProgressLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the curved dotted line only during scroll
      gsap.to('.js-process-line', {
        strokeDashoffset: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate the blue progress overlay line based on scroll
      if (progressLineRef.current) {
        const pathLength = progressLineRef.current.getTotalLength();

        // Set up the line to start completely hidden from the top
        gsap.set(progressLineRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength, // Start completely hidden
        });

        // Animate line reveal from top to bottom as user scrolls
        gsap.to(progressLineRef.current, {
          strokeDashoffset: 0, // Progress to full coverage
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        });
      }

      // Animate mobile dotted line
      gsap.to('.js-mobile-dotted-line', {
        strokeDashoffset: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate mobile progress line
      if (mobileProgressLineRef.current && timelineRef.current) {
        gsap.to(mobileProgressLineRef.current, {
          attr: { y2: timelineRef.current.offsetHeight },
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        });
      }

      // Step nodes turn blue when crossing midpoint of the screen (lg+ only)
      nodeRefs.current.forEach((el, id) => {
        console.log(el, id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: id === 0 ? 'top center+=70px' : id === 1 ? 'top center+=20px' : id === 2 ? 'top center-=40px' : "top center-=80px",
          onEnter: () => {
            el.classList.replace("bg-oklch-white-pure", 'bg-oklch-primary-base');
            el.classList.add('text-oklch-pure-white');
            const check = el.querySelector('.js-check') as HTMLElement | null;
            const stars = el.querySelectorAll('.js-star');
            if (check) {
              check.classList.replace('text-oklch-primary-base', 'text-oklch-pure-white');
              check.textContent = '✓';
              const tl = gsap.timeline({ defaults: { duration: 0.3 } });
              tl.to(check, { scale: 2.2, duration: 0.25, ease: 'back.out(3)' })
                .to(check, { rotation: 8, duration: 0.06, yoyo: true, repeat: 3, ease: 'power1.inOut' }, '<')
                .to(stars, { opacity: 1, scale: 1.3, duration: 0.2, stagger: 0.05, ease: 'power2.out' }, '-=0.1')
                .to(stars, { opacity: 0, scale: 0, duration: 0.4, stagger: 0.05, ease: 'power2.in' }, '+=0.2')
                .to(check, { scale: 1, rotation: 0, duration: 0.35, ease: 'back.in(2)' }, '-=0.2');
            }
          },
          onLeaveBack: () => {
            el.classList.replace('bg-oklch-primary-base', "bg-oklch-white-pure");
            el.classList.remove('text-oklch-pure-white');
            const check = el.querySelector('.js-check') as HTMLElement | null;
            if (check) {
              check.classList.replace('text-oklch-pure-white', 'text-oklch-primary-base');
              const stepId = nodeRefs.current.indexOf(el);
              check.textContent = String(stepId + 1);
            }
          },
          // Only enable on large screens
          // media: '(min-width: 1024px)'
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: '10+ years of healthcare quality consulting with 99% success rate in certifications.',
      stats: '500+ Hospitals Certified'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure your certification process stays on track with our systematic approach.',
      stats: 'Average 6-8 Months'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team comprises certified healthcare quality professionals and NABH assessors.',
      stats: '50+ Consultants'
    },
    {
      icon: Trophy,
      title: 'Comprehensive Support',
      description: 'From initial assessment to post-certification support, we are with you every step.',
      stats: '24/7 Availability'
    }
  ];

  const stepImages = [stepImg1, stepImg2, stepImg3, stepImg4];

  /* const achievements = [
    { number: '500+', label: 'Healthcare Organizations Certified', icon: Award },
    { number: '15+', label: 'States Across India', icon: MapPin },
    { number: '99%', label: 'Client Satisfaction Rate', icon: Star },
    { number: '10+', label: 'Years of Excellence', icon: Trophy }
  ]; */

  return (
    <section className="section-padding bg-oklch-white-pure">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block  mb-2 mx-auto rounded-full border border-oklch-sky-base bg-oklch-white-pure  px-4 py-1 text-sm text-oklch-sky-dark shadow-lg shadow-oklch-secondary-lighter/50">Why Choose Us •</span>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-oklch-text-dark" variants={textReveal}>
            Why Choose QualiPro as Your <span className="text-oklch-accent-bright">Quality Partner</span>
          </motion.h2>
          <motion.p className="text-xl text-oklch-text-gray max-w-3xl mx-auto leading-relaxed" variants={textReveal}>
            We bring together expertise, experience, and innovation to deliver exceptional
            results for healthcare organizations seeking quality excellence.
          </motion.p>
        </motion.div>

        {/* Interactive Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <MotionCard
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group border-transparent  h-full w-full mx-auto smd:w-3/4 md:w-full  cursor-pointer p-3  transition-all bg-gradient-to-br from-oklch-bg-light-blue/50 to-oklch-secondary-light/50  duration-500 hover:shadow-2xl"
              >
                <CardContent className="flex bg-oklch-white-pure rounded-xl flex-col justify-between   w-full h-full text-center space-y-4 p-6">
                  <AnimatedIcon
                    icon={<Icon className="text-oklch-primary-base group-hover:text-oklch-white-pure transition-all duration-300" size={32} />}
                    triggerOnScroll={true}
                    size="lg"
                    className="bg-oklch-bg-light-blue rounded-full group-hover:bg-oklch-primary-base group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:shadow-2xl"
                  />
                  <div className="space-y-2 row-span-1 flex flex-col justify-end ">
                    <motion.h3 className="text-xl font-bold group-hover:text-oklch-primary-dark transition-colors duration-300 text-oklch-text-dark" variants={textReveal}>{reason.title}</motion.h3>
                    <motion.p className="text-sm leading-relaxed group-hover:text-oklch-text-gray transition-colors duration-300 text-oklch-text-dark" variants={textReveal}>{reason.description}</motion.p>
                    <motion.div className="text-oklch-primary-dark font-semibold text-sm" variants={textReveal}>{reason.stats}</motion.div>
                    <div className="w-full bg-oklch-secondary-lighter/50 rounded-full h-1 mt-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-oklch-primary-base to-oklch-secondary-light h-1 rounded-full w-0 group-hover:w-full transition-all duration-1500 ease-out"></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block bg-oklch-secondary-light text-oklch-primary-dark text-xs px-2 py-1 rounded-full">
                        Click to learn more
                      </span>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            );
          })}
        </motion.div>

        {/* Testimonial Highlight */}
        <div className="rounded-2xl md:p-8 mb-16 border-0">
          <Card className="pt-8 px-8 mx-auto max-w-6xl border-sgray bg-sgray ">
            <CardContent className=" grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2  space-y-4">
                <div className="flex items-center space-x-2 text-oklch-accent-bright">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className='text-yellow-400 fill-current' />
                  ))}
                </div>
                <blockquote className="text-lg italic text-oklch-text-gray leading-relaxed">
                  "QualiPro's expertise and systematic approach helped us achieve NABH accreditation
                  seamlessly. Their team's dedication and knowledge made the entire process smooth and efficient."
                </blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-oklch-text-dark">Dr. Rajesh Kumar</div>
                  <div className="text-sm text-oklch-text-gray">Chief Medical Officer, Metro Hospital</div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center space-x-2 bg-oklch-primary-base *:text-oklch-pure-white px-6 py-3 rounded-full shadow-md">
                  <CheckCircle className="text-oklch-success-base" size={24} />
                  <span className="font-semibold ">Verified Client</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Process Overview - Alternating Timeline */}
          <div className="mt-20 relative" ref={timelineRef}>

            <div className="relative z-10   py-12 lg:px-6 xl:px-12">
              <h3 className="text-2xl font-bold text-center mb-12 text-oklch-text-dark">Our Proven 4-Step Process</h3>

              {/* {curved svg line with alternative cards} */}
              <div className="hidden md:block relative ">
                {/* Full curved SVG dotted line on larger screens (animated) */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  {/* A smooth snake-like curve that alternates left/right across the center */}
                  <path
                    d="M 50 0 Q 38 12.5, 50 25 Q 62 37.5, 50 50 Q 38 62.5, 50 75 Q 62 87.5, 50 100"
                    fill="none"
                    stroke="oklch(0.65 0.16 263)"
                    strokeWidth="0.3"
                    strokeLinecap="round"
                    strokeDasharray="1 3" strokeDashoffset="2"
                    className="text-oklch-neutral-400 js-process-line"
                  />
                  {/* Blue progress overlay line - starts from center and progresses with scroll */}
                  <path
                    ref={progressLineRef}
                    d="M 50 0 Q 38 12.5, 50 25 Q 62 37.5, 50 50 Q 38 62.5, 50 75 Q 62 87.5, 50 100"
                    fill="none"
                    stroke="oklch(0.60 0.15 259)"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    className="js-progress-line"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(var(--color-primary-base), 0.5))' }}
                  />
                </svg>

                {[
                  { step: '1', title: 'Initial Assessment', description: 'Comprehensive gap analysis and readiness evaluation', status: 'completed' as const },
                  { step: '2', title: 'Strategic Planning', description: 'Customized roadmap and timeline development', status: 'completed' as const },
                  { step: '3', title: 'Implementation', description: 'Hands-on support and continuous monitoring', status: 'active' as const },
                  { step: '4', title: 'Certification', description: 'Final assessment preparation and success', status: 'upcoming' as const }
                ].map((process, index) => {
                  const isLeft = index % 2 === 0; //left
                  return (
                    <div key={index} className=" grid  md:grid-cols-[1fr_200px_1fr]  lg:grid-cols-3 lg:gap-6  items-center mb-10 md:mb-16">
                      {/* Left card */}
                      <div className={`${isLeft ? '' : 'hidden md:block'}`}>
                        {isLeft && (
                          <div className="relative">
                            <div className={`transform ${isLeft ? '-skew-y-2' : 'skew-y-1'}`}>
                              <Card className="border border-oklch-border-light shadow-lg rounded-xl bg-oklch-white-pure" >
                                <CardContent className="p-6">
                                  <img src={stepImages[index]} alt={`step-${index + 1}`} className="w-full object-contain h-40 md:h-48 rounded-lg  mb-4" />
                                  <h4 className="font-semibold text-oklch-text-dark mb-2">{process.title}</h4>
                                  <p className="text-sm text-oklch-text-gray">{process.description}</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center timeline node */}
                      <div className="relative flex items-stretch justify-center">
                        {/* Per-row SVG dotted line for mobile to keep continuity */}
                        <svg className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full" width="16" preserveAspectRatio="none" aria-hidden>
                          <line x1="8" x2="8" y1="0" y2="100%" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 4" className="stroke-oklch-neutral-200" />
                        </svg>

                        {/* Step node */}
                        <div ref={el => (nodeRefs.current[index] = el)} className={`relative z-10 w-14 h-14 2xl:w-16 2xl:h-16 rounded-full flex items-center justify-center text-lg font-bold shadow-lg ${isLeft ? 'ml-[-80px] mlg:-ml-[100px] lxl:-ml-[124px] xl:-ml-36' : 'ml-[80px] mlg:ml-[100px] lxl:ml-[124px] xl:ml-36'} bg-oklch-white-pure`}>
                          <span className={`js-check inline-block origin-center text-oklch-primary-base`}>{process.step}</span>
                          {/* Stars */}
                          <div className="pointer-events-none absolute inset-0 js-stars">
                            <Star className="js-star absolute -top-2 -right-2 text-yellow-400 opacity-0" size={14} />
                            <Star className="js-star absolute -bottom-2 right-1 text-yellow-300 opacity-0" size={12} />
                            <Star className="js-star absolute -left-2 -top-1 text-yellow-500 opacity-0" size={10} />
                          </div>
                        </div>
                      </div>

                      {/* Right card */}
                      <div className={`${!isLeft ? '' : 'hidden md:block'}`}>
                        {!isLeft && (
                          <div className="relative">
                            <div className={`transform ${!isLeft ? 'skew-y-2' : '-skew-y-1'}`}>
                              <Card className="border  border-oklch-border-light shadow-lg rounded-xl bg-oklch-white-pure" >
                                <CardContent className="p-6 text-left md:text-left">
                                  <img src={stepImages[index]} alt={`step-${index + 1}`} className="w-full h-40 md:h-48 rounded-lg object-contain mb-4" />
                                  <h4 className="font-semibold text-oklch-text-dark mb-2">{process.title}</h4>
                                  <p className="text-sm text-oklch-text-gray">{process.description}</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* vertical cards with straight */}
              <div className="md:hidden">
                <MobileTimeline
                  data={[
                    {
                      title: "Initial Assessment",
                      image: stepImages[0],
                      description: "Comprehensive gap analysis and readiness evaluation",
                      content: <></>,
                    },
                    {
                      title: "Strategic Planning",
                      image: stepImages[1],
                      description: "Customized roadmap and timeline development",
                      content: <></>,
                    },
                    {
                      title: "Implementation",
                      image: stepImages[2],
                      description: "Hands-on support and continuous monitoring",
                      content: <></>,
                    },
                    {
                      title: "Certification",
                      image: stepImages[3],
                      description: "Final assessment preparation and success",
                      content: <></>,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
