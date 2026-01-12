import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textReveal, fadeInUp, scaleIn } from '../../utils/motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding cultured-bg">
      <div className="container-max flex flex-col mx-auto">
        <span className="inline-block mb-4 mx-auto rounded-full border border-oklch-primary-base bg-oklch-white-pure px-4 py-1 text-sm text-oklch-primary-dark shadow-lg shadow-oklch-secondary-lighter">About Us •</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <div className="space-y-4 ">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-oklch-text-dark" variants={textReveal}>
                Empowering Healthcare Excellence Through Quality
              </motion.h2>
              <motion.p className="text-lg leading-relaxed text-oklch-text-dark" variants={textReveal}>
                At QualiPro, we understand the critical importance of quality in healthcare.
                Our mission is to bridge the gap between healthcare providers and certification
                standards, ensuring patient safety and operational excellence.
              </motion.p>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer}>
              {/* Mission */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-oklch-secondary-lighter/40 rounded-lg flex items-center justify-center">
                    <Target className="text-oklch-primary-base" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-oklch-text-dark-alt">Our Mission</h3>
                </div>
                <p className="text-oklch-text-gray text-base">
                  To elevate healthcare standards through comprehensive quality solutions and certification support.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-oklch-secondary-lighter/40 rounded-lg flex items-center justify-center">
                    <Eye className="text-oklch-primary-base" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-oklch-text-dark-alt">Our Vision</h3>
                </div>
                <p className="text-oklch-text-gray text-base">
                  To be the preferred partner for healthcare organizations seeking excellence and certification.
                </p>
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-oklch-text-dark-alt">Why Healthcare Organizations Trust Us</h3>
              <div className="space-y-3">
                {[
                  'Expert team with 10+ years of healthcare quality experience',
                  '500+ successful NABH certifications completed',
                  'Comprehensive end-to-end certification support',
                  'Digital solutions for modern healthcare management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-oklch-primary-base mt-0.5" size={20} />
                    <span className="text-oklch-text-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Content Box */}
            <motion.div className="bg-gradient-to-br from-oklch-bg-light-blue to-oklch-secondary-lighter rounded-2xl p-8 shadow-lg border border-oklch-secondary-lighter group-hover:shadow-2xl transition-all duration-500 hover:scale-105" variants={scaleIn}>
              <div className="space-y-6">
                {/* Header */}
                <motion.div className="text-center space-y-2" variants={staggerContainer}>
                  <motion.div className="w-16 h-16 bg-oklch-primary-base rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" variants={scaleIn}>
                    <Heart className="text-white group-hover:animate-pulse" size={32} />
                  </motion.div>
                  <motion.h3 className="text-xl font-bold text-oklch-text-dark" variants={textReveal}>Patient-Centered Approach</motion.h3>
                  <motion.p className="text-sm text-oklch-text-dark" variants={textReveal}>Quality healthcare for better patient outcomes</motion.p>
                </motion.div>

                {/* Interactive Stats Grid */}
                <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-secondary-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-oklch-primary-base group-hover/stat:animate-pulse">15+</div>
                    <div className="text-xs text-oklch-text-dark">States Covered</div>
                    <div className="w-full bg-oklch-secondary-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-primary-base h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-accent-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-oklch-accent-bright group-hover/stat:animate-pulse">24/7</div>
                    <div className="text-xs text-oklch-text-dark">Support Available</div>
                    <div className="w-full bg-oklch-accent-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-accent-bright h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-purple-light hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-oklch-purple-light group-hover/stat:animate-pulse">100%</div>
                    <div className="text-xs text-oklch-text-dark">Compliance Rate</div>
                    <div className="w-full bg-oklch-purple-light h-1 rounded-full mt-2">
                      <div className="bg-oklch-purple-light h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-oklch-white-pure rounded-lg p-4 text-center shadow-sm border border-oklch-secondary-lighter hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-oklch-primary-dark group-hover/stat:animate-pulse">50+</div>
                    <div className="text-xs text-oklch-text-dark">Expert Consultants</div>
                    <div className="w-full bg-oklch-secondary-lighter h-1 rounded-full mt-2">
                      <div className="bg-oklch-primary-dark h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Process Flow */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-oklch-text-dark-alt text-center">Our Certification Process</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">1</div>
                      <div className="text-xs text-oklch-text-gray">Assessment</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-oklch-secondary-light mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">2</div>
                      <div className="text-xs text-oklch-text-gray">Planning</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-oklch-secondary-light mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-primary-base rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">3</div>
                      <div className="text-xs text-oklch-text-gray">Implementation</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-oklch-secondary-light mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-oklch-accent-bright rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">✓</div>
                      <div className="text-xs text-oklch-text-gray">Certification</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-oklch-accent-bright rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-oklch-primary-base rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
