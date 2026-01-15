import React from 'react';
import { motion } from 'framer-motion';

/* Animated Lost Document SVG */
export const LostDocumentSVG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {/* Document with fold */}
      <motion.g
        animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M 80 40 L 80 240 Q 80 260 100 260 L 220 260 Q 240 260 240 240 L 240 80 L 200 40 Z"
          fill="none"
          stroke="url(#docGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M 200 40 L 200 80 L 240 80" stroke="url(#docGradient)" strokeWidth="2.5" fill="none" />
      </motion.g>

      {/* Question marks floating around */}
      <motion.text
        x="100"
        y="120"
        fontSize="48"
        fontWeight="bold"
        fill="url(#textGradient)"
        textAnchor="middle"
        animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ?
      </motion.text>

      <motion.circle
        cx="120"
        cy="80"
        r="4"
        fill="url(#accentGradient)"
        animate={{ 
          cx: [120, 135, 120],
          cy: [80, 60, 80],
          r: [4, 6, 4]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
      />

      <motion.circle
        cx="180"
        cy="180"
        r="3"
        fill="url(#accentGradient)"
        animate={{ 
          cx: [180, 160, 180],
          cy: [180, 200, 180],
          r: [3, 5, 3]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.4 }}
      />

      {/* Defs for gradients */}
      <defs>
        <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

/* Animated Compass/Navigation SVG */
export const CompassSVG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      {/* Outer circle */}
      <motion.circle
        cx="150"
        cy="150"
        r="120"
        stroke="url(#compassGradient)"
        strokeWidth="3"
        animate={{ strokeDasharray: [0, 754], strokeDashoffset: [754, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner rotating compass needle */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        {/* North needle (red) */}
        <path
          d="M 150 60 L 145 150 L 150 140 L 155 150 Z"
          fill="url(#needleGradient1)"
          opacity="0.9"
        />
        {/* South needle (blue) */}
        <path
          d="M 150 240 L 145 150 L 150 160 L 155 150 Z"
          fill="url(#needleGradient2)"
          opacity="0.6"
        />
      </motion.g>

      {/* Cardinal points */}
      <text x="150" y="40" fontSize="16" fontWeight="bold" fill="url(#compassGradient)" textAnchor="middle">N</text>
      <text x="260" y="155" fontSize="16" fontWeight="bold" fill="url(#compassGradient)" textAnchor="middle">E</text>
      <text x="150" y="270" fontSize="16" fontWeight="bold" fill="url(#compassGradient)" textAnchor="middle">S</text>
      <text x="40" y="155" fontSize="16" fontWeight="bold" fill="url(#compassGradient)" textAnchor="middle">W</text>

      {/* Floating dots */}
      <motion.circle
        cx="150"
        cy="150"
        r="30"
        fill="none"
        stroke="url(#dotGradient)"
        strokeWidth="2"
        strokeDasharray="10 5"
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      <defs>
        <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="needleGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="needleGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

/* Animated Broken Link SVG */
export const BrokenLinkSVG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      {/* Left link */}
      <motion.path
        d="M 60 150 Q 90 120 120 150 Q 90 180 60 150"
        stroke="url(#linkGradient1)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ 
          x: [-5, 0, -5],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Right link */}
      <motion.path
        d="M 240 150 Q 210 120 180 150 Q 210 180 240 150"
        stroke="url(#linkGradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ 
          x: [5, 0, 5],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Broken chain link in middle */}
      <motion.g
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      >
        <circle cx="150" cy="150" r="12" stroke="url(#breakGradient)" strokeWidth="2.5" />
        {/* Break indicator */}
        <line x1="138" y1="150" x2="142" y2="150" stroke="url(#breakGradient)" strokeWidth="2" />
        <line x1="158" y1="150" x2="162" y2="150" stroke="url(#breakGradient)" strokeWidth="2" />
      </motion.g>

      {/* Spark effects */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="150"
          cy="150"
          r="3"
          fill="url(#sparkGradient)"
          animate={{
            cx: [150, 150 + Math.cos(i * 2.1) * 40, 150],
            cy: [150, 150 + Math.sin(i * 2.1) * 40, 150],
            opacity: [1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <defs>
        <linearGradient id="linkGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="linkGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="breakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

/* Animated Spaceship SVG - Lost in space */
export const SpaceshipSVG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      {/* Stars in background */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + Math.random() * 200}
          cy={30 + Math.random() * 240}
          r="1.5"
          fill="url(#starGradient)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() }}
        />
      ))}

      {/* Spaceship */}
      <motion.g
        animate={{
          y: [-20, 20, -20],
          rotateZ: [-3, 3, -3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Main body */}
        <ellipse cx="150" cy="180" rx="25" ry="35" stroke="url(#shipGradient)" strokeWidth="2.5" />
        {/* Cockpit */}
        <circle cx="150" cy="155" r="12" stroke="url(#shipGradient)" strokeWidth="2.5" />
        {/* Flames */}
        <motion.path
          d="M 140 215 Q 135 235 140 245 Q 150 235 160 245 Q 165 235 160 215"
          fill="url(#flameGradient)"
          animate={{ scaleY: [0.8, 1.2, 0.8] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </motion.g>

      {/* Planetary rings */}
      <motion.circle
        cx="80"
        cy="100"
        r="20"
        stroke="url(#planetGradient)"
        strokeWidth="3"
        opacity="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fcd34d" />
        </linearGradient>
        <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

/* Animated Error Code SVG */
export const ErrorCodeSVG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      {/* Code brackets */}
      <motion.path
        d="M 60 80 L 80 150 L 60 220"
        stroke="url(#codeGradient1)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ x: [-5, 0, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.path
        d="M 240 80 L 220 150 L 240 220"
        stroke="url(#codeGradient2)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ x: [5, 0, 5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Error symbol */}
      <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <circle cx="150" cy="150" r="40" stroke="url(#errorGradient)" strokeWidth="3" />
        <line x1="120" y1="120" x2="180" y2="180" stroke="url(#errorGradient)" strokeWidth="3" strokeLinecap="round" />
        <line x1="180" y1="120" x2="120" y2="180" stroke="url(#errorGradient)" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      {/* Pulsing dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={110 + i * 40}
          cy="250"
          r="4"
          fill="url(#errorGradient)"
          animate={{ cy: [250, 235, 250] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <defs>
        <linearGradient id="codeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="codeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
