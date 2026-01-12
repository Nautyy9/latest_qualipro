import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Shield, Award, CheckCircle, Star, Users, Clock } from 'lucide-react';

const CTASection: React.FC = () => {
  const floatVariants = {
    animate: (custom: number) => ({
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: custom * 0.5,
      },
    }),
  };

  const centralHubVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-32 right-1/3 w-28 h-28 bg-indigo-300/25 rounded-full blur-2xl animate-pulse animation-delay-600"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <span className="inline-block  mb-2 mx-auto rounded-full border border-sky-500 bg-white  px-4 py-1 text-sm text-sky-700 shadow-lg shadow-blue-200/50">Get Started •</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#202020' }}>
            Ready to <span className="text-blue-500">Transform</span><br />
            Your <span className="text-red-600">Healthcare</span> Future?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#202020' }}>
            Join 500+ healthcare organizations who've achieved excellence with QualiPro.
            Start your certification journey with a free consultation today.
          </p>
        </div>

        {/* Creative Hexagon Layout */}
        <div className="relative w-full">
          {/* Grid Container */}
          <div className="grid gap-8 w-full">
            {/* Mobile (0-sm): Central Hub First, then cards stacked */}
            {/* sm-md: 3 rows, hub centered between first card and last 2 cards */}
            {/* md-lg: Same as sm-md */}
            {/* lg+: 3x3 grid layout */}

            {/* For lg+: Phone Card occupies full height, column 1 */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 w-full lg:min-h-[600px]">

              {/* Central Hub - First on mobile, centered on md, center-second-col on lg */}
              <motion.div 
                className="order-1 sm:order-1 md:order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-end-4 flex items-center justify-center"
                variants={centralHubVariants}
                animate="animate"
              >
                <div className="w-80 h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 p-4 rounded-full flex items-center justify-center shadow-2xl  border border-blue-200/50">
                  <div className="bg-blue-500 rounded-full w-full h-full flex flex-col items-center justify-center shadow-lg">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white rounded-full mx-auto flex items-center justify-center">
                        <Award className="text-blue-500" size={40} />
                      </div>
                      <div className='flex flex-col p-5'>
                        <h3 className="text-2xl lg:text-xl xl:text-2xl font-bold text-white mb-2">Start Your Journey</h3>
                        <p className="text-blue-100 text-sm mb-4">Healthcare Excellence Awaits</p>
                        <Link
                          to="/contact"
                          className="bg-white text-sm text-blue-500 px-6 lg:px-2 xl:px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                        >
                          Get Free Consultation
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card - order 2 on mobile, order 1 on md and up, col 1 on lg */}
              <motion.div 
                className="order-2 sm:order-2 md:order-1 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-end-4"
                variants={floatVariants}
                animate="animate"
                custom={0}
              >
                <div className="h-full p-4 rounded-3xl bg-gradient-to-br from-blue-50/50 to-blue-100/50 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl"
                >
                  <div
                    className="bg-white h-full backdrop-blur-xl rounded-3xl p-8 flex flex-col   group relative z-10"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <Phone className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Direct Expert Line</h3>
                      <p className="text-gray-600 text-sm">Speak with our NABH specialists instantly</p>
                      <a
                        href="tel:+919876543210"
                        className="block bg-blue-50 hover:bg-blue-100 text-blue-500 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                      >
                        +91 9876543210
                      </a>
                      <div className="flex items-center justify-center space-x-2 text-xs text-blue-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Available Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Last 2 Cards Container - order 3 on mobile and sm, flex-row on md, col 3 on lg */}
              <div className="order-3 sm:order-3 md:order-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:row-end-4 flex flex-col md:flex-row lg:flex-col gap-8">

                {/* Stats Card */}
                <motion.div 
                  className=" flex-1 p-4 rounded-3xl bg-gradient-to-br from-blue-50/50 to-blue-100/50 shadow-xl flex flex-col h-full w-full justify-center relative "
                  variants={floatVariants}
                  animate="animate"
                  custom={1}
                >
                  <div
                    className="relative   text-center space-y-4 bg-white/95 rounded-2xl p-8 h-max backdrop-blur-xl hover:shadow-3xl transition-all duration-500 group  z-10 "
                  >
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Proven Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Success Rate</span>
                        <span className="text-lg font-bold text-blue-500">99%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Hospitals Certified</span>
                        <span className="text-lg font-bold text-blue-500">500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg. Timeline</span>
                        <span className="text-lg font-bold text-blue-500">6 Months</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div 
                  className="flex-1 p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-blue-100/50 shadow-xl flex flex-col"
                  variants={floatVariants}
                  animate="animate"
                  custom={2}
                >
                  <div
                    className="text-center space-y-4 bg-white/95 backdrop-blur-xl rounded-3xl p-8 h-full hover:shadow-3xl transition-all duration-500 group relative z-10"
                  >
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <Mail className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Email Consultation</h3>
                    <p className="text-gray-600 text-sm">Get detailed proposals & documentation</p>
                    <a
                      href="mailto:info@qualipro.healthcare"
                      className="block bg-blue-50 hover:bg-blue-100 text-blue-500 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm"
                    >
                      info@qualipro.healthcare
                    </a>
                    <div className="flex items-center justify-center space-x-2 text-xs text-blue-500">
                      <Clock size={14} />
                      <span>24hr Response Time</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee Section */}
        <div className="mt-20 max-w-6xl mx-auto bg-gradient-to-br from-blue-50/50 to-blue-100/50 p-3 rounded-3xl shadow-xl flex flex-col \">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 w-full\">
            <div className="grid   grid-cols-1 w-full md:grid-cols-3 gap-8 items-center">

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900">100% Guarantee</h4>
                <p className="text-sm text-gray-600">Certification success or full refund</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900">Expert Team</h4>
                <p className="text-sm text-gray-600">Certified NABH assessors & consultants</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900">End-to-End Support</h4>
                <p className="text-sm text-gray-600">From assessment to certification</p>
              </div>

            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium mb-6" style={{ color: '#202020' }}>
            Ready to join the ranks of certified healthcare excellence?
          </p>
          <Link
            to="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
