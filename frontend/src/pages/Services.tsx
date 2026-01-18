import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  floatUp,
  floatUpRotate,
  floatUpScale,
  pageHeadingStagger,
  fadeDown,
  fadeUp,
  lineReveal,
  fadeInFromRight,
  fadeInFromLeft,
  contentItemStagger,
  highlightItemFadeUp,
} from '../utils/motion';
import service1 from "../../../design_assets/qualipro/service1i.webp"
import service2 from "../../../design_assets/qualipro/service2.webp"
import service3 from "../../../design_assets/qualipro/service3.webp"
import service4 from "../../../design_assets/qualipro/service5ii.webp"


const Services: React.FC = () => {
  const services = [
    {
      title: 'NABH Certification & Accreditation',
      description:
        'End-to-end support from gap assessment to successful accreditation — documentation, trainings, mock audits and readiness checks.',
      features: [
        'Comprehensive gap assessment',
        'Documentation and SOP libraries',
        'Staff training and drills',
        'Mock assessments and CAPA',
        'Readiness audits and guidance',
      ],
      image: service1,
      accent: 'blue' as const,
      pills: [
        { text: '✓ Certified', position: 'top-4 left-4', animation: floatUp },
        { text: '🏆 Accredited', position: 'bottom-6 right-4', animation: floatUpRotate },
      ],
    },
    {
      title: 'Healthcare Quality Consulting',
      description:
        'Improve patient safety and operations with structured quality frameworks, dashboards and measurable outcomes.',
      features: [
        'Quality improvement programs',
        'Risk and incident management',
        'Process standardization',
        'KPI and audit dashboards',
        'Policy and governance support',
      ],
      image: service2,
      accent: 'blue' as const,
      pills: [
        { text: '✨ Quality Assured', position: 'top-6 right-4', animation: floatUpScale },
        { text: '📊 Optimized', position: 'bottom-4 left-4', animation: floatUp },
      ],
    },
    {
      title: 'Digital Health Solutions',
      description:
        'Digitize documentation, compliance tracking and analytics to accelerate certification and sustain excellence.',
      features: [
        'Digital documentation portals',
        'Compliance trackers and alerts',
        'Audit scheduling and logs',
        'Analytics and reporting',
        'Mobile-friendly workflows',
      ],
      image: service3,
      accent: 'blue' as const,
      pills: [
        { text: '⚡ Automated', position: 'top-5 left-5', animation: floatUpRotate },
        { text: '📈 Real-time', position: 'bottom-5 right-5', animation: floatUpScale },
      ],
    },
    {
      title: 'Training & Development',
      description:
        'Competency-building programs for leadership and staff — workshops, drills and certification pathways.',
      features: [
        'NABH standards training',
        'Leadership enablement',
        'Departmental drills',
        'Induction and refreshers',
        'Assessment and feedback',
      ],
      image: service4,
      accent: 'blue' as const,
      pills: [
        { text: '👥 Skilled Team', position: 'top-4 right-5', animation: floatUp },
        { text: '💡 Empowered', position: 'bottom-6 left-4', animation: floatUpRotate },
      ],
    },
  ];

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-visible">
        <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-b from-oklch-bg-light-blue via-oklch-bg-light-blue/60 to-transparent -z-10 pointer-events-none" />
        <div className="container-max pt-10 px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative soft blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <motion.div
            variants={pageHeadingStagger}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* 1. Pill "What We Do" - Fade Down */}
            <motion.span
              className="inline-block rounded-full border border-oklch-sky-base px-4 py-1 text-sm text-oklch-sky-dark shadow-oklch-sky-base/50 shadow-md"
              variants={fadeDown}
            >
              What We Do
            </motion.span>

            {/* 2. Main Heading "Our Services" - Fade Up */}
            <motion.h1
              className="text-4xl text-oklch-primary-dark md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={fadeUp()}
            >
              Our Services
            </motion.h1>

            {/* 3. Subtext - Fade Up */}
            <motion.p
              className="text-lg md:text-xl text-oklch-text-gray max-w-3xl mx-auto"
              variants={fadeUp()}
            >
              Comprehensive healthcare solutions for certification, quality and digital transformation.
            </motion.p>

            {/* 4. Bottom Divider Line - Line Reveal */}
            <motion.div
              className="mt-4 flex justify-center"
              variants={fadeUp()}
            >
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-transparent via-oklch-sky-base to-transparent"
                variants={lineReveal}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|--+/g, '-')}`}
              className="scroll-mt-24 mb-20 lg:mb-32 last:mb-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index === 0 ? 1.2 : 0 }}
            >
              {/* Mobile Only */}
              <div className="md:hidden space-y-6 overflow-hidden">

                {/* Service Number + Title + Description - Staggered Container */}
                <motion.div
                  variants={contentItemStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="space-y-4"
                >
                  {/* Service Number Badge */}
                  <motion.div
                    variants={highlightItemFadeUp(index, 0)}
                    className=" *:font-serif inline-flex items-baseline gap-2"
                  >
                    <motion.span
                      className="text-xs font-bold text-oklch-primary-dark  uppercase tracking-widest"
                      variants={highlightItemFadeUp(index)}
                    >
                      Service {" "}
                    </motion.span>
                    <motion.span
                      className="text-3xl font-black text-oklch-primary-dark"
                      variants={highlightItemFadeUp(index)}
                    >
                      {index + 1}
                    </motion.span>
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    variants={highlightItemFadeUp(index, 0.2)}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-oklch-primary-dark leading-tight">{service.title}</h2>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base text-oklch-text-gray leading-relaxed"
                    variants={highlightItemFadeUp(index, 0.4)}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>

                {/* Image Card with Floating Pills */}
                <motion.div
                  className="relative py-6"
                  variants={fadeUp(index, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-oklch-secondary-light/30 to-transparent rounded-3xl blur-2xl"></div>

                  {/* Main card */}
                  <Card className="relative overflow-hidden bg-oklch-white-pure shadow-lg h-72 sm:h-80 flex items-center justify-center border-0">
                    <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-6' />

                    {/* Floating Pills */}
                    {service.pills?.map((pill, pillIndex) => (
                      <motion.div
                        key={pillIndex}
                        className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-white-pure px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-3 border-oklch-white-pure shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.4)]`}
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
                  variants={contentItemStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      variants={highlightItemFadeUp()}
                    >
                      <motion.div
                        variants={highlightItemFadeUp()}
                        initial="hidden"
                        whileInView="show"
                        transition={{ staggerChildren: 0.5, delayChildren: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex gap-2 items-start p-3 sm:p-4">
                        <span className="text-oklch-primary-dark font-bold flex-shrink-0">✓</span>
                        <p className="text-xs sm:text-sm text-oklch-text-gray leading-tight">{feature}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={fadeUp()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="pt-2"
                >
                  <Button size="lg" onClick={scrollToContact} className="w-full rounded-full text-base font-semibold py-3">
                    Get Started
                  </Button>
                </motion.div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-oklch-secondary-lighter/50 to-transparent mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ></motion.div>
                )}
              </div>

              {/* Tablet (md-lg): Balanced Card Layout */}
              <div className="hidden md:block lg:hidden overflow-hidden">
                <div className="space-y-8 ">
                  {/* Header Section - Staggered */}
                  <motion.div
                    variants={contentItemStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index === 0 ? 1.2 : 0 }}
                    className="space-y-2 *:font-serif "
                  >
                    <motion.div className='inline-block mr-2 items-baseline ' variants={highlightItemFadeUp(index, 0)}>
                      <motion.span
                        className="text-xs font-bold text-oklch-primary-dark uppercase tracking-widest"
                        variants={highlightItemFadeUp(index, 0)}
                      >
                        Service {" "}
                      </motion.span>
                    </motion.div>
                    <motion.span
                      className="text-3xl font-black inline-block text-oklch-primary-dark"
                      variants={highlightItemFadeUp(index, 0)}
                    >
                      {index + 1}
                    </motion.span>

                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-oklch-primary-dark leading-tight"
                      variants={highlightItemFadeUp(index, 0.2)}
                    >
                      {service.title}
                    </motion.h2>
                  </motion.div>

                  <motion.p
                    className="text-base text-oklch-text-gray leading-relaxed"
                    variants={fadeUp(index, 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Two Column Layout - consistent for all services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Image Card - Left: fadeInFromLeft */}
                    <motion.div
                      className="relative"
                      variants={fadeInFromLeft(index, 0.6)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: index === 0 ? 0.7 : 0.8 }}
                    >
                      <div className="relative">
                        {/* Decorative background */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-oklch-secondary-light/40 to-transparent rounded-3xl blur-2xl"></div>

                        {/* Main card */}
                        <Card className="relative overflow-hidden bg-oklch-white-pure shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 aspect-square flex items-center justify-center">
                          <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-8' />

                          {/* Floating Pills */}
                          {service.pills?.map((pill, pillIndex) => (
                            <motion.div
                              key={pillIndex}
                              className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-white-pure px-4 py-2 rounded-full text-sm font-semibold border-4 border-oklch-white-pure shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.4)]`}
                              variants={pill.animation}
                              animate="animate"
                            >
                              {pill.text}
                            </motion.div>
                          ))}
                        </Card>
                      </div>
                    </motion.div>

                    {/* Features Grid - Right: fadeInFromRight with stagger */}
                    <motion.div
                      className="grid grid-cols-1 gap-4 h-full"
                      variants={contentItemStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          variants={fadeInFromRight(index, 0.8)}
                        >
                          <motion.div className="flex gap-3 items-start p-4"
                            variants={highlightItemFadeUp()}
                            initial="hidden"
                            whileInView="show"
                            transition={{ staggerChildren: 0.5, delayChildren: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                          >
                            <span className="text-oklch-primary-dark font-bold flex-shrink-0 text-lg">✓</span>
                            <p className="text-sm text-oklch-text-gray leading-tight">{feature}</p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA Button - Full Width */}
                  <motion.div
                    variants={fadeUp()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Button size="lg" onClick={scrollToContact} className="w-full rounded-full">
                      Get Started
                    </Button>
                  </motion.div>

                  {/* Divider */}
                  {index < services.length - 1 && (
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
                    variants={index % 2 === 1 ? fadeInFromRight(index) : fadeInFromLeft(index)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className='*:font-serif'
                  >
                    <span className="inline-block mb-3 text-xs font-semibold text-oklch-primary-dark uppercase tracking-wider">Service
                      {" "}
                      <span className='text-3xl text-oklch-primary-dark'>
                        {index + 1}
                      </span>
                    </span>
                    <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-oklch-primary-dark leading-tight">{service.title}</h2>
                    <p className="text-base text-oklch-text-gray mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                        >
                          <span className="text-oklch-primary-medium font-bold flex-shrink-0">✓</span>
                          <span className="text-sm text-oklch-text-gray">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button size="lg" onClick={scrollToContact} className="rounded-full">
                      Get Started
                    </Button>
                  </motion.div>
                </div>

                {/* Spacer - 1 column */}
                <div className="col-span-1"></div>

                {/* Image Section - 6 columns with overlapping elements */}
                <motion.div
                  className={`col-span-6 relative ${index % 2 === 1 ? 'order-1' : 'order-2'}`}
                  variants={index % 2 === 1 ? fadeInFromLeft(index) : fadeInFromRight(index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 pb-16">
                    {/* Decorative background */}
                    <div className={`absolute -inset-8 bg-gradient-to-br ${index % 2 === 1 ? 'from-oklch-secondary-light/40 to-transparent' : 'from-transparent to-oklch-secondary-light/40'} rounded-3xl blur-2xl`}></div>

                    {/* Main card */}
                    <Card className="relative overflow-hidden h-full flex items-center justify-center bg-oklch-white-pure shadow-lg hover:shadow-3xl transition-all duration-500 border-0">
                      <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-4 ' />

                      {/* Floating Pills */}
                      {service.pills?.map((pill, pillIndex) => (
                        <motion.div
                          key={pillIndex}
                          className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-oklch-primary-base to-oklch-primary-dark text-oklch-white-pure px-4 py-2 rounded-full text-sm font-semibold border-2 border-oklch-white-pure shadow-[0_8px_24px_rgba(var(--oklch-primary-base-rgb),0.3)]`}
                          variants={pill.animation}
                          animate="animate"
                        >
                          {pill.text}
                        </motion.div>
                      ))}
                    </Card>
                  </div>

                  {/* Overlapping feature cards at bottom */}
                  <div className="absolute -bottom-12 left-0 right-0 px-2 grid grid-cols-2 gap-3 z-10">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
                      >
                        <Card className="bg-oklch-white-pure backdrop-blur-sm shadow-lg hover:shadow-xl border-0 p-3 text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                          <div className="text-oklch-primary-dark font-bold text-xs mb-1 line-clamp-1">
                            {feature.split(' ').slice(0, 2).join(' ')}
                          </div>
                          <div className="text-xs text-oklch-text-gray leading-tight line-clamp-2">
                            {feature}
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="hidden lg:block mt-20 h-px bg-gradient-to-r from-transparent via-oklch-secondary-lighter/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div >
  );
};

export default Services;
