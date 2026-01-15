# Animation Guide

This guide describes all the new animation features added to the project using Framer Motion.

## Overview

The project now includes:
1. **Click Animations** - Button and icon animations on user interaction
2. **Scroll-Triggered Animations** - Rating and element animations when scrolling into view
3. **Reusable Components** - AnimatedButton, AnimatedIcon, and AnimatedRating components

---

## Click Animations

### Available Click Animation Types

Located in `frontend/src/utils/advanced-motion.ts`:

1. **buttonClickRipple** - Scale ripple effect on button click
   - Use: `variants={buttonClickRipple}` with `whileTap="tap"`
   - Effect: Scale down to 0.95 then back to 1

2. **iconPulseClick** - Pulse effect on icon click
   - Scale: 1 → 1.4 → 0.9 → 1
   - Duration: 0.5s

3. **iconShakeClick** - Shake effect on icon click
   - Horizontal and rotational shake
   - Duration: 0.4s

4. **iconSpinClick** - Full 360° spin on icon click
   - Duration: 0.6s

5. **iconFlipClick** - 3D flip effect (rotateY)
   - Duration: 0.5s

6. **explosionParticle** - Particle burst animation
   - Creates 8 particles radiating outward
   - Used with AnimatedIcon component

### Using Click Animations in Components

```tsx
// Using AnimatedButton component
import AnimatedButton from './components/ui/animated-button';

<AnimatedButton variant="primary" size="md" onClick={() => console.log('clicked')}>
  Click Me
</AnimatedButton>

// Using AnimatedIcon component
import AnimatedIcon from './components/ui/animated-icon';

<AnimatedIcon 
  icon={<Icon size={24} />}
  animationType="pulse"
  showParticles={true}
/>

// Manual usage with motion
import { motion } from 'framer-motion';
import { iconPulseClick } from '../../utils/advanced-motion';

<motion.div 
  variants={iconPulseClick}
  whileTap="tap"
>
  {/* content */}
</motion.div>
```

---

## Scroll-Triggered Animations

### Rating Animations

Located in `frontend/src/utils/advanced-motion.ts`:

1. **starsContainer** - Stagger container for star rating
   - Stagger children with 0.1s delay
   - Total delay: 0.2s before starting

2. **starItem** - Individual star animation
   - Fade in and slide up (y: 10 → 0)
   - Duration: 0.4s
   - Easing: easeOut

3. **starRatingAnimation** - Single star with custom delay
   - Scale: 0 → 1
   - Opacity: 0 → 1
   - Easing: backOut

### Other Scroll Animations

1. **counterBounce** - Bounce animation for numbers
2. **ratingFill** - Fill animation from left to right
3. **progressBarScroll** - Progress bar reveal
4. **iconAppearRotate** - Icon appears with rotation
5. **bounceInScroll** - Spring-based bounce entry
6. **flipCard** - Card flip animation
7. **slideInWithScale** - Slide and scale combined

### Using Scroll Animations

```tsx
// Using AnimatedRating component
import AnimatedRating from './components/ui/animated-rating';

<AnimatedRating 
  rating={4.9}
  totalStars={5}
  size="lg"
  showLabel={true}
  interactive={true}
  onRatingChange={(rating) => console.log(rating)}
/>

// Manual usage with motion
import { motion } from 'framer-motion';
import { starsContainer, starItem } from '../../utils/advanced-motion';

<motion.div 
  variants={starsContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.5 }}
>
  {[...Array(5)].map((_, i) => (
    <motion.div key={i} variants={starItem}>
      <Star size={20} />
    </motion.div>
  ))}
</motion.div>
```

---

## Reusable Components

### AnimatedButton

**Location:** `frontend/src/components/ui/animated-button.tsx`

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `children`: React.ReactNode
- All standard button HTML attributes

**Features:**
- Click ripple animation
- Hover lift effect (y: -2)
- Customizable variants and sizes

**Example:**
```tsx
<AnimatedButton variant="primary" size="lg">
  Schedule Consultation
</AnimatedButton>
```

### AnimatedIcon

**Location:** `frontend/src/components/ui/animated-icon.tsx`

**Props:**
- `icon`: React.ReactNode (the icon component)
- `animationType`: 'pulse' | 'shake' | 'spin' | 'flip' | 'burst'
- `size`: 'sm' | 'md' | 'lg'
- `showParticles`: boolean (enable particle burst)
- `onClick`: () => void

**Features:**
- Multiple animation types
- Optional particle burst effect
- Interactive on click

**Example:**
```tsx
<AnimatedIcon 
  icon={<Star size={24} />}
  animationType="pulse"
  size="lg"
  showParticles={true}
/>
```

### AnimatedRating

**Location:** `frontend/src/components/ui/animated-rating.tsx`

**Props:**
- `rating`: number
- `totalStars`: number (default: 5)
- `size`: 'sm' | 'md' | 'lg'
- `showLabel`: boolean
- `fillColor`: string (CSS class like 'text-yellow-400')
- `interactive`: boolean
- `onRatingChange`: (rating: number) => void

**Features:**
- Scroll-triggered staggered animation
- Optional interactive mode
- Customizable styling
- Shows numeric label

**Example:**
```tsx
<AnimatedRating 
  rating={4.5}
  totalStars={5}
  size="md"
  showLabel={true}
  interactive={true}
  onRatingChange={(newRating) => updateRating(newRating)}
/>
```

---

## Implementation Examples

### Current Implementations

1. **TestimonialsSection** - Star ratings animate on scroll
2. **StatsSection** - Icons pulse on click, buttons ripple on click

### How to Add to Other Components

1. Import the animation from `utils/advanced-motion.ts`
2. Wrap element with `motion.div` or `motion.button`
3. Apply variants and controls:

```tsx
import { motion } from 'framer-motion';
import { buttonClickRipple } from '../../utils/advanced-motion';

<motion.button
  variants={buttonClickRipple}
  whileTap="tap"
>
  Click Me
</motion.button>
```

---

## Animation Performance Tips

1. **Use `once: true`** in `whileInView` to prevent re-triggering animations
2. **Use `amount` in viewport** to control when animation starts (0.5 = 50% visible)
3. **Keep animations short** (300-800ms) for better UX
4. **Avoid too many simultaneous animations** on mobile devices
5. **Use `layout` prop** sparingly as it can impact performance

---

## Framer Motion Easing Reference

- `'easeOut'` - Fast start, slow end
- `'easeIn'` - Slow start, fast end
- `'easeInOut'` - Slow start and end
- `'linear'` - Constant speed
- `'backOut'` - Overshoots and settles
- `'circleOut'` - Circular easing

---

## Browser Support

All animations use CSS transforms and are optimized for:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

No JavaScript polyfills needed for modern browsers.
