import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textReveal, fadeInUp, scaleIn } from '../../utils/motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding cultured-bg">
      <div className="container-max flex flex-col mx-auto">
        <span className="inline-block  mb-4 mx-auto rounded-full border border-sky-500 bg-white  px-4 py-1 text-sm text-sky-700 shadow-lg shadow-blue-200/50">About Us •</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <div className="space-y-4 ">
              <motion.h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#202020' }} variants={textReveal}>
                Empowering Healthcare Excellence Through Quality
              </motion.h2>
              <motion.p className="text-lg leading-relaxed" style={{ color: '#202020' }} variants={textReveal}>
                At QualiPro, we understand the critical importance of quality in healthcare.
                Our mission is to bridge the gap between healthcare providers and certification
                standards, ensuring patient safety and operational excellence.
              </motion.p>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer}>
              {/* Mission */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sky-200/40 rounded-lg flex items-center justify-center">
                    <Target className="text-sky-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-raisin-900">Our Mission</h3>
                </div>
                <p className="text-raisin-600 text-base">
                  To elevate healthcare standards through comprehensive quality solutions and certification support.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div className="space-y-3" variants={fadeInUp}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sky-200/40 rounded-lg flex items-center justify-center">
                    <Eye className="text-sky-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-raisin-900">Our Vision</h3>
                </div>
                <p className="text-raisin-600 text-base">
                  To be the preferred partner for healthcare organizations seeking excellence and certification.
                </p>
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-raisin-900">Why Healthcare Organizations Trust Us</h3>
              <div className="space-y-3">
                {[
                  'Expert team with 10+ years of healthcare quality experience',
                  '500+ successful NABH certifications completed',
                  'Comprehensive end-to-end certification support',
                  'Digital solutions for modern healthcare management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-sky-500 mt-0.5" size={20} />
                    <span style={{ color: '#202020' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Content Box */}
            <motion.div className="bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-2xl p-8 shadow-lg border border-blue-200/50 group-hover:shadow-2xl transition-all duration-500 hover:scale-105" variants={scaleIn}>
              <div className="space-y-6">
                {/* Header */}
                <motion.div className="text-center space-y-2" variants={staggerContainer}>
                  <motion.div className="w-16 h-16 bg-blue-500 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" variants={scaleIn}>
                    <Heart className="text-white group-hover:animate-pulse" size={32} />
                  </motion.div>
                  <motion.h3 className="text-xl font-bold" style={{ color: '#202020' }} variants={textReveal}>Patient-Centered Approach</motion.h3>
                  <motion.p className="text-sm" style={{ color: '#202020' }} variants={textReveal}>Quality healthcare for better patient outcomes</motion.p>
                </motion.div>

                {/* Interactive Stats Grid */}
                <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
                  <motion.div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-blue-600 group-hover/stat:animate-pulse">15+</div>
                    <div className="text-xs" style={{ color: '#202020' }}>States Covered</div>
                    <div className="w-full bg-blue-100 h-1 rounded-full mt-2">
                      <div className="bg-blue-500 h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-white rounded-lg p-4 text-center shadow-sm border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-green-600 group-hover/stat:animate-pulse">24/7</div>
                    <div className="text-xs" style={{ color: '#202020' }}>Support Available</div>
                    <div className="w-full bg-green-100 h-1 rounded-full mt-2">
                      <div className="bg-green-500 h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-white rounded-lg p-4 text-center shadow-sm border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-purple-600 group-hover/stat:animate-pulse">100%</div>
                    <div className="text-xs" style={{ color: '#202020' }}>Compliance Rate</div>
                    <div className="w-full bg-purple-100 h-1 rounded-full mt-2">
                      <div className="bg-purple-500 h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                  <motion.div className="bg-white rounded-lg p-4 text-center shadow-sm border border-indigo-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group/stat cursor-pointer" variants={fadeInUp}>
                    <div className="text-2xl font-bold text-indigo-600 group-hover/stat:animate-pulse">50+</div>
                    <div className="text-xs" style={{ color: '#202020' }}>Expert Consultants</div>
                    <div className="w-full bg-indigo-100 h-1 rounded-full mt-2">
                      <div className="bg-indigo-500 h-1 rounded-full w-0 group-hover/stat:w-full transition-all duration-1000"></div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Process Flow */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-center">Our Certification Process</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">1</div>
                      <div className="text-xs text-neutral-600">Assessment</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-200 mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">2</div>
                      <div className="text-xs text-neutral-600">Planning</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-200 mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">3</div>
                      <div className="text-xs text-neutral-600">Implementation</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-200 mx-2"></div>
                    <div className="text-center space-y-1">
                      <div className="w-8 h-8 bg-accent-500 rounded-full mx-auto text-white text-xs flex items-center justify-center font-bold">✓</div>
                      <div className="text-xs text-neutral-600">Certification</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
