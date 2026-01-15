import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MotionCard from "../ui/motion-card";
import { CardContent } from "../ui/card";
import { Star, Quote } from 'lucide-react';
import { textReveal } from '../../utils/motion';
import { starItem, starsContainer } from '../../utils/advanced-motion';
import AnimatedIcon from '../ui/animated-icon';

const TestimonialsSection: React.FC = () => {
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  const testimonials = [
    {
      id: 0,
      name: 'Trusted By Many',
      position: '',
      organization: '',
      image: '/images/happy_customer.webp',
      rating: 0,
      testimonial: 'Join 500+ leading healthcare organizations that trust QualiPro to elevate their quality standards. Our clients—from Medical Directors to Quality Heads—share their transformative journeys. Discover authentic success stories, proven methodologies, and measurable results that have reshaped India\'s healthcare quality landscape.',
      shortTestimonial: 'Trusted by 500+ healthcare organizations for quality excellence.',
      location: '',
      isHeroCard: true
    },
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      position: 'Medical Director',
      organization: 'Apollo Healthcare',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: "QualiPro's expertise in NABH certification was exceptional. Their systematic approach and dedicated support team helped us achieve accreditation within 8 months. Highly recommended for healthcare organizations seeking quality excellence.",
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      position: 'CEO',
      organization: 'MedCare Hospitals',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: "The digital health solutions provided by QualiPro transformed our documentation process. Their team's professionalism and technical expertise made the entire certification journey smooth and efficient.",
      location: 'Delhi, NCR'
    },
    {
      id: 3,
      name: 'Dr. Anita Patel',
      position: 'Quality Head',
      organization: 'Fortis Healthcare',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Working with QualiPro was a game-changer for our quality management system. Their consultants are knowledgeable, responsive, and truly committed to client success. We achieved NABH accreditation with flying colors.',
      location: 'Bangalore, Karnataka'
    }
  ];

  return (
    <section className="section-padding bg-oklch-white-pure">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block  mb-2 mx-auto rounded-full border border-oklch-sky-base bg-oklch-white-pure  px-4 py-1 text-sm text-oklch-sky-dark shadow-lg shadow-oklch-secondary-lighter/50">Testimonials •</span>
          <h2 className="text-3xl md:text-4xl font-bold text-oklch-text-dark">
            What Our <span className="text-oklch-accent-bright">Clients Say</span>
          </h2>
          <p className="text-xl text-oklch-text-gray max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what healthcare leaders across India
            say about their experience with QualiPro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            testimonial.isHeroCard ? (
              <MotionCard
                key={testimonial.id}
                className="w-full h-full js-testimonial rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-500 col-span-1 md:row-span-2 md:col-span-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                onMouseEnter={() => setIsHeroHovered(true)}
                onMouseLeave={() => setIsHeroHovered(false)}
              >
                {/* Hero Card with Image and Gradient Overlay */}
                <div className="relative w-full h-64 md:h-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay on entire image */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Left side gradient overlay - darkens on hover with Framer Motion */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r"
                    animate={{
                      backgroundImage: isHeroHovered
                        ? 'linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.75), rgba(30, 58, 138, 0.4))'
                        : 'linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.4), rgba(30, 58, 138, 0))'
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />

                  {/* Text overlay - positioned at center covering full width */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    {/* Short Text - visible by default */}
                    {!isHeroHovered && (
                      <motion.p
                        className="text-sm md:text-base text-white leading-relaxed font-medium text-center max-w-lg"
                        variants={textReveal}
                        initial="hidden"
                        animate="show"
                      >
                        {testimonial.shortTestimonial}
                      </motion.p>
                    )}

                    {/* Long Text - visible on hover with text reveal animation */}
                    {isHeroHovered && (
                      <motion.p
                        className="text-sm md:text-base text-white leading-relaxed font-medium text-center max-w-lg"
                        variants={textReveal}
                        initial="hidden"
                        animate="show"
                      >
                        {testimonial.testimonial}
                      </motion.p>
                    )}
                  </div>

                  {/* Title - positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-oklch-pure-white text-center">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </MotionCard>
            ) : (
              <MotionCard key={testimonial.id} className="w-full border-oklch-border-primary/50  h-full js-testimonial  rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-500" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <CardContent className="p-8  h-full flex flex-col justify-between relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4">
                    <AnimatedIcon
                      icon={<Quote className="text-oklch-primary-dark" size={24} />}
                      triggerOnScroll={true}
                      size="lg"
                      centered={false}
                      className="bg-oklch-secondary-lighter/50 rounded-full group-hover:bg-oklch-secondary-light/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Rating */}
                  <motion.div
                    className="flex items-center space-x-1 mb-4"
                    variants={starsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div key={i} variants={starItem}>
                        <Star size={16} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <blockquote className="text-oklch-text-gray leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-start space-x-4">
                    <AnimatedIcon
                      icon={
                        <span className="text-oklch-pure-white font-bold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      }
                      triggerOnScroll={true}
                      size="md"
                      centered={false}
                      className="bg-oklch-primary-dark rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-oklch-text-dark">{testimonial.name}</div>
                      <div className="text-sm text-oklch-text-gray">{testimonial.position}</div>
                      <div className="text-sm text-oklch-accent-bright font-medium">{testimonial.organization}</div>
                      <div className="text-xs text-oklch-text-gray mt-1">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            )
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-sgray rounded-2xl mt-20 mx-auto max-w-6xl p-8  text-oklch-text-dark text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-oklch-primary-base">500+</div>
              <div className="">Happy Clients</div>
            </div>
            <div className="space-y-3">
              <motion.div
                className="flex justify-center space-x-1"
                variants={starsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} variants={starItem}>
                    <Star size={24} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-lg font-semibold">4.9/5 Client Rating</div>
              <div className=" text-sm">Based on 500+ reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-oklch-primary-base">99%</div>
              <div className="">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
