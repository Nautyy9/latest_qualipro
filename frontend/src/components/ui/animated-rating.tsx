import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { starItem, starsContainer } from '../../utils/advanced-motion';

interface AnimatedRatingProps {
  rating: number;
  totalStars?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
  fillColor?: string;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const AnimatedRating = React.forwardRef<HTMLDivElement, AnimatedRatingProps>(
  ({ 
    rating, 
    totalStars = 5, 
    size = 'md',
    className = '',
    showLabel = false,
    fillColor = 'text-yellow-400',
    interactive = false,
    onRatingChange
  }, ref) => {
    const [hoverRating, setHoverRating] = React.useState<number | null>(null);

    const sizeMap = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const iconSize = sizeMap[size];
    const displayRating = interactive ? (hoverRating ?? rating) : rating;

    return (
      <div ref={ref} className={`flex flex-col items-center gap-2 ${className}`}>
        <motion.div
          className="flex items-center gap-1"
          variants={starsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[...Array(totalStars)].map((_, i) => (
            <motion.div
              key={i}
              variants={starItem}
              onMouseEnter={() => interactive && setHoverRating(i + 1)}
              onMouseLeave={() => interactive && setHoverRating(null)}
              onClick={() => interactive && onRatingChange?.(i + 1)}
              className={interactive ? 'cursor-pointer' : ''}
            >
              <Star
                size={iconSize}
                className={`${
                  i < displayRating
                    ? `${fillColor} fill-current`
                    : 'text-gray-300 fill-gray-200'
                } transition-colors duration-200`}
              />
            </motion.div>
          ))}
        </motion.div>

        {showLabel && (
          <motion.span
            className="text-sm text-gray-600 font-medium"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {displayRating.toFixed(1)} / {totalStars}
          </motion.span>
        )}
      </div>
    );
  }
);

AnimatedRating.displayName = 'AnimatedRating';

export default AnimatedRating;
