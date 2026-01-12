import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textReveal } from '../../utils/motion';
import { Award, Stethoscope, Smartphone, BookOpen, Users } from 'lucide-react';
import { BentoCard, BentoGrid } from "../ui/bento-grid";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      name: 'NABH Certification & Accreditation',
      description: 'Complete NABH certification support from gap assessment to successful accreditation with expert guidance.',
      Icon: Award,
      img: '/images/service1.png',
      href: '/services',
      cta: 'Learn more',
      background: (
        <div className="absolute inset-0  bg-white" />
      ),
      className: 'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2',
    },
    {
      id: 2,
      name: 'Healthcare Quality Consulting',
      description: 'Expert consulting services to improve healthcare quality, patient safety, and operational excellence.',
      Icon: Stethoscope,
      href: '/services',
      cta: 'Learn more',
      background: (
        <div className="absolute inset-0  bg-white" />
      ),
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      id: 3,
      name: 'Digital Health Solutions',
      description: 'Modern technology solutions for healthcare management, certification tracking, and digital transformation.',
      Icon: Smartphone,
      img: '/images/service2.png',
      href: '/services',
      cta: 'Learn more',
      background: (
        <div className="absolute inset-0  bg-white" />
      ),
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
    {
      id: 4,
      name: 'Training & Development',
      description: 'Comprehensive training programs for healthcare professionals to enhance skills and knowledge.',
      Icon: BookOpen,
      href: '/services',
      cta: 'Learn more',
      background: (
        <div className="absolute inset-0  bg-white" />
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      id: 5,
      name: 'Staff Management & Support',
      description: 'Comprehensive staff management solutions to optimize healthcare workforce efficiency and satisfaction.',
      Icon: Users,
      img: '/images/service3.png',
      img2: '/images/service4.png',
      href: '/services',
      cta: 'Learn more',
      background: (
        <div className="absolute inset-0  bg-white" />
      ),
      className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4',
    },
  ];

  return (
    <section className="py-20">
      <div className="container-max px-4 sm:px-12 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block mb-2 mx-auto rounded-full border border-sky-500 bg-white px-4 py-1 text-sm text-sky-700 shadow-lg shadow-blue-200/50">
            Our Services •
          </span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#202020' }}
            variants={textReveal}
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#202020' }}
            variants={textReveal}
          >
            We provide end-to-end solutions for healthcare organizations seeking quality improvement,
            certification, and operational excellence.
          </motion.p>
        </motion.div>

        {/* Services Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BentoGrid className="grid grid-rows-5 mx-auto lg:grid-rows-3 p-4  rounded-2xl gap-5 lg:gap-3 bg-gradient-to-br from-blue-50/50 to-blue-100/50 ">
            {services.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
