import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { floatUp, floatUpRotate, floatUpScale } from '../utils/motion';
import service1 from "../../../design_assets/qualipro/service1i.png"
import service2 from "../../../design_assets/qualipro/service2.png"
import service3 from "../../../design_assets/qualipro/service3.png"
import service4 from "../../../design_assets/qualipro/service5ii.png"


const sectionVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } } as const;

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
        <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-b from-sky-50 via-sky-50/60 to-transparent -z-10 pointer-events-none" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative soft blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-blue-100/60 blur-2xl" />
          <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, ease: 'easeOut' }}>
            <span className="inline-block mb-4 rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-sm text-sky-700 shadow-sky-200/50 shadow-md">What We Do</span>
            <h1 className="text-4xl text-blue-600 md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
              Comprehensive healthcare solutions for certification, quality and digital transformation.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Award-Winning Layout */}
      <section className="py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|--+/g, '-')}`}
              className="scroll-mt-24 mb-20 lg:mb-32 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {/* Mobile Only: Award-Winning Design */}
              <div className="md:hidden space-y-6">
                {/* Service Number Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Service</span>
                  <span className="text-3xl font-black text-blue-600">{index + 1}</span>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 leading-tight">{service.title}</h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-sm sm:text-base text-neutral-700 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {service.description}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-3xl blur-2xl"></div>

                  {/* Main card */}
                  <Card className="relative overflow-hidden bg-white shadow-lg h-72 sm:h-80 flex items-center justify-center border-0">
                    <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-6' />

                    {/* Floating Pills */}
                    {service.pills?.map((pill, pillIndex) => (
                      <motion.div
                        key={pillIndex}
                        className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-3 border-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]`}
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
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.05 }}
                    >
                      <div className="flex gap-2 items-start p-3 sm:p-4">
                        <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-tight">{feature}</p>
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
                  <Button size="lg" onClick={scrollToContact} className="w-full rounded-full text-base font-semibold py-3">
                    Get Started
                  </Button>
                </motion.div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ></motion.div>
                )}
              </div>

              {/* Tablet (md-lg): Balanced Card Layout */}
              <div className="hidden md:block lg:hidden">
                <div className="space-y-8">
                  {/* Header Section */}
                  <motion.div

                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Service</span>
                      <span className="text-3xl font-black text-blue-600">{index + 1}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 leading-tight">{service.title}</h2>
                  </motion.div>

                  <motion.p
                    className="text-base text-neutral-700 leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Two Column Layout - consistent for all services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Image Card - always on left */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="relative">
                        {/* Decorative background */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-blue-100/40 to-transparent rounded-3xl blur-2xl"></div>

                        {/* Main card */}
                        <Card className="relative overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 aspect-square flex items-center justify-center">
                          <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-8' />

                          {/* Floating Pills */}
                          {service.pills?.map((pill, pillIndex) => (
                            <motion.div
                              key={pillIndex}
                              className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold border-4 border-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]`}
                              variants={pill.animation}
                              animate="animate"
                            >
                              {pill.text}
                            </motion.div>
                          ))}
                        </Card>
                      </div>
                    </motion.div>

                    {/* Features Grid - always on right */}
                    <motion.div
                      className="grid grid-cols-1 gap-4 h-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.25 + idx * 0.05 }}
                        >
                          <div className="flex gap-3 items-start p-4">
                            <span className="text-blue-600 font-bold flex-shrink-0 text-lg">✓</span>
                            <p className="text-sm text-neutral-700 leading-tight">{feature}</p>
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
                    <Button size="lg" onClick={scrollToContact} className="w-full rounded-full">
                      Get Started
                    </Button>
                  </motion.div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"
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
                  >
                    <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-wider">Service {index + 1}</span>
                    <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-blue-600 leading-tight">{service.title}</h2>
                    <p className="text-base text-neutral-700 mb-8 leading-relaxed">
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
                          <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                          <span className="text-sm text-neutral-700">{feature}</span>
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative h-80 lg:h-96 pb-16">
                    {/* Decorative background */}
                    <div className={`absolute -inset-8 bg-gradient-to-br ${index % 2 === 1 ? 'from-blue-100/40 to-transparent' : 'from-transparent to-blue-100/40'} rounded-3xl blur-2xl`}></div>

                    {/* Main card */}
                    <Card className="relative overflow-hidden h-full flex items-center justify-center bg-white shadow-lg hover:shadow-3xl transition-all duration-500 border-0">
                      <img src={service.image} alt={`service${index + 1}`} className='h-full w-full object-contain p-4 ' />

                      {/* Floating Pills */}
                      {service.pills?.map((pill, pillIndex) => (
                        <motion.div
                          key={pillIndex}
                          className={`absolute ${pill.position} backdrop-blur-md bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold border-2 border-white shadow-[0_8px_24px_rgba(59,130,246,0.3)]`}
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
                        <Card className="bg-white backdrop-blur-sm shadow-lg hover:shadow-xl border-0 p-3 text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                          <div className="text-blue-600 font-bold text-xs mb-1 line-clamp-1">
                            {feature.split(' ').slice(0, 2).join(' ')}
                          </div>
                          <div className="text-xs text-neutral-600 leading-tight line-clamp-2">
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
                <div className="hidden lg:block mt-20 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div >
  );
};

export default Services;
