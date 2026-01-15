import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { floatUp, floatUpRotate, floatUpScale } from '../utils/motion';

const sectionVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } } as const;

const About: React.FC = () => {
  const sections = [
    {
      title: 'Our Mission',
      description: 'We empower healthcare organizations to achieve and sustain certification excellence through evidence-based consulting, technology-enabled processes, and compassionate partnership.',
      highlights: [
        'Patient safety and quality-first mindset',
        'Structured pathways to NABH and beyond',
        'Change enablement and on-ground training',
        'Outcome-driven dashboards and reviews',
      ],
      image: '/images/Our Mission.webp',
      pills: [
        { text: '🎯 Mission-Driven', position: 'top-4 left-4', animation: floatUp },
        { text: '💪 Excellence', position: 'bottom-6 right-4', animation: floatUpRotate },
      ],
    },
    {
      title: 'Our Vision',
      description: 'From gap assessment to implementation and readiness audits, our vision blends practical frameworks with digital tools—keeping your teams engaged, compliant, and confident.',
      highlights: [
        'Hands-on mentoring for departments',
        'Template packs and SOP libraries',
        'Audit simulations and corrective actions',
        'Leadership alignment and cadence',
      ],
      image: '/images/vision.webp',
      pills: [
        { text: '🔮 Visionary', position: 'top-6 right-4', animation: floatUpScale },
        { text: '🚀 Forward-Thinking', position: 'bottom-4 left-4', animation: floatUp },
      ],
    },
    {
      title: 'Our Expertise',
      description: 'A multi-disciplinary team of healthcare quality professionals, auditors, and technologists with a decade+ of experience across hospitals, clinics, and day-care centers.',
      highlights: [
        'Certified consultants and assessors',
        'Pan-India delivery footprint',
        'Deep domain + product thinking',
        'Sustained post-cert support',
      ],
      image: '/images/expertise.webp',
      pills: [
        { text: '🏅 Expert Team', position: 'top-5 left-5', animation: floatUpRotate },
        { text: '⭐ Experienced', position: 'bottom-5 right-5', animation: floatUpScale },
      ],
    },
  ];

  const scrollToServices = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-visible">
        <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-b from-oklch-bg-light-blue via-oklch-bg-light-blue/60 to-transparent -z-10 pointer-events-none" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative soft blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeOut' }}>
            <span className="inline-block mb-4 rounded-full border border-oklch-sky-base px-4 py-1 text-sm text-oklch-sky-dark shadow-oklch-sky-base/50 shadow-md">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-oklch-primary-dark">About QualiPro</h1>
            <p className="text-lg md:text-xl text-oklch-text-gray max-w-3xl mx-auto">
              Healthcare quality, simplified. We partner end-to-end to help you meet standards with confidence.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-oklch-sky-base to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              id={`section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="scroll-mt-24 mb-20 lg:mb-32 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {/* Mobile Only */}
              <div className="md:hidden space-y-6">
                {/* Section Number Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="*:font-serif"
                >
                  <span className=" text-xs font-bold text-oklch-primary-dark uppercase tracking-widest">Section {" "}</span>
                  <span className=" text-3xl font-black text-oklch-primary-dark">{index + 1}</span>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-oklch-primary-dark leading-tight">{section.title}</h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-sm sm:text-base text-oklch-text-gray leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {section.description}
                </motion.p>

                {/* Image Card with Floating Pills */}
                <motion.div
                  className="relative py-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-oklch-secondary-light/30 to-transparent rounded-3xl blur-2xl"></div>

                  {/* Main card */}
                  <Card className="relative overflow-hidden bg-oklch-white-pure shadow-lg h-72 sm:h-80 flex items-center justify-center border-0">
                    <img src={section.image} alt={section.title} className='h-full w-full object-contain p-6' />

                    {/* Floating Pills */}
                    {section.pills?.map((pill, pillIndex) => (
                      <motion.div
                        key={pillIndex}
                        className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-pure-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-3 border-oklch-pure-white shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.4)]`}
                        variants={pill.animation}
                        animate="animate"
                      >
                        {pill.text}
                      </motion.div>
                    ))}
                  </Card>
                </motion.div>

                {/* Features Cards Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {section.highlights.map((highlight, idx) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.05 }}
                    >
                      <div className="flex gap-2 items-start p-3 sm:p-4">
                        <span className="text-oklch-primary-dark font-bold flex-shrink-0">✓</span>
                        <p className="text-xs sm:text-sm text-oklch-text-gray leading-tight">{highlight}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-2"
                >
                  <Button size="lg" onClick={scrollToServices} className="w-full rounded-full text-base font-semibold py-3">
                    Learn More
                  </Button>
                </motion.div>

                {/* Divider */}
                {index < sections.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-oklch-secondary-lighter/50 to-transparent mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ></motion.div>
                )}
              </div>

              {/*  (md-lg) */}
              <div className="hidden md:block lg:hidden">
                <div className="space-y-8">
                  {/* Header Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-2 *:font-serif"
                  >

                    <span className="text-xs  font-bold text-oklch-primary-dark uppercase tracking-widest">Section {" "}</span>
                    <span className="text-3xl font-black text-oklch-primary-dark">{index + 1}</span>

                    <h2 className="text-2xl sm:text-3xl font-bold text-oklch-primary-dark leading-tight">{section.title}</h2>
                  </motion.div>

                  <motion.p
                    className="text-base text-oklch-text-gray leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  >
                    {section.description}
                  </motion.p>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Image Card */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="relative">
                        {/* Decorative background */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-oklch-secondary-light/40 to-transparent rounded-3xl blur-2xl"></div>

                        {/* Main card */}
                        <Card className="relative overflow-hidden bg-oklch-white-pure shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 aspect-square flex items-center justify-center">
                          <img src={section.image} alt={section.title} className='h-full w-full object-contain p-8' />

                          {/* Floating Pills */}
                          {section.pills?.map((pill, pillIndex) => (
                            <motion.div
                              key={pillIndex}
                              className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-pure-white px-4 py-2 rounded-full text-sm font-semibold border-4 border-oklch-pure-white shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.4)]`}
                              variants={pill.animation}
                              animate="animate"
                            >
                              {pill.text}
                            </motion.div>
                          ))}
                        </Card>
                      </div>
                    </motion.div>

                    {/* Highlights Grid - always on right */}
                    <motion.div
                      className="grid grid-cols-1 gap-4 h-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {section.highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.25 + idx * 0.05 }}
                        >
                          <div className="flex gap-3 items-start p-4">
                            <span className="text-oklch-primary-dark font-bold flex-shrink-0 text-lg">✓</span>
                            <p className="text-sm text-oklch-text-gray leading-tight">{highlight}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA Button - Full Width */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    <Button size="lg" onClick={scrollToServices} className="w-full rounded-full">
                      Learn More
                    </Button>
                  </motion.div>

                  {/* Divider */}
                  {index < sections.length - 1 && (
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-oklch-secondary-lighter/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                  )}
                </div>
              </div>

              {/* Desktop: Sophisticated Asymmetric Layout */}
              <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                {/* Content Section - 5 columns */}
                <div className={`col-span-5 ${index % 2 === 1 ? 'order-2' : 'order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='*:font-serif'
                  >
                    <span className="inline-block mb-3 text-xs font-semibold text-oklch-primary-dark uppercase tracking-wider">Section {"  "}
                      <span className='text-3xl font-black text-oklch-primary-dark'>

                        {index + 1}
                      </span>
                    </span>
                    <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-oklch-primary-dark leading-tight">{section.title}</h2>
                    <p className="text-base text-oklch-text-gray mb-8 leading-relaxed">
                      {section.description}
                    </p>

                    {/* Highlights Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {section.highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                        >
                          <span className="text-oklch-primary-medium font-bold flex-shrink-0">✓</span>
                          <span className="text-sm text-oklch-text-gray">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button size="lg" onClick={scrollToServices} className="rounded-full">
                      Learn More
                    </Button>
                  </motion.div>
                </div>

                {/* Spacer - 1 column */}
                <div className="col-span-1"></div>

                {/* Image Section - 6 columns with overlapping elements */}
                <motion.div
                  className={`col-span-6 relative ${index % 2 === 1 ? 'order-1' : 'order-2'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative h-80 lg:h-96 pb-16">
                    {/* Decorative background */}
                    <div className={`absolute -inset-8 bg-gradient-to-br ${index % 2 === 1 ? 'from-oklch-secondary-light/40 to-transparent' : 'from-transparent to-oklch-secondary-light/40'} rounded-3xl blur-2xl`}></div>

                    {/* Main card */}
                    <Card className="relative overflow-hidden h-full flex items-center justify-center bg-oklch-white-pure shadow-lg hover:shadow-3xl transition-all duration-500 border-0">
                      <img src={section.image} alt={section.title} className='h-full w-full object-contain p-4 ' />

                      {/* Floating Pills */}
                      {section.pills?.map((pill, pillIndex) => (
                        <motion.div
                          key={pillIndex}
                          className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-pure-white px-4 py-2 rounded-full text-sm font-semibold border-2 border-oklch-pure-white shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.3)]`}
                          variants={pill.animation}
                          animate="animate"
                        >
                          {pill.text}
                        </motion.div>
                      ))}
                    </Card>
                  </div>

                  {/* Overlapping highlight cards at bottom */}
                  <div className="absolute -bottom-12 left-0 right-0 px-2 grid grid-cols-2 gap-3 z-10">
                    {section.highlights.slice(0, 2).map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
                      >
                        <Card className="bg-oklch-white-pure backdrop-blur-sm shadow-lg hover:shadow-xl border-0 p-3 text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                          <div className="text-oklch-primary-dark font-bold text-xs mb-1 line-clamp-1">
                            {highlight.split(' ').slice(0, 2).join(' ')}
                          </div>
                          <div className="text-xs text-oklch-text-gray leading-tight line-clamp-2">
                            {highlight}
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              {index < sections.length - 1 && (
                <div className="hidden lg:block mt-20 h-px bg-gradient-to-r from-transparent via-oklch-secondary-lighter/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
