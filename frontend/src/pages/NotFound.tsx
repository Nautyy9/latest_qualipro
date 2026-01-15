import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-oklch-primary-bright select-none">
              404
            </div>
            <div className="relative -mt-8">
              <div className="w-32 h-32 mx-auto bg-oklch-primary-dark rounded-full flex items-center justify-center">
                <HelpCircle className="text-oklch-white-pure" size={64} />
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 left-1/2 transform -translate-x-12 w-4 h-4 bg-oklch-accent-bright rounded-full animate-bounce animation-delay-200"></div>
              <div className="absolute top-8 right-1/2 transform translate-x-12 w-3 h-3 bg-oklch-primary-bright rounded-full animate-bounce animation-delay-400"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-8 w-2 h-2 bg-oklch-primary-base rounded-full animate-bounce animation-delay-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-oklch-neutral-900">
              It seems like this page has taken a sick day.
            </h1>
            <p className="text-lg text-oklch-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Just like we help healthcare organizations find their way to certification, 
              let us help you find your way back to the right page.
            </p>
            <p className="text-oklch-neutral-600">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Don't worry - our navigation is here to help!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              to="/services"
              className="card text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-oklch-secondary-light rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-oklch-primary-dark transition-colors duration-300">
                <Search className="text-oklch-primary-dark group-hover:text-oklch-pure-white" size={24} />
              </div>
              <h3 className="font-semibold text-oklch-neutral-900 mb-2">Our Services</h3>
              <p className="text-oklch-neutral-600 text-sm">
                Explore our comprehensive healthcare solutions
              </p>
            </Link>

            <Link
              to="/about"
              className="card text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-oklch-accent-light rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-oklch-accent-bright transition-colors duration-300">
                <HelpCircle className="text-oklch-accent-medium group-hover:text-oklch-pure-white" size={24} />
              </div>
              <h3 className="font-semibold text-oklch-neutral-900 mb-2">About Us</h3>
              <p className="text-oklch-neutral-600 text-sm">
                Learn more about QualiPro and our mission
              </p>
            </Link>

            <Link
              to="/contact"
              className="card text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-oklch-secondary-lightest rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-oklch-sky-base transition-colors duration-300">
                <HelpCircle className="text-oklch-sky-dark group-hover:text-oklch-pure-white" size={24} />
              </div>
              <h3 className="font-semibold text-oklch-neutral-900 mb-2">Contact Us</h3>
              <p className="text-oklch-neutral-600 text-sm">
                Get in touch for consultation and support
              </p>
            </Link>
          </div>

          {/* Healthcare Theme Message */}
          <div className="mt-12 p-6 bg-oklch-white-pure/80 backdrop-blur-sm rounded-xl border border-oklch-secondary-lighter">
            <p className="text-oklch-neutral-700 italic">
              "Just like in healthcare, every problem has a solution. Let's find yours together."
            </p>
            <div className="text-sm text-oklch-neutral-500 mt-2">- QualiPro Healthcare Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;