import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Star, Trophy, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import AnimatedButton from '../ui/animated-button';
import AnimatedIcon from '../ui/animated-icon';

// Counter component for animating numbers
const CounterNumber: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState('0');

  // Extract the numeric part
  const numericPart = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  React.useEffect(() => {
    let start = 0;
    const increment = numericPart / (duration * 60); // 60 frames per second
    let animationFrameId: number;

    const animate = () => {
      start += increment;
      if (start < numericPart) {
        setDisplayValue(Math.ceil(start) + suffix);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, numericPart, suffix, duration]);

  return <>{displayValue}</>;
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Healthcare Organizations Certified',
      icon: Award,
      color: 'primary',
      description: 'Successfully certified across India'
    },
    {
      number: '15+',
      label: 'States Covered',
      icon: MapPin,
      color: 'accent',
      description: 'Nationwide presence and expertise'
    },
    {
      number: '99%',
      label: 'Success Rate',
      icon: Star,
      color: 'secondary',
      description: 'Proven track record of excellence'
    },
    {
      number: '10+',
      label: 'Years Experience',
      icon: Trophy,
      color: 'primary',
      description: 'Decade of healthcare quality leadership'
    },
    {
      number: '50+',
      label: 'Expert Consultants',
      icon: Users,
      color: 'accent',
      description: 'Certified healthcare professionals'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: Clock,
      color: 'secondary',
      description: 'Round-the-clock assistance'
    },
    {
      number: '100%',
      label: 'Compliance Rate',
      icon: Shield,
      color: 'primary',
      description: 'Full regulatory compliance assurance'
    },
    {
      number: '95%',
      label: 'Client Retention',
      icon: TrendingUp,
      color: 'accent',
      description: 'Long-term partnership success'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding rounded-xl">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block mb-2 mx-auto rounded-full border border-oklch-sky-base bg-oklch-white-pure px-4 py-1 text-sm text-oklch-sky-dark shadow-lg shadow-oklch-secondary-lighter/50">Our Stats •</span>
          <h2 className="text-3xl md:text-4xl font-bold text-oklch-text-dark">
            Numbers That Speak Our <span className="text-red-600">Excellence</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-oklch-text-dark">
            Our track record demonstrates our commitment to healthcare quality and
            successful partnerships with organizations across India.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="smd:mx-16 lg:mx-8 lxl:mx-16 grid grid-cols-1 bg-gradient-to-br from-oklch-bg-light-blue/50 to-oklch-secondary-light/50 p-4 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon as React.ElementType;
            return (
              <motion.div
                key={index}
                className="group relative overflow-visible"
                variants={itemVariants}
              >
                <div className="bg-oklch-white-pure h-60 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-oklch-secondary-light hover:border-oklch-border-light transform hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-tr from-oklch-white-pure to-oklch-sky-base opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>

                  {/* Content */}
                  <div className="flex flex-col h-full justify-start relative space-y-4">
                    {/* Icon */}
                    <AnimatedIcon
                      icon={<Icon className="text-oklch-primary-base" size={28} />}
                      size="md"
                      triggerOnScroll={true}
                      centered={false}
                      className="bg-oklch-secondary-light/50 border border-oklch-secondary-light/50 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Number */}
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-oklch-text-dark">
                        <CounterNumber value={stat.number} duration={2} />
                      </div>
                      <div className="font-semibold text-oklch-text-gray text-sm">
                        {stat.label}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-oklch-text-gray text-xs leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-sgray rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-oklch-primary-base mb-4">
              Join 500+ Healthcare Organizations Who Trust QualiPro
            </h3>
            <p className="text-oklch-text-gray mb-6">
              Ready to become part of our success story? Let's discuss how we can help
              your organization achieve certification and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                variant="primary"
                size="md"
                animationDuration={0.25}
              >
                Schedule Consultation
              </AnimatedButton>
              <AnimatedButton
                variant="secondary"
                size="md"
                animationDuration={0.25}
              >
                Download Case Studies
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
