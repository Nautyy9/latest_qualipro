import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, Mail, MenuIcon, Home, Recycle, Briefcase, Check } from 'lucide-react';
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { gsap } from 'gsap';
import logo from "../../../../design_assets/qualipro/logo.webp"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // md->lg header center animation states (ported from Kabadi Header)
  const [showIntro, setShowIntro] = useState(true);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [pinnedOpen, setPinnedOpen] = useState(false);
  // Mobile drawer interactions
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth <= 500) {
        setScrolled(currentScrollY > 50);
      } else {
        setScrolled(currentScrollY > 30);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animation for navbar on mount
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  // Intro curtain then reveal hamburger (md to lg only)
  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(t);
  }, []);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [isOpen]);

  // Hide hover/pinned panel on scroll if open
  useEffect(() => {
    const onScroll = () => {
      if (hoverOpen || pinnedOpen) {
        setHoverOpen(false);
        setPinnedOpen(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hoverOpen, pinnedOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  function checkPath(name: string) {
    if (window.location.pathname === '/' + name.toLocaleLowerCase() || (window.location.pathname === '/' && name === 'Home')) return true
    else return false
  }
  return (
    <>


      {/* Main Navbar */}
      <nav
        ref={navRef}
        className={` shrinking-header fixed top-8 mx-auto left-0 right-0 transition-transform duration-300 ease-in-out z-50 flex items-center w-[calc(100vw_-_40px)] sm:w-[calc(100vw_-_80px)] min-[1100px]:w-[calc(100vw_-_144px)] rounded-full border border-oklch-white-pure ${scrolled ? 'w-[calc(100dvw_-_12px)] fixed top-2 lg:px-0 xl:px-20 2xl:px-40' : ''}`}
      >
        <div className={`flex md:px-5 lg:px-10 2xl:px-20 w-full ${scrolled ? 'px-0' : 'px-2'}`}>
          <div className={`${isOpen ? "hidden" : "flex"} justify-between items-center w-full rounded-full  py-3 sm:py-4 px-3 sm:px-5 xl:px-10 transition-all ${scrolled ? 'bg-oklch-white-pure/50 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'}`} >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-3">
              <div className={`${scrolled ? 'w-10 h-10' : 'w-10 h-10'} rounded-lg flex items-center justify-center transition-all duration-600`}>
                <img src={logo} alt="qualipro" className='object-cover transition transform-gpu duration-500 ease-out' />
              </div>
              <div className=" flex flex-col">
                <span className={`text-lg font-serif logo-text font-bold text-gradient transition-tranform duration-500 ease-out`}>QualiPro</span>
                <span className={`text-sm transition-opacity duration-500 ease-out text-oklch-text-gray`}>Healthcare Solutions</span>
              </div>
            </Link>

            {/* Center interactive area (md only): intro links -> curtains -> two-bar hamburger */}
            <div className="hidden md:flex lg:hidden  items-center">
              {showIntro ? (
                <div className="relative">
                  <div className="flex items-center gap-x-4 rounded-full  py-4   h-full w-full backdrop-blur-md">
                    {navLinks.map((l) => (
                      <Link key={l.name} to={l.path}>
                        <span className="rounded-full px-3 py-1 text-sm transition-colors text-oklch-text-gray hover:text-oklch-primary-base">{l.name}</span>
                      </Link>
                    ))}
                  </div>
                  {/* Curtains */}
                  <div className="pointer-events-none absolute inset-0 flex">
                    <div className="w-1/2 h-full rounded-l-full backdrop-blur-md animate-slide-in-left bg-gradient-to-r from-oklch-white-pure/60 to-oklch-white-pure/40" ></div>
                    <div className="w-1/2 h-full rounded-r-full backdrop-blur-md animate-slide-in-right  bg-gradient-to-l from-oklch-white-pure/60 to-oklch-white-pure/40" ></div>
                  </div>
                </div>
              ) : (
                <div
                  className="group relative"
                  onMouseEnter={() => { setHoverOpen(true); setPinnedOpen(true); }}
                  onMouseLeave={() => { setHoverOpen(false); }}
                >
                  <button
                    className="rounded-full h-12 w-12 transition animate-fade-in-slow hover:text-white hover:bg-oklch-primary-base group/btn"
                    aria-label="Open navigation"

                  >
                    <div className="flex  flex-col items-center justify-center gap-1.5 ">
                      <span className="block h-[2px] w-7 bg-current group-hover/btn:text-white transition-colors duration-300  rounded-full"></span>
                      <span className="block group-hover/btn:text-white transition-colors duration-300  h-[2px] w-5 bg-current rounded-full"></span>
                    </div>
                  </button>

                </div>
              )}

            </div>

            {/* Desktop Navigation (visible on lg+ only) */}
            <div className={`hidden lg:flex items-center ${scrolled ? ' space-x-6' : 'space-x-8 xl:space-x-16 justify-between'} transition-all duration-600`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${scrolled ? '' : 'text-base'} font-medium transition-all duration-300 relative hover:text-oklch-primary-base ${isActive(link.path) ? 'text-oklch-primary-base' : 'font-medium text-gray-700'}`}

                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-oklch-primary-base"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* {links of the header} */}
            <div className="md:flex gap-x-2 hidden xl:gap-x-4">

              <Link
                to="/contact"
                className={`${scrolled ? 'px-6 py-3 ' : 'px-6 xl:px-8 py-3'} rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-white bg-oklch-primary-base hover:bg-oklch-primary-deepest flex items-center`}

              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className={`${scrolled ? 'px-6 py-3 ' : 'px-6 xl:px-8 py-3'} hidden lg:flex rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-oklch-primary-base text-oklch-primary-base hover:bg-oklch-secondary-light`}
              >
                Reach Out
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden h-11 w-11  transition-all duration-300 text-oklch-text-dark hover:bg-oklch-primary-base hover:text-oklch-white-pure rounded-full`}
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon className="!h-6 !w-6" />
            </Button>
          </div>


          {/* md-lg absolute menu dropdown , its outside the div because of the backdrop overlay issue */}
          {(hoverOpen || pinnedOpen) && (
            <div className={`hidden md:block lg:hidden absolute left-1/2 -translate-x-1/2 top-full  mt-2 w-[70vw] max-w-xl rounded-2xl p-3 shadow-lg text-oklch-text-dark  bg-oklch-white-pure/50 backdrop-blur-md`}
            >
              <div className="flex items-center justify-evenly">
                {navLinks.map((l, idx) => (
                  <div key={l.name} className="animate-drop-in" style={{ animationDelay: `${idx * 70}ms` }}>
                    <Link to={l.path}>
                      <span className={`block w-full text-center rounded-xl px-3 py-2 transition-colors text-oklch-text-dark-alt hover:text-oklch-primary-medium active: ${checkPath(l.name) ? 'text-oklch-primary-dark ' : 'text-oklch-text-dark'}`}>{l.name}
                        {
                          checkPath(l.name) ? (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full h-0.5  bg-oklch-primary-medium w-5/6 "></span>
                          ) : null}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Enhanced Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="md:hidden">
              <SheetContent className="p-0 border-0 fixed inset-y-0 right-0 z-[60] w-[92vw] max-w-sm bg-transparent shadow-none">
                <div
                  className="h-full w-full shadow-2xl flex flex-col bg-oklch-white-pure text-oklch-text-dark"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => {
                    const t = e.touches[0];
                    setTouchStartX(t.clientX);
                    setTouchStartY(t.clientY);
                    setIsDragging(true);
                  }}
                  onTouchMove={(e) => {
                    if (touchStartX == null || touchStartY == null) return;
                    const t = e.touches[0];
                    const dx = t.clientX - touchStartX;
                    const dy = t.clientY - touchStartY;
                    // only track horizontal rightward drag; allow slight vertical
                    if (Math.abs(dx) > Math.abs(dy)) {
                      setDragX(Math.max(0, dx));
                    }
                  }}
                  onTouchEnd={() => {
                    setIsDragging(false);
                    if (dragX > 100) {
                      setIsOpen(false);
                    }
                    setDragX(0);
                  }}
                  style={{ transform: dragX ? `translateX(${dragX}px)` : undefined, transition: isDragging ? 'none' : undefined }}
                >
                  {/* Header row */}
                  <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 backdrop-blur-sm border-b border-oklch-border-primary bg-oklch-white-pure/90">
                    <div className="flex items-center gap-2 anim-left-in" style={{ animationDelay: '100ms' }}>
                      <img src={logo} alt="qualipro" className="h-8 w-8 object-contain" />
                      <span className="text-xl font-serif font-semibold text-oklch-neutral-900">QualiPro</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="rounded-full p-2 anim-right-in transition-colors text-oklch-primary-base hover:bg-oklch-primary-base hover:text-oklch-white-pure" style={{ animationDelay: '180ms' }}>
                      <X size={20} />
                    </button>
                  </div>

                  {/* Scrollable content area */}
                  <div className="flex-1  overflow-y-auto overscroll-contain" style={{ scrollbarGutter: 'stable both-edges' }}>
                    {/* Nav links */}
                    <nav className="flex flex-col gap-2 px-3 py-4">
                      <div className="animate-drop-in" style={{ animationDelay: '240ms' }}>
                        <Link to="/" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors border ${isActive("/") ? "border-oklch-primary-bright bg-oklch-bg-primary" : "border-transparent bg-oklch-white-pure"}`} >
                          <Home className="h-5 w-5 text-oklch-primary-bright" />
                          <span className="font-medium text-base font-serif text-oklch-neutral-900\">Home</span>
                        </Link>
                      </div>
                      <div className="animate-drop-in" style={{ animationDelay: '310ms' }}>
                        <Link to="/services" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors border ${isActive("/services") ? "border-oklch-primary-bright bg-oklch-bg-primary" : "border-transparent bg-oklch-white-pure"}`}>
                          <Recycle className="h-5 w-5 text-oklch-primary-bright" />
                          <span className="font-medium text-base font-serif text-oklch-neutral-900">Services</span>
                        </Link>
                      </div>
                      <div className="animate-drop-in" style={{ animationDelay: '380ms' }}>
                        <Link to="/about" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors border ${isActive("/about") ? "border-oklch-primary-bright bg-oklch-bg-primary" : "border-transparent bg-oklch-white-pure"}`} >
                          <Briefcase className="h-5 w-5 text-oklch-primary-bright" />
                          <span className="font-medium text-base font-serif text-oklch-neutral-900">About</span>
                        </Link>
                      </div>
                      <div className="animate-drop-in" style={{ animationDelay: '450ms' }}>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors border ${isActive("/contact") ? "border-oklch-primary-bright bg-oklch-bg-primary" : "border-transparent bg-oklch-white-pure"}`} >
                          <Phone className="h-5 w-5 text-oklch-primary-bright" />
                          <span className="font-medium text-base font-serif text-oklch-neutral-900">Contact</span>
                        </Link>
                      </div>
                    </nav>

                    {/* CTA and features */}
                    <div className="px-4 py-2">
                      <div className="p-4 rounded-xl bg-oklch-white-pure border border-oklch-sky-base/30 anim-right-in" style={{ animationDelay: '480ms' }}>
                        <p className="text-sm text-oklch-neutral-900 mb-3">Partner with us for quality healthcare solutions.</p>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                          <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-oklch-primary-base text-oklch-white-pure px-4 py-2 font-semibold hover:bg-oklch-primary-dark active:bg-oklch-primary-dark transition-colors" >Get Started</span>
                        </Link>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-sky-950/70">
                        <div className="p-3 rounded-lg bg bg-gradient-to-br from-oklch-bg-primary to-oklch-pure-white border border-oklch-primary-bright shadow-sm flex items-center justify-between anim-left-in" style={{ animationDelay: '540ms' }}>
                          <span className="font-semibold">Reliable</span>
                          <div className="bg-oklch-primary-base rounded-full p-0.5">
                            <Check className="h-3 w-3 text-oklch-white-pure" />
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg bg-gradient-to-br from-oklch-bg-primary to-oklch-pure-white border border-oklch-primary-bright shadow-sm flex items-center justify-between anim-right-in" style={{ animationDelay: '580ms' }}>
                          <span className="font-semibold">Quality</span>
                          <div className="bg-oklch-sky-dark rounded-full p-0.5">
                            <Check className="h-3 w-3 text-oklch-pure-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Extra content to fill and avoid empty bottom */}
                    <div className="px-4 py-4 space-y-4 ">
                      <div className="bg bg-oklch-bg-primary/30 border border-oklch-primary-bright rounded-xl p-4 anim-up-in" style={{ animationDelay: '620ms' }}>
                        <h4 className="text-sm font-semibold text-oklch-neutral-900 mb-2">Contact us</h4>
                        <div className="space-y-2 text-sm text-oklch-neutral-700">
                          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-oklch-primary-base">
                            <Phone className="h-4 w-4 text-oklch-primary-base" /> +91 98765 43210
                          </a>
                          <a href="mailto:info@qualipro.healthcare" className="flex items-center gap-2 hover:text-oklch-primary-base">
                            <Mail className="h-4 w-4 text-oklch-primary-base" /> info@qualipro.healthcare
                          </a>
                        </div>
                      </div>



                      <div className="pb-24 text-center text-xs text-oklch-neutral-600 anim-up-in" style={{ animationDelay: '660ms' }}>© {new Date().getFullYear()} QualiPro Healthcare. All rights reserved.</div>
                    </div>
                  </div>
                </div>
              </SheetContent >
            </div >
          </Sheet >
        </div >
      </nav >

      {/* Spacer to prevent content overlap */}
      {/* <div className="h-20"></div> */}
    </>
  );
};

export default Navbar;
