'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-in' 
  | 'fade-left' 
  | 'fade-right' 
  | 'fade-down'
  | 'zoom-in'
  | 'zoom-out'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right';

interface ScrollAnimationProps {
  type?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  children: ReactNode;
  className?: string;
  fadeOut?: boolean;
  fadeOutThreshold?: number;
  once?: boolean;
}

export function ScrollAnimation({
  type = 'fade-up',
  duration = 700,
  delay = 0,
  threshold = 0.1,
  children,
  className = '',
  fadeOut = false,
  fadeOutThreshold = 0.8,
  once = true,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Element entering viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } 
        // Element exiting viewport (if fadeOut is enabled and not using 'once')
        else if (fadeOut && !once && isVisible) {
          setHasExited(true);
          setIsVisible(false);
        }
      },
      {
        threshold: fadeOut ? [threshold, fadeOutThreshold] : threshold,
        rootMargin: '0px 0px -50px 0px', // Triggers a bit before element comes into view
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, fadeOut, fadeOutThreshold, once, isVisible]);
  
  // Define animation classes based on type
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    return 'opacity-100';
  };
  
  // Define transform classes based on type
  const getTransformClass = () => {
    if (!isVisible) {
      switch (type) {
        case 'fade-up':
          return 'translate-y-10';
        case 'fade-down':
          return '-translate-y-10';
        case 'fade-left':
          return 'translate-x-10';
        case 'fade-right':
          return '-translate-x-10';
        case 'zoom-in':
          return 'scale-90';
        case 'zoom-out':
          return 'scale-110';
        case 'slide-up':
          return 'translate-y-20';
        case 'slide-down':
          return '-translate-y-20';
        case 'slide-left':
          return 'translate-x-20';
        case 'slide-right':
          return '-translate-x-20';
        case 'fade-in':
        default:
          return '';
      }
    }
    return '';
  };
  
  const style = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };
  
  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()} ${getTransformClass()}`}
      style={style}
    >
      {children}
    </div>
  );
}

// For elements that animate when scrolled into view and when scrolled out of view
export function ScrollTriggerAnimation({
  children,
  duration = 700,
  className = '',
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: [0.1, 0.9],
        rootMargin: '-10% 0px -10% 0px',
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const style = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };
  
  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? 'opacity-100' : 'opacity-0'} ${isInView ? '' : 'translate-y-10'}`}
      style={style}
    >
      {children}
    </div>
  );
}

// For staggered animations in a group
export function StaggeredAnimation({
  children,
  baseDelay = 100,
  type = 'fade-up',
  className = '',
}: {
  children: ReactNode[];
  baseDelay?: number;
  type?: AnimationType;
  className?: string;
}) {
  return (
    <div className={className}>
      {Array.isArray(children) &&
        children.map((child, i) => (
          <ScrollAnimation key={i} delay={i * baseDelay} type={type}>
            {child}
          </ScrollAnimation>
        ))}
    </div>
  );
} 