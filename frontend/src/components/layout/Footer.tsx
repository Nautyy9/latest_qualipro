import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from "../../../../design_assets/qualipro/logo.webp"

const linksClass = "text-gray-500 border-b-2 border-transparent hover:text-blue-500  hover:border-blue-500 transition-colors duratrion-300";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#202020] border-t">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src={logo} alt="qualipro" className="text-gray-900 font-bold text-xl"></img>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">QualiPro</span>
                <span className="text-sm text-gray-500">Healthcare Solutions</span>
              </div>
            </div>
            <p className="text-[#202020] text-sm leading-relaxed">
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
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={linksClass}>Home</Link></li>
              <li><Link to="/about" className={linksClass}>About Us</Link></li>
              <li><Link to="/services" className={linksClass}>Services</Link></li>
              <li><Link to="/contact" className={linksClass}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-500 border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">NABH Certification</Link></li>
              <li><Link to="/services" className="text-gray-500 border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">Quality Consulting</Link></li>
              <li><Link to="/services" className="text-gray-500 border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">Digital Health Solutions</Link></li>
              <li><span className="text-gray-500 border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">Training & Development</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-600" />
                <span className="text-gray-500 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-600" />
                <span className="text-gray-500 text-sm">info@qualipro.healthcare</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-600 mt-1" />
                <span className="text-gray-500 text-sm">
                  123 Healthcare Plaza,<br />
                  Medical District, Mumbai<br />
                  Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} QualiPro Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
