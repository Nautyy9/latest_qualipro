import React from 'react';
import { motion } from 'framer-motion';
import { textReveal, fadeUp, contentItemStagger, contentItemFadeUp, fadeInFromRight } from '../../utils/motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import AnimatedIcon from '../ui/animated-icon';

const AboutSection: React.FC = () => {
  return (
    <section className="mt-20 section-padding cultured-bg">
      <div className="container-max flex flex-col mx-auto">
        <motion.span
          className="inline-block mb-4 mx-auto rounded-full border border-oklch-sky-base bg-oklch-white-pure px-4 py-1 text-sm text-oklch-sky-dark shadow-lg shadow-oklch-secondary-lighter/50"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          About Us •
        </motion.span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:gap-12 items-center group">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 ">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-oklch-text-dark"
                variants={textReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                Empowering Healthcare Excellence Through Quality
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-oklch-text-dark"
                variants={fadeUp()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                At QualiPro, we understand the critical importance of quality in healthcare.
                Our mission is to bridge the gap between healthcare providers and certification
                standards, ensuring patient safety and operational excellence.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={contentItemStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Mission */}
              <motion.div className="space-y-3" variants={contentItemFadeUp}>
                <div className="flex items-center space-x-3">
                  <AnimatedIcon
                    icon={<Target className="text-oklch-primary-base" size={24} />}
                    triggerOnScroll={true}
                    size="md"
                    centered={false}
                    className="bg-oklch-secondary-light/50 rounded-lg"
                  />
                  <motion.h3
                    className="text-xl font-semibold text-oklch-neutral-900"
                    variants={fadeUp()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    Our Mission
                  </motion.h3>
                </div>
                <motion.p
                  className="text-oklch-neutral-600 text-base"
                  variants={fadeUp()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  To elevate healthcare standards through comprehensive quality solutions and certification support.
                </motion.p>
              </motion.div>

              {/* Vision */}
              <motion.div className="space-y-3" variants={contentItemFadeUp}>
                <div className="flex items-center space-x-3">
                  <AnimatedIcon
                    icon={<Eye className="text-oklch-primary-base" size={24} />}
                    triggerOnScroll={true}
                    size="md"
                    centered={false}
                    className="bg-oklch-secondary-light/50 rounded-lg"
                  />
                  <motion.h3
                    className="text-xl font-semibold text-oklch-neutral-900"
                    variants={fadeUp()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    Our Vision
                  </motion.h3>
                </div>
                <motion.p
                  className="text-oklch-neutral-600 text-base"
                  variants={fadeUp()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  To be the preferred partner for healthcare organizations seeking excellence and certification.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div className="space-y-4" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
              <motion.h3
                className="text-xl font-semibold text-oklch-neutral-900"
                variants={fadeUp()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                Why Healthcare Organizations Trust Us
              </motion.h3>
              <motion.div className="space-y-3" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                {[
                  'Expert team with 10+ years of healthcare quality experience',
                  '500+ successful NABH certifications completed',
                  'Comprehensive end-to-end certification support',
                  'Digital solutions for modern healthcare management'
                ].map((feature, index) => (
                  <motion.div key={index} className="flex items-start space-x-3" variants={contentItemFadeUp}>
                    <motion.div
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="text-oklch-primary-base flex-shrink-0" size={24} />
                    </motion.div>
                    <motion.span
                      className="text-oklch-text-dark text-sm md:text-base"
                    >
                      {feature}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="relative hidden lg:block"
            variants={fadeInFromRight(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            {/* Main Content Box */}
            <motion.div className="bg-gradient-to-br from-oklch-bg-light-blue/50 to-oklch-secondary-light/50 rounded-2xl p-8 shadow-lg border border-oklch-border-primary/50 group-hover:shadow-2xl transition-all duration-500 relative hover:scale-105" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 1 }}>
              <div className="space-y-6">
                {/* Header */}
                <motion.div className="text-center space-y-2" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
                  <motion.div variants={contentItemFadeUp}>
                    <AnimatedIcon
                      icon={<Heart className="text-white" size={32} />}
                      triggerOnScroll={true}
                      size="lg"
                      className="bg-oklch-primary-base rounded-full shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                    />
                  </motion.div>
                  <motion.h3 className="text-xl font-bold text-oklch-text-dark" variants={contentItemFadeUp}>Patient-Centered Approach</motion.h3>
                  <motion.p className="text-sm text-oklch-text-dark" variants={contentItemFadeUp}>Quality healthcare for better patient outcomes</motion.p>
                </motion.div>

                {/* Interactive Stats Grid */}
                <motion.div className="grid grid-cols-2 gap-4" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }}>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-secondary-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                    <div className="text-2xl font-bold text-oklch-primary-base group-hover/stat:animate-pulse">15+</div>
                    <div className="text-xs text-oklch-text-dark">States Covered</div>
                    <div className="w-full bg-oklch-secondary-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-primary-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-success-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                    <div className="text-2xl font-bold text-oklch-success-base group-hover/stat:animate-pulse">24/7</div>
                    <div className="text-xs text-oklch-text-dark">Support Available</div>
                    <div className="w-full bg-oklch-success-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-success-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-purple-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                    <div className="text-2xl font-bold text-oklch-primary-darker group-hover/stat:animate-pulse">100%</div>
                    <div className="text-xs text-oklch-text-dark">Compliance Rate</div>
                    <div className="w-full bg-oklch-purple-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-primary-darker h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-primary-bright hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                    <div className="text-2xl font-bold text-oklch-primary-base group-hover/stat:animate-pulse">50+</div>
                    <div className="text-xs text-oklch-text-dark">Expert Consultants</div>
                    <div className="w-full bg-oklch-secondary-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-primary-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Process Flow */}
                <div className="pb-12 space-y-3  ">
                  <h4 className="font-semibold text-oklch-text-dark text-center">Our Certification Process</h4>
                  <div className="absolute w-full justify-evenly flex px-8 xl:px-12  left-1/2 -translate-x-1/2 bottom-4">
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">1</div>
                      <div className="text-xs text-oklch-text-gray">Assessment</div>
                    </div>
                    <div className="hidden min-[550px]:flex flex-1 h-0.5 min-[550px]:w-40 smd:w-60 md:w-80 mlg:w-96 mt-4 bg-oklch-secondary-light "></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">2</div>
                      <div className="text-xs text-oklch-text-gray">Planning</div>
                    </div>
                    <div className="hidden min-[550px]:flex  flex-1 mt-4 h-0.5 bg-oklch-secondary-light mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">3</div>
                      <div className="text-xs text-oklch-text-gray">Implementation</div>
                    </div>
                    <div className="hidden min-[550px]:flex flex-1 mt-4 h-0.5 bg-oklch-secondary-light mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: 'oklch(0.63 0.26 29)' }}>✓</div>
                      <div className="text-xs text-oklch-text-gray">Certification</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: 'oklch(0.63 0.26 29)' }}></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-oklch-primary-base rounded-full opacity-20"></div>
          </motion.div>
        </div>

        {/* Mobile Card - fadeUp animation on 0-lg screens */}
        <motion.div
          className="relative lg:hidden mt-20"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}

        >
          {/* Main Content Box */}
          <motion.div className=" bg-gradient-to-br from-oklch-bg-light-blue/50 to-oklch-secondary-light/50 rounded-2xl p-8 shadow-lg border border-oklch-border-primary/50 group-hover:shadow-2xl transition-all duration-500 relative hover:scale-105" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
            <div className="space-y-6">
              {/* Header */}
              <motion.div className="text-center space-y-2" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <motion.div variants={contentItemFadeUp}>
                  <AnimatedIcon
                    icon={<Heart className="text-white" size={32} />}
                    triggerOnScroll={true}
                    size="lg"
                    className="bg-oklch-primary-base rounded-full shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                  />
                </motion.div>
                <motion.h3 className="text-xl font-bold text-oklch-text-dark" variants={contentItemFadeUp}>Patient-Centered Approach</motion.h3>
                <motion.p className="text-sm text-oklch-text-dark" variants={contentItemFadeUp}>Quality healthcare for better patient outcomes</motion.p>
              </motion.div>

              {/* Interactive Stats Grid */}
              <motion.div className="grid grid-cols-2 gap-4" variants={contentItemStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-secondary-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                  <div className="text-2xl font-bold text-oklch-primary-base group-hover/stat:animate-pulse">15+</div>
                  <div className="text-xs text-oklch-text-dark">States Covered</div>
                  <div className="w-full bg-oklch-secondary-light h-1 rounded-full mt-2">
                    <div className="bg-oklch-primary-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                  </div>
                </motion.div>
                <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-success-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                  <div className="text-2xl font-bold text-oklch-success-base group-hover/stat:animate-pulse">24/7</div>
                  <div className="text-xs text-oklch-text-dark">Support Available</div>
                  <div className="w-full bg-oklch-success-light h-1 rounded-full mt-2">
                    <div className="bg-oklch-success-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                  </div>
                </motion.div>
                <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-purple-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                  <div className="text-2xl font-bold text-oklch-primary-darker group-hover/stat:animate-pulse">100%</div>
                  <div className="text-xs text-oklch-text-dark">Compliance Rate</div>
                  <div className="w-full bg-oklch-purple-light h-1 rounded-full mt-2">
                    <div className="bg-oklch-primary-darker h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                  </div>
                </motion.div>
                <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-primary-bright hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={contentItemFadeUp}>
                  <div className="text-2xl font-bold text-oklch-primary-base group-hover/stat:animate-pulse">50+</div>
                  <div className="text-xs text-oklch-text-dark">Expert Consultants</div>
                  <div className="w-full bg-oklch-secondary-light h-1 rounded-full mt-2">
                    <div className="bg-oklch-primary-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Process Flow */}
              <div className="pb-16 sm:pb-12 space-y-3">
                <h4 className="font-semibold text-oklch-text-dark text-center">Our Certification Process</h4>
                <div className="absolute w-full  justify-evenly flex sm:px-12 left-1/2 -translate-x-1/2 bottom-4">
                  <div className="text-center space-y-1">
                    <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">1</div>
                    <div className="text-xs text-oklch-text-gray">Assessment</div>
                  </div>
                  <div className="hidden min-[550px]:flex flex-1 h-0.5 min-[550px]:w-40 smd:w-60 md:w-80 mlg:w-96 mt-4 bg-oklch-secondary-light "></div>
                  <div className="text-center space-y-1">
                    <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">2</div>
                    <div className="text-xs text-oklch-text-gray">Planning</div>
                  </div>
                  <div className="hidden min-[550px]:flex  flex-1 mt-4 h-0.5 bg-oklch-secondary-light mx-2"></div>
                  <div className="text-center space-y-1">
                    <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">3</div>
                    <div className="text-xs text-oklch-text-gray">Implementation</div>
                  </div>
                  <div className="hidden min-[550px]:flex flex-1 mt-4 h-0.5 bg-oklch-secondary-light mx-2"></div>
                  <div className="text-center space-y-1">
                    <div className="w-8 h-8 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: 'oklch(0.63 0.26 29)' }}>✓</div>
                    <div className="text-xs text-oklch-text-gray">Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: 'oklch(0.63 0.26 29)' }}></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-oklch-primary-base rounded-full opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
