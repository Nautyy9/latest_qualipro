import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  botField?: string;
};

type ErrorState = {
  name: boolean;
  email: boolean;
  phone: boolean;
  subject: boolean;
  message: boolean;
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    botField: '',
  });
  const [errors, setErrors] = useState<ErrorState>({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const validateName = (v: string) => v.trim().length >= 2;
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validatePhone = (v: string) => /^[\+]?[\d\s\-\(\)]{10,}$/.test(v.replace(/\s/g, ''));
  const validateSubject = (v: string) => v.trim().length >= 3;
  const validateMessage = (v: string) => v.trim().length >= 10;

  const handleBlur = (field: keyof ErrorState, value: string) => {
    let ok = true;
    switch (field) {
      case 'name': ok = validateName(value); break;
      case 'email': ok = validateEmail(value); break;
      case 'phone': ok = validatePhone(value); break;
      case 'subject': ok = validateSubject(value); break;
      case 'message': ok = validateMessage(value); break;
    }
    setErrors((prev) => ({ ...prev, [field]: !ok }));
  };

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const nextErrors: ErrorState = {
      name: !validateName(form.name),
      email: !validateEmail(form.email),
      phone: !validatePhone(form.phone),
      subject: !validateSubject(form.subject),
      message: !validateMessage(form.message),
    };
    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean) || !!form?.botField;
    if (hasError) return;

    console.log('Contact form submit', form);
    setSubmitted(true);

    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', subject: '', message: '', botField: '' });
      setErrors({ name: false, email: false, phone: false, subject: false, message: false });
      setSubmitted(false);
    }, 3000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'info@qualipro.healthcare', delay: 0 },
    { icon: Phone, label: 'Call', value: '+91 98765 43210', delay: 0.1 },
    { icon: MapPin, label: 'Location', value: '123 Healthcare Plaza, Mumbai', delay: 0.2 },
  ];

  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-oklch-white-pure via-oklch-sky-base/5 to-oklch-white-pure" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-oklch-secondary-lighter/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-oklch-sky-base/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-visible">
        <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-b from-oklch-bg-light-blue via-oklch-bg-light-blue/60 to-transparent -z-10 pointer-events-none" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative soft blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-oklch-bg-light-blue/60 blur-2xl" />
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-block mb-4 rounded-full border border-oklch-sky-base px-4 py-1 text-sm text-oklch-sky-dark shadow-oklch-sky-base/50 shadow-md">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-oklch-primary-dark">Contact Us</h1>
            <p className="text-lg md:text-xl text-oklch-text-gray max-w-3xl mx-auto">
              We're here to help. Reach out to us for any questions or inquiries about our services.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-oklch-sky-base to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Contact Methods with Interactive Cards */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32 space-y-6">
                <h2 className="text-3xl font-bold text-oklch-primary-dark mb-8">Reach Out</h2>

                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: method.delay }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-oklch-white-pure border border-oklch-secondary-light/50 p-6 hover:border-oklch-secondary-light transition-all duration-300 cursor-pointer">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-oklch-primary-base/[0.01] to-oklch-sky-base/[0.01]  group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div
                              className="w-12 h-12 rounded-xl bg-oklch-primary-base  flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Icon className="w-6 h-6 text-oklch-white-pure" />
                            </motion.div>
                            <h3 className="font-semibold text-oklch-text-dark text-lg">{method.label}</h3>
                          </div>
                          <p className="text-oklch-text-gray group-hover:text-oklch-primary-dark transition-colors duration-300">{method.value}</p>
                        </div>

                        {/* Hover indicator */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-oklch-primary-base to-oklch-sky-base w-0 group-hover:w-full transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Fun fact/stat card */}
                <motion.div
                  className="mt-8 p-4 rounded-2xl  bg-gradient-to-tr from-oklch-primary-base/5 to-oklch-sky-base/5  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="*:text-oklch-primary-dark bg-oklch-white-pure shadow-lg rounded-2xl p-6  hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                    <p className="text-sm  opacity-90 mb-2">Average Response Time</p>
                    <p className="text-4xl font-black">24 Hours</p>
                    <p className="text-sm opacity-75 mt-3 text-oklch-text-light-gray">We prioritize every inquiry</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form with Interactive Elements */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                onMouseMove={handleMouseMove}
                className="relative rounded-3xl overflow-hidden bg-oklch-white-pure border border-oklch-secondary-light/50 p-8 md:p-12 shadow-xl"
              >
                {/* Gradient light effect following cursor (desktop only) */}
                <motion.div
                  className="hidden md:block absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-oklch-primary-base/5 to-oklch-sky-base/5 rounded-full blur-3xl pointer-events-none"
                    style={{
                      left: `${mousePosition.x}px`,
                      top: `${mousePosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>

                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="mb-10">
                    <motion.h2
                      className="text-4xl font-black text-oklch-primary-dark mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      Send us a Message
                    </motion.h2>
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-12 bg-gradient-to-r from-oklch-primary-base to-oklch-sky-base rounded-full" />
                      <p className="text-oklch-text-gray">We'll respond promptly to your inquiry</p>
                    </div>
                  </div>

                  {/* Success State */}
                  {submitted && (
                    <motion.div
                      className="mb-8 p-6 bg-gradient-to-r from-oklch-secondary-light to-oklch-secondary-lighter border border-oklch-secondary-lighter rounded-2xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full bg-oklch-secondary-light flex items-center justify-center">
                          <svg className="w-4 h-4 text-oklch-white-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="font-bold text-green-700">Message Sent Successfully!</p>
                      </div>
                      <p className="text-green-600 text-sm">Thanks for reaching out. We'll be in touch soon.</p>
                    </motion.div>
                  )}

                  {/* Form */}
                  <form onSubmit={onSubmit} noValidate className="space-y-6">
                    <input type="text" name="botField" autoComplete="off" tabIndex={-1} value={form.botField} onChange={(e) => setForm({ ...form, botField: e.target.value })} className="hidden" aria-hidden="true" />

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-bold text-oklch-text-dark mb-3">Full Name *</label>
                        <Input
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onBlur={(e) => handleBlur('name', e.target.value)}
                          className={cn(
                            'h-13 rounded-xl border-2  placeholder:text-oklch-text-gray transition-all',
                            errors.name ? 'border-red-400 bg-red-50' : 'border-oklch-secondary-light focus:border-oklch-primary-base focus:bg-oklch-white-pure'
                          )}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">Valid name required</p>}
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                      >
                        <label className="block text-sm font-bold text-oklch-text-dark mb-3">Phone Number *</label>
                        <Input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          onBlur={(e) => handleBlur('phone', e.target.value)}
                          className={cn(
                            'h-13 rounded-xl border-2  placeholder:text-oklch-text-gray transition-all',
                            errors.phone ? 'border-red-400 bg-red-50' : 'border-oklch-secondary-light focus:border-oklch-primary-base focus:bg-oklch-white-pure'
                          )}
                          required
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">Valid phone required</p>}
                      </motion.div>
                    </div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-bold text-oklch-text-dark mb-3">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className={cn(
                          'h-13 rounded-xl border-2 w-full  placeholder:text-oklch-text-gray transition-all',
                          errors.email ? 'border-red-400 bg-red-50' : 'border-oklch-secondary-light focus:border-oklch-primary-base focus:bg-oklch-white-pure'
                        )}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">Valid email required</p>}
                    </motion.div>

                    {/* Subject */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-bold text-oklch-text-dark mb-3">Subject *</label>
                      <Input
                        placeholder="What is this about?"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        onBlur={(e) => handleBlur('subject', e.target.value)}
                        className={cn(
                          'h-13 rounded-xl border-2 w-full  placeholder:text-oklch-text-gray transition-all',
                          errors.subject ? 'border-red-400 bg-red-50' : 'border-oklch-secondary-light focus:border-oklch-primary-base focus:bg-oklch-white-pure'
                        )}
                        required
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-2 font-medium">Subject required</p>}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-bold text-oklch-text-dark mb-3">Your Message *</label>
                      <Textarea
                        rows={6}
                        placeholder="Tell us about your inquiry, needs, or any questions you have..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onBlur={(e) => handleBlur('message', e.target.value)}
                        className={cn(
                          'rounded-xl border-2 w-full  placeholder:text-oklch-text-gray resize-none transition-all',
                          errors.message ? 'border-red-400 bg-red-50' : 'border-oklch-secondary-light focus:border-oklch-primary-base focus:bg-oklch-white-pure'
                        )}
                        required
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-2 font-medium">Message must be at least 10 characters</p>}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                      className="pt-4"
                    >
                      <Button
                        type="submit"
                        disabled={submitted}
                        className="w-full md:w-auto h-13 px-8 rounded-xl font-bold text-base *:text-white border-transparent bg-oklch-primary-base hover:from-oklch-primary-dark hover:to-sky-700 shadow-lg hover:shadow-xl transition-all group"
                      >
                        <span className="flex items-center gap-2">
                          {submitted ? 'Sending...' : 'Send Message'}
                          <motion.span
                            animate={{ x: submitted ? 0 : [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <Send className="w-5 h-5 text-white" />
                          </motion.span>
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section at Bottom */}
      <section className="py-16 md:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-oklch-text-dark mb-4">Prefer a Different Channel?</h2>
            <p className="text-oklch-text-gray mb-8">No problem! Reach out through any of our contact methods. We're always happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="rounded-xl h-12 px-8 border-2 border-oklch-secondary-light hover:border-oklch-secondary-light hover:bg-oklch-secondary-light/50">Schedule a Call</Button>
              <Button className="rounded-xl h-12 px-8 border-oklch-white-pure bg-gradient-to-r from-oklch-primary-base to-oklch-sky-base hover:from-oklch-primary-dark hover:to-oklch-sky-dark">Explore Services <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
