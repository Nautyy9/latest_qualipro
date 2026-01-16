import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  animationDuration?: number;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, onClick, animationDuration = 0.25, ...props }, ref) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    const variantClasses = {
      primary: 'bg-oklch-primary-base text-oklch-white-pure hover:bg-oklch-primary-dark border-0',
      secondary: 'bg-oklch-white-pure text-oklch-primary-base border border-oklch-primary-base hover:bg-oklch-secondary-light/50',
      outline: 'border border-oklch-primary-base text-oklch-primary-base hover:bg-oklch-primary-base/10',
      ghost: 'bg-transparent text-oklch-primary-base hover:bg-oklch-primary-base/10',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsAnimating(true);
      
      // Delay the actual action by animation duration for visual feedback
      setTimeout(() => {
        onClick?.(e);
        setIsAnimating(false);
      }, animationDuration * 1000);
    };

    // Extract motion-compatible props and standard button props separately
    // Filter out HTML event handlers that conflict with motion.button event handlers
    const { 
      disabled, 
      onDrag, 
      onDragStart, 
      onDragEnd, 
      onDragCapture,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onTransitionEnd,
      ...htmlProps 
    } = props;

    return (
      <motion.button
        ref={ref}
        className={`rounded-lg font-semibold transition-all duration-300 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        animate={isAnimating ? { scale: 0.95 } : { scale: 1 }}
        transition={{ duration: animationDuration * 0.5 }}
        whileHover={!isAnimating ? { y: -2 } : {}}
        onClick={handleClick}
        disabled={isAnimating || disabled}
        {...htmlProps}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
