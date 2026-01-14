import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { counterBounce } from '../../utils/advanced-motion';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
  format?: 'number' | 'percentage' | 'currency' | 'custom';
  suffix?: string;
  prefix?: string;
  animateOnScroll?: boolean;
  onComplete?: () => void;
}

const AnimatedCounter = React.forwardRef<HTMLDivElement, AnimatedCounterProps>(
  ({
    value,
    duration = 2,
    className = '',
    format = 'number',
    suffix = '',
    prefix = '',
    animateOnScroll = true,
    onComplete,
  }, ref) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [hasAnimated, setHasAnimated] = useState(!animateOnScroll);

    // Extract numeric value and original suffix
    const numericValue = typeof value === 'string'
      ? parseInt(value.replace(/\D/g, ''), 10)
      : value;

    const originalSuffix = typeof value === 'string'
      ? value.replace(/\d/g, '')
      : suffix;

    const formatValue = (num: number): string => {
      switch (format) {
        case 'percentage':
          return `${num}%`;
        case 'currency':
          return `₹${num.toLocaleString('en-IN')}`;
        case 'custom':
          return `${prefix}${num}${originalSuffix || suffix}`;
        default:
          return `${num}${originalSuffix || suffix}`;
      }
    };

    useEffect(() => {
      if (!hasAnimated) return;

      let start = 0;
      const increment = numericValue / (duration * 60); // 60 frames per second
      let animationFrameId: number;

      const animate = () => {
        start += increment;
        if (start < numericValue) {
          setDisplayValue(formatValue(Math.ceil(start)));
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(formatValue(numericValue));
          onComplete?.();
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }, [hasAnimated, numericValue, duration, format, originalSuffix, suffix, prefix, onComplete]);

    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        variants={counterBounce}
        animate={hasAnimated ? 'animate' : 'initial'}
        onViewportEnter={() => animateOnScroll && setHasAnimated(true)}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ animate: 'animate' }}
      >
        {displayValue}
      </motion.div>
    );
  }
);

AnimatedCounter.displayName = 'AnimatedCounter';

export default AnimatedCounter;
