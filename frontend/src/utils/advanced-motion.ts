import { Variants } from 'framer-motion';

/* ============================================
   ADVANCED 404 PAGE ANIMATIONS
   ============================================ */

// Morphing shapes animation
export const morphShape: Variants = {
  animate: {
    borderRadius: ['0%', '50%', '0%'],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Floating with rotation
export const floatWithRotate: Variants = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 360, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Parallax effect
export const parallaxLayer = (offset: number): Variants => ({
  animate: {
    y: [0, -offset, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

// Glitch effect
export const glitchEffect: Variants = {
  animate: {
    x: [0, -2, 2, -2, 0],
    opacity: [1, 0.8, 1, 0.8, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

// Pulse glow
export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      '0 0 5px 0px rgba(59, 130, 246, 0.3)',
      '0 0 20px 5px rgba(59, 130, 246, 0.6)',
      '0 0 5px 0px rgba(59, 130, 246, 0.3)',
    ],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rainbow color shift
export const rainbowShift: Variants = {
  animate: {
    color: [
      '#3b82f6', // blue
      '#6366f1', // indigo
      '#a855f7', // purple
      '#ec4899', // pink
      '#f43f5e', // rose
      '#3b82f6', // back to blue
    ],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// 3D flip effect
export const flip3D: Variants = {
  animate: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Bounce with scale
export const bounceWithScale: Variants = {
  animate: {
    y: [0, -30, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
};

// Orbit rotation
export const orbitRotate = (radius: number): Variants => ({
  animate: {
    x: [0, radius, 0, -radius, 0],
    y: [0, 0, radius, 0, -radius],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
});

// Shimmer effect
export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Wave effect
export const wave = (delay: number): Variants => ({
  animate: {
    y: [0, -10, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    },
  },
});

// Rotate continuously
export const spinSlow: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const spinFast: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Scale pulse
export const scalePulse: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Sway effect
export const sway: Variants = {
  animate: {
    rotate: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Elastic bounce
export const elasticBounce: Variants = {
  animate: {
    y: [0, -40, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
};

// Wiggle effect
export const wiggle: Variants = {
  animate: {
    rotate: [0, -3, 3, -3, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

// Zoom in and out
export const zoomInOut: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Staggered fade
export const staggerFade: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeItem: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Blur motion
export const blurMotion: Variants = {
  animate: {
    filter: ['blur(0px)', 'blur(3px)', 'blur(0px)'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Swirl effect
export const swirl: Variants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Slide and fade
export const slideAndFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Pop animation
export const pop: Variants = {
  animate: {
    scale: [0, 1.2, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Expand and contract
export const expandContract: Variants = {
  animate: {
    width: ['100%', '110%', '100%'],
    height: ['100%', '110%', '100%'],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Floating particles stagger
export const particleStagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const particleFloat = (i: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: [0, 1, 0],
    y: [20, -40, -80],
    transition: {
      duration: 2 + Math.random(),
      delay: i * 0.1,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
});

/* ============================================
   INTERACTIVE CLICK ANIMATIONS
   ============================================ */

// Button click ripple effect
export const buttonClickRipple: Variants = {
  tap: {
    scale: [1, 0.95, 1],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Icon burst animation on click
export const iconBurst = (): Variants => ({
  idle: {
    scale: 1,
    rotate: 0,
  },
  tap: {
    scale: [1, 1.3, 0.8, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

// Icon explosion particles
export const explosionParticle = (angle: number, distance: number): Variants => ({
  idle: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  explode: {
    opacity: [1, 0],
    x: Math.cos((angle * Math.PI) / 180) * distance,
    y: Math.sin((angle * Math.PI) / 180) * distance,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
});

// Icon pulse on click
export const iconPulseClick: Variants = {
  tap: {
    scale: [1, 1.4, 0.9, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Icon shake on click
export const iconShakeClick: Variants = {
  tap: {
    x: [0, -5, 5, -5, 5, 0],
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Icon spin on click
export const iconSpinClick: Variants = {
  tap: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Icon flip on click
export const iconFlipClick: Variants = {
  tap: {
    rotateY: 360,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/* ============================================
   SCROLL-TRIGGERED ANIMATIONS
   ============================================ */

// Star rating animation on scroll
export const starRatingAnimation = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: 'backOut',
    },
  },
});

// Staggered stars reveal
export const starsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const starItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Counter animation with bounce
export const counterBounce: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Number flip animation
export const numberFlip: Variants = {
  animate: {
    rotateX: [0, 90, 180],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Rating fill animation
export const ratingFill: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Progress bar animation on scroll
export const progressBarScroll: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

// Icon appear with rotation on scroll
export const iconAppearRotate: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'backOut',
    },
  },
};

// Staggered list animation on scroll
export const listContainerScroll: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const listItemScroll: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Bounce in on scroll
export const bounceInScroll: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 120,
      damping: 10,
    },
  },
};

// Flip card animation
export const flipCard: Variants = {
  hidden: { rotateY: 90, opacity: 0 },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in with scale on scroll
export const slideInWithScale: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
