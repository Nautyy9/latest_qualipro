import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';
import {
  pulseGlow,
  slideAndFade,
  particleStagger,
  particleFloat
} from '../utils/advanced-motion';

const NotFound: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-hidden flex items-center justify-center">
      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Healthcare SVG background images - positioned elegantly */}
      <motion.img
        src="/images/stethoscope.svg"
        alt="stethoscope"
        className="absolute top-12 right-20 w-32 h-32 opacity-[0.08] pointer-events-none"
        animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/images/hospital.svg"
        alt="hospital"
        className="absolute bottom-24 left-16 w-20 h-20 opacity-10 pointer-events-none"
        animate={{ rotate: [0, -3, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/images/heart-with-status.svg"
        alt="heart"
        className="absolute top-1/3 left-12 w-24 h-24 opacity-[0.07] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.09, 0.07] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/images/heart-hand.svg"
        alt="handshake"
        className="absolute bottom-32 right-12 w-32 h-32 opacity-[0.08] pointer-events-none"
        animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/images/sringe.svg"
        alt="syringe"
        className="absolute top-1/2 right-1/4 w-20 h-20 opacity-[0.2] pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles with stagger */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={particleStagger}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
            custom={i}
            variants={particleFloat(i)}
            initial="hidden"
            animate="show"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
      >
        <div className="max-w-4xl w-full relative z-20">
          {/* 404 Hero Section - Healthcare Themed */}
          <motion.div
            className="mb-12 text-center"
            variants={scaleIn}
          >
            <div className="relative inline-block mb-12 mx-auto">
              {/* Healthcare diagnostic illustration background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-96 h-96 text-blue-500 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Pulse/heartbeat wave */}
                  <motion.path
                    d="M 20 100 L 40 100 L 50 80 L 60 120 L 70 90 L 80 110 L 90 95 L 100 100 L 110 100 L 130 100 L 180 100"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ strokeDasharray: [0, 200], strokeDashoffset: [200, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Circles around pulse */}
                  <motion.circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" animate={{ r: [60, 80, 60] }} transition={{ duration: 2.5, repeat: Infinity }} />
                  <motion.circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" animate={{ r: [80, 100, 80] }} transition={{ duration: 3, repeat: Infinity }} />
                </svg>
              </motion.div>

              {/* Main 404 Text with blue gradient */}
              <motion.h1
                className="text-9xl md:text-[180px] font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent select-none relative z-10"
                animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                404
              </motion.h1>

              {/* Glowing effect behind 404 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full opacity-0 blur-3xl -z-10"
                variants={pulseGlow}
                animate="animate"
                style={{ width: '320px', height: '320px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>

            {/* Subtitle */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3"
              variants={slideAndFade}
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
            >
              Page Not Found
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 font-medium"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              The page you're looking for seems to be in critical condition 🏥
            </motion.p>
          </motion.div>

          {/* Description Card */}
          <motion.div
            className="mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative bg-gray-50 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-blue-400">
                <p className="text-gray-700 text-center leading-relaxed text-base md:text-lg font-medium">
                  Don't worry, we help organizations navigate complex healthcare landscapes every day.
                  Let us help you find your way back to the right destination.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons with advanced animations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={slideAndFade}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Link
                to="/"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group w-full sm:w-auto overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <Home size={20} className="group-hover:animate-bounce relative z-10 text-oklch-white-pure" />
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 text-oklch-white-pure">Go to Homepage</motion.span>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600/10 transition-all duration-300 group w-full sm:w-auto relative overflow-hidden"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform relative z-10" />
              <span className="relative z-10">Go Back</span>
            </motion.button>
          </motion.div>

          {/* Navigation Cards with advanced animations */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
          >
            {[
              {
                to: '/services',
                icon: Search,
                title: 'Our Services',
                description: 'Explore our comprehensive healthcare solutions',
                color: 'from-cyan-400 to-blue-500',
              },
              {
                to: '/about',
                icon: Zap,
                title: 'About Us',
                description: 'Learn about QualiPro and our mission',
                color: 'from-blue-400 to-indigo-500',
              },
              {
                to: '/contact',
                icon: MessageCircle,
                title: 'Contact Us',
                description: 'Get in touch for support',
                color: 'from-indigo-400 to-cyan-500',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Link
                    to={item.to}
                    className="group relative h-full"
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-15 rounded-xl blur-xl transition-all duration-500`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Main card */}
                    <motion.div
                      className={`relative bg-white border border-blue-200 rounded-xl p-6 h-full flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-500 group-hover:bg-blue-50 group-hover:border-blue-400`}
                      whileHover={{ y: -12, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -2, 0] }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-10"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      {/* Icon with enhanced animation */}
                      <motion.div
                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-md group-hover:shadow-lg transition-all duration-300 relative z-10`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Icon size={28} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-bold text-blue-700 mb-2 text-lg relative z-10">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">
                        {item.description}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        className={`h-1 w-12 bg-gradient-to-r ${item.color} rounded-full mt-4 group-hover:w-full transition-all duration-500`}
                        initial={{ width: '48px' }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
