import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  explosionParticle,
  iconAppearRotate 
} from '../../utils/advanced-motion';

interface AnimatedIconProps {
  icon: React.ReactNode;
  animationType?: 'pulse' | 'shake' | 'spin' | 'flip' | 'burst';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  showParticles?: boolean;
  triggerOnScroll?: boolean;
  animationDuration?: number;
  centered?: boolean;
}

const AnimatedIcon = React.forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ 
    icon, 
    size = 'md', 
    className = '', 
    onClick,
    showParticles = false,
    triggerOnScroll = false,
    animationDuration = 0.25,
    centered = true
  }, ref) => {
    const [particles, setParticles] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    };

    const handleClick = () => {
      setIsAnimating(true);
      if (showParticles) {
        setParticles(true);
        setTimeout(() => setParticles(false), 800);
      }
      // Delay the actual callback
      setTimeout(() => {
        onClick?.();
        setIsAnimating(false);
      }, animationDuration * 1000);
    };

    // For scroll-triggered icons, use the entrance animation
    if (triggerOnScroll) {
      return (
        <motion.div
          ref={ref}
          className={`relative inline-flex items-center justify-center ${centered ? 'mx-auto' : ''} ${sizeClasses[size]} ${className}`}
          variants={iconAppearRotate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {icon}
        </motion.div>
      );
    }

    // For click-triggered icons
    return (
      <div ref={ref} className="relative inline-block" onClick={handleClick}>
        <motion.div
          className={`flex items-center justify-center cursor-pointer ${sizeClasses[size]} ${className}`}
          animate={isAnimating ? { scale: 0.9 } : { scale: 1 }}
          transition={{ duration: animationDuration * 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Particle burst effect */}
        {showParticles && particles && (
          <>
            {[...Array(8)].map((_, i) => {
              const angle = (360 / 8) * i;
              const distance = 50;
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-oklch-primary-base rounded-full"
                  variants={explosionParticle(angle, distance)}
                  initial="idle"
                  animate="explode"
                />
              );
            })}
          </>
        )}
      </div>
    );
  }
);

AnimatedIcon.displayName = 'AnimatedIcon';

export default AnimatedIcon;
