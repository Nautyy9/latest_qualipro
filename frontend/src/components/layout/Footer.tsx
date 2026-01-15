import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from "../../../../design_assets/qualipro/logo.webp"

const linksClass = "text-oklch-text-gray border-b-2 border-transparent hover:text-oklch-primary-base hover:border-oklch-primary-base transition-colors duratrion-300";

const Footer: React.FC = () => {
  return (
    <footer className="bg-oklch-white-pure text-oklch-text-dark border-t border-oklch-border-light">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <img src={logo} alt="qualipro" className="text-oklch-text-dark font-bold text-xl"></img>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-oklch-text-dark">QualiPro</span>
                <span className="text-sm text-oklch-text-gray">Healthcare Solutions</span>
              </div>
            </div>
            <p className="text-oklch-text-dark text-sm leading-relaxed">
              Your trusted partner for healthcare certifications, quality consulting,
              and digital health solutions. Empowering healthcare excellence.
            </p>
            <div className="flex items-end space-x-4 space-y-2">
              <a href="#" className={linksClass}>
                <Facebook size={20} />
              </a>
              <a href="#" className={linksClass}>
                <Twitter size={20} />
              </a>
              <a href="#" className={linksClass}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={linksClass}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-oklch-text-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={linksClass}>Home</Link></li>
              <li><Link to="/about" className={linksClass}>About Us</Link></li>
              <li><Link to="/services" className={linksClass}>Services</Link></li>
              <li><Link to="/contact" className={linksClass}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-oklch-text-dark">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-oklch-text-gray border-b-2 border-transparent hover:border-b-2 hover:border-oklch-primary-base hover:text-oklch-primary-base transition-colors duration-300">NABH Certification</Link></li>
              <li><Link to="/services" className="text-oklch-text-gray border-b-2 border-transparent hover:border-b-2 hover:border-oklch-primary-base hover:text-oklch-primary-base transition-colors duration-300">Quality Consulting</Link></li>
              <li><Link to="/services" className="text-oklch-text-gray border-b-2 border-transparent hover:border-b-2 hover:border-oklch-primary-base hover:text-oklch-primary-base transition-colors duration-300">Digital Health Solutions</Link></li>
              <li><span className="text-oklch-text-gray border-b-2 border-transparent hover:border-b-2 hover:border-oklch-primary-base hover:text-oklch-primary-base transition-colors duration-300">Training & Development</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-oklch-text-dark">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-oklch-primary-base" />
                <span className="text-oklch-text-gray text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-oklch-primary-base" />
                <span className="text-oklch-text-gray text-sm">info@qualipro.healthcare</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-oklch-primary-base mt-1" />
                <span className="text-oklch-text-gray text-sm">
                  123 Healthcare Plaza,<br />
                  Medical District, Mumbai<br />
                  Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-oklch-border-light mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-oklch-text-gray text-sm">
            © {new Date().getFullYear()} QualiPro Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
