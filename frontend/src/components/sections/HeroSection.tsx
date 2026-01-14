import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';
import AnimatedButton from '../ui/animated-button';
import AnimatedIcon from '../ui/animated-icon';
// logo image imported in Navbar; not used here


gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {



  return (
    <section className="pt-32 lg:pt-0 mt-4 hero-bg h-dvh relative flex flex-col justify-center items-center mx-3 md:mx-8 lg:mx-16 bg-oklch-bg-primary border border-oklch-border-primary">
      {/* {header content} */}
      {/* <div className="w-full h-full bg-pink-900 flex   "></div> */}
      {/* Hero Content Container */}
      <div className="relative z-30 w-full px-4 sm:pl-8 lg:pl-16 xl:px-20 parallax-text">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col gap-y-20 lg:flex-row w-full justify-between items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8 max-w-xl 2xl:max-w-3xl ">
              <h1
                className="text-5xl lg:text-6xl flex flex-wrap xl:text-7xl font-black leading-tight tracking-tight text-oklch-text-dark"
                style={{ fontFamily: 'serif' }}
              >
                <span className="">Your Quality Partner in</span>
                <span className="text-oklch-accent-bright">{" "} Healthcare Transformation</span>
              </h1>

              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl text-oklch-text-dark font-medium"
              >
                QualiPro Healthcare Solutions provides comprehensive NABH certification,
                quality consulting, and digital health solutions to empower healthcare
                organizations across India.
              </p>

              <div className="flex w-max flex-col sm:flex-row gap-4 ">
                <Link
                  to="/services"
                  className="text-oklch-white-pure px-8 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-2 bg-oklch-primary-dark hover:bg-oklch-primary-darker group/btn transition-all duration-300"
                  onClick={(e) => {
                    // Prevent default only if we want to handle it with animation
                    // For now, let the link work normally
                  }}
                >
                  Our Services
                  <ArrowRight size={20} className='group-hover/btn:translate-x-2 duration-300 transition-all group-hover/btn:-rotate-45 group-hover/btn:scale-110' />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-oklch-primary-base border-2 border-oklch-primary-base hover:bg-oklch-secondary-light transition-all duration-300 transform hover:scale-105"
                >
                  Get Consultation
                  <Shield size={20} />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-oklch-border-light">
                <div className="text-center">
                  <AnimatedIcon
                    icon={<Award className="text-oklch-primary-medium" size={20} />}
                    triggerOnScroll={true}
                    size="md"
                    className="bg-oklch-secondary-light rounded-full mb-2"
                  />
                  <div className="text-lg sm:text-2xl font-bold text-oklch-text-dark">500+</div>
                  <div className="text-xs sm:text-sm text-oklch-text-dark">Certified Hospitals</div>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <AnimatedIcon
                    icon={<Shield className="text-oklch-accent-bright" size={20} />}
                    triggerOnScroll={true}
                    size="md"
                    className="bg-oklch-accent-light border border-oklch-accent-medium rounded-full mb-2"
                  />
                  <div className="text-lg sm:text-2xl font-bold text-oklch-text-dark">99%</div>
                  <div className="text-xs sm:text-sm text-oklch-text-dark">Success Rate</div>
                </div>
                <div className="text-center">
                  <AnimatedIcon
                    icon={<Users className="text-oklch-primary-medium" size={20} />}
                    triggerOnScroll={true}
                    size="md"
                    className="bg-oklch-secondary-light rounded-full mb-2"
                  />
                  <div className="text-lg sm:text-2xl font-bold text-oklch-text-dark">10+</div>
                  <div className="text-xs sm:text-sm text-oklch-text-dark">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Awesome Floating Cards */}
            <div className="relative lg:flex justify-center items-center">
              <div className="floating-cards-container flex gap-x-14 min-[850px]:gap-x-20 flex-col md:flex-row lg:flex-col gap-y-20 mb-10 relative z-10 space-y-8">

                {/* Card 1: NABH Achievement Card */}
                <div className="z-10 floating-card-1 top-10 relative backdrop-blur-xl rounded-3xl shadow-2xl h-max p-8 w-80 group hover:scale-105 transition-all duration-500 hover:shadow-3xl bg-oklch-bg-light border border-oklch-white-pure">
                  <div className="relative">
                    <div className="absolute -top-2 -left-4 w-3 h-3 rounded-full animate-pulse bg-oklch-primary-bright"></div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 bg-gradient-to-br from-oklch-primary-base to-oklch-primary-darker" >
                        <Award className="text-oklch-white-pure" size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-oklch-text-dark-alt">NABH Certified</h4>
                        <p className="text-sm text-oklch-text-gray">Excellence Achieved</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-oklch-text-gray">Progress</span>
                        <span className="font-semibold text-oklch-primary-base">100%</span>
                      </div>
                      <div className="w-full rounded-full h-2 bg-oklch-text-light-gray">
                        <div className="h-2 rounded-full animate-pulse border border-oklch-primary-bright w-full bg-gradient-to-r from-oklch-white-pure to-oklch-primary-bright" ></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg bg-oklch-white-pure border border-oklch-primary-base">
                      <span className="text-xs font-bold text-oklch-primary-base">✓</span>
                    </div>
                  </div>
                  <div className="absolute -top-10 sm:-top-5 -left-5 sm:-left-20 floating-card-1">
                    <div className="text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl border-2 border-white animate-bounce bg-oklch-primary-dark">
                      ✨ Trusted Partner
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-2 sm:-bottom-8 sm:-right-20 floating-card-3">
                    <div className="text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl border-2 border-white animate-pulse bg-oklch-primary-deepest">
                      🎯 Quality First
                    </div>
                  </div>
                </div>

                {/* Card 2: Live Stats Card */}
                <div className="floating-card-2 relative backdrop-blur-lg rounded-2xl shadow-xl p-8 w-72 group hover:scale-105 transition-all duration-500 bg-oklch-bg-light-blue border border-oklch-border-primary">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-6">
                      <div className="text-center">
                        <div className="rounded-full mx-auto mb-2 flex items-center justify-center group-hover:animate-bounce w-12 h-12 bg-oklch-primary-base">
                          <Users className="text-white" size={24} />
                        </div>
                        <div className="text-2xl font-bold animate-pulse text-oklch-text-dark-alt">500+</div>
                        <div className="text-xs text-oklch-text-gray">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="rounded-full mx-auto mb-2 flex items-center justify-center group-hover:animate-bounce w-12 h-12 border border-oklch-primary-base">
                          <Shield size={24} className="text-oklch-primary-base" />
                        </div>
                        <div className="text-2xl font-bold animate-pulse text-oklch-text-dark-alt">99%</div>
                        <div className="text-xs text-oklch-text-gray">Success</div>
                      </div>
                    </div>
                    <div className="text-xs backdrop-blur-3xl backdrop-filter font-medium rounded-full px-3 py-1 bg-oklch-white-pure border border-oklch-border-primary text-oklch-text-dark-alt">
                      🔥 Live metrics updating...
                    </div>
                  </div>
                  <div className="absolute -bottom-8 right-0 floating-card-2">
                    <div className="text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl border-2 border-white animate-pulse bg-oklch-primary-dark">
                      🏆 Expert Team
                    </div>
                  </div>

                </div>

                {/* Card 3: Interactive Process Card */}
                {/* <div className="floating-card-3  bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200/50 w-80 group hover:scale-105 transition-all duration-500">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Certification Journey</h4>
                  <div className="space-y-3">
                    {[
                      { step: 1, title: "Assessment", status: "completed", color: "sky" },
                      { step: 2, title: "Planning", status: "completed", color: "sky" },
                      { step: 3, title: "Implementation", status: "progress", color: "blue" },
                      { step: 4, title: "Certification", status: "pending", color: "gray" }
                    ].map((item, index) => (
                      <div key={index} className=" flex items-center space-x-3 group/item hover:scale-105 transition-all duration-300">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${item.status === 'completed' ? 'bg-sky-500' :
                          item.status === 'progress' ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                          }`}>
                          {item.status === 'completed' ? '✓' : item.step}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${item.status === 'completed' ? 'text-sky-700' :
                            item.status === 'progress' ? 'text-blue-700' : 'text-gray-500'
                            }`}>
                            {item.title}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                            <div
                              className={`h-1 rounded-full transition-all duration-1000 ${item.status === 'completed' ? 'bg-sky-500 w-full' :
                                item.status === 'progress' ? 'bg-blue-500 w-3/4 animate-pulse' : 'bg-gray-300 w-0'
                                }`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Floating Achievement Badges - Positioned relative to cards */}






              </div>

              {/* Enhanced Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-2xl animate-pulse bg-oklch-secondary-lighter"></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-xl animate-pulse bg-oklch-secondary-lightest" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-72 right-16 w-20 h-20 rounded-full blur-lg animate-pulse bg-oklch-purple-light" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Mobile Floating Cards - Only visible on mobile */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
