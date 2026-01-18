import { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const textReveal: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const floatUp: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatUpRotate: Variants = {
  animate: {
    y: [-8, 12, -8],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatUpScale: Variants = {
  animate: {
    y: [-12, 8, -12],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===== HERO SECTION - APPLE STYLE ANIMATIONS =====

// Stagger container with 350ms delay between children (page load) - slow and subtle
export const heroStaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

// Fade in from bottom to top (text elements)
export const heroFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade in for buttons
export const heroButtonFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stats container stagger - slow and subtle
export const heroStatsStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.6,
    },
  },
};

// Individual stat item fade in
export const heroStatItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Card entrance stagger - slow and subtle
export const heroCardStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

// Individual card fade in and scale
export const heroCardFadeInScale: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Subtle floating animation for background elements
export const heroFloatingBlob: Variants = {
  animate: {
    y: [-15, 15, -15],
    x: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Pulse animation for accent elements
export const heroPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===== ABOUT PAGE ANIMATIONS =====

// Page heading stagger container (Our Story, heading, subtext, divider)
export const pageHeadingStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

// Fade down for pill (Our Story)
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade up for heading and text
export const fadeUp =(index? :number, extraDelay?: number): Variants => ( {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay : index === 0 ?  1.2 + (extraDelay ||0) : 0
    },
  },
});

// Line reveal animation (width reveal)
export const lineReveal: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'center' },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade up for section headings (Our Mission, Our Vision, etc)
export const sectionHeadingFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Description text fade up
export const sectionDescriptionFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade in from left (for left content)
export const fadeInFromLeft = (index? :number, extraDelay?: number): Variants => ({
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay : index === 0 ?  1.2 + (extraDelay || 0)  : 0
    },
  },
});

// Fade in from right (for right content)
export const fadeInFromRight = (index? : number, exrtraDelay?:number):Variants => ( {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay : index === 0 ?  1.2 + (exrtraDelay || 0) : 0
    },
  },
});

// Stagger container for individual content items (icon, heading, text)
export const contentItemStagger :Variants ={
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0,
    },
  },
};

// Individual content item (icon, heading, or text)
export const contentItemFadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Highlight items fade up with stagger
export const highlightItemFadeUp =(index? :number, exrtraDelay?:number): Variants => ( {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay:  index === 0 ? 1.2 + (exrtraDelay || 0) : 0
    },
  },
});
