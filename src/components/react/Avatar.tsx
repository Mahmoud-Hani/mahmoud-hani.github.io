import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface AvatarProps {
  size?: 'hero' | 'about' | 'default';
  className?: string;
  showBadge?: boolean;
  photoUrl?: string;
  hasPhoto?: boolean;
  initials?: string;
  label?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'hero',
  className = '',
  showBadge = true,
  photoUrl = portfolioData.identity.photoUrl,
  hasPhoto = portfolioData.identity.hasPhoto,
  initials = portfolioData.identity.initials,
  label = 'AppSec // Pentester',
}) => {
  // Dimensions based on specification:
  // Hero: >=160px desktop, ~100px mobile
  // About: >=180px desktop
  const sizeClasses = {
    hero: 'w-[104px] h-[104px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px]',
    about: 'w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[190px] md:h-[190px] lg:w-[210px] lg:h-[210px]',
    default: 'w-[104px] h-[104px] md:w-[160px] md:h-[160px]',
  }[size];

  const fontSizeClasses = {
    hero: 'text-3xl md:text-5xl',
    about: 'text-4xl md:text-6xl',
    default: 'text-3xl md:text-4xl',
  }[size];

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative inline-flex flex-col items-center select-none group ${className}`}>
      {/* Outer Tactical Container with subtle glow and corner reticles */}
      <motion.div
        className={`relative ${sizeClasses} rounded-xl bg-card border border-border-subtle p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-accent-blue`}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
        style={{
          boxShadow: '0 0 25px rgba(56, 189, 248, 0.08)',
        }}
      >
        {/* Tactical Corner Reticles */}
        <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-blue pointer-events-none transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5" />
        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-blue pointer-events-none transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5" />
        <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-blue pointer-events-none transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5" />
        <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-blue pointer-events-none transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5" />

        {/* Subtle Background Target Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        
        {/* Subtle Scanline / Target Crosshair */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-accent-blue/10 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-accent-blue/10 pointer-events-none" />

        {/* Content Display: Real Photo vs Monogram Fallback */}
        <div className="relative w-full h-full rounded-lg bg-secondary flex items-center justify-center overflow-hidden border border-border-subtle/60">
          {hasPhoto && photoUrl ? (
            <img
              src={photoUrl}
              alt={portfolioData.identity.fullName}
              className="w-full h-full object-cover object-[center_15%]"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-center">
              <span className={`font-mono font-bold tracking-widest text-text-primary group-hover:text-accent-blue transition-colors duration-300 ${fontSizeClasses}`}>
                {initials}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-accent-blue/70 mt-0.5">
                ID: MA-23
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Operator Status Badge */}
      {showBadge && (
        <div className="mt-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/90 border border-border-subtle shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-status-pulse" />
          <span className="font-mono text-[10px] font-medium tracking-wide text-text-muted">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
