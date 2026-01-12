import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Star, Trophy, Users, Clock, Shield, TrendingUp } from 'lucide-react';

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
          <span className="inline-block mb-2 mx-auto rounded-full border border-sky-500 bg-white px-4 py-1 text-sm text-sky-700 shadow-lg shadow-blue-200/50">Our Stats •</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#202020' }}>
            Numbers That Speak Our <span className="text-red-600">Excellence</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#202020' }}>
            Our track record demonstrates our commitment to healthcare quality and
            successful partnerships with organizations across India.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="mx-16 grid grid-cols-1 bg-gradient-to-br from-blue-50/50 to-blue-100/50 p-4 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl"
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
                <div className="bg-white h-60 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-blue-100 hover:border-neutral-200 transform hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-tr from-white to-sky-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>

                  {/* Content */}
                  <div className="flex flex-col h-full justify-start relative space-y-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-blue-200/40 border border-blue-200/40 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-blue-600" size={28} />
                    </div>

                    {/* Number */}
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-gray-900">
                        <CounterNumber value={stat.number} duration={2} />
                      </div>
                      <div className="font-semibold text-neutral-800 text-sm">
                        {stat.label}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 text-xs leading-relaxed">
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
          <div className="bg-sgray rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Join 500+ Healthcare Organizations Who Trust QualiPro
            </h3>
            <p className="text-neutral-500 mb-6">
              Ready to become part of our success story? Let's discuss how we can help
              your organization achieve certification and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
