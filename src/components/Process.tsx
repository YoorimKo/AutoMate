'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ScrollAnimation, StaggeredAnimation } from '@/utils/animations';
import { useState, useEffect } from 'react';

// Simple step number indicator
function StepNumber({ number }: { number: number }) {
  // Different color schemes for each step
  const colors = [
    'bg-blue-500', // Analysis
    'bg-indigo-500', // Design
    'bg-purple-500', // Development
    'bg-pink-500', // Launch
  ];
  
  return (
    <div className={`${colors[number-1]} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0`}>
      {number}
    </div>
  );
}

// Process step component with animations
function ProcessStep({ 
  step, 
  isActive, 
  index 
}: { 
  step: { id: number; title: string; description: string }; 
  isActive: boolean;
  index: number;
}) {
  const animationType = index % 2 === 0 ? "fade-right" : "fade-left";
  
  return (
    <div className={`transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}`}>
      <ScrollAnimation 
        type={animationType} 
        duration={800} 
        delay={index * 100} 
        threshold={0.2}
        once={false}
        fadeOut={true}
      >
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-6 flex items-start transition transform hover:translate-y-[-4px] duration-300">
          <StepNumber number={step.id} />
          <div className="ml-5">
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default function Process() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  
  // Observe scroll position to determine active step
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const stepElements = document.querySelectorAll('#process .process-step');
      
      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top + window.scrollY;
        const elemBottom = elemTop + rect.height;
        
        if (scrollPosition >= elemTop && scrollPosition <= elemBottom) {
          setActiveStep(index + 1);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const steps = [
    {
      id: 1,
      title: t('process.step1.title'),
      description: t('process.step1.description')
    },
    {
      id: 2,
      title: t('process.step2.title'),
      description: t('process.step2.description')
    },
    {
      id: 3,
      title: t('process.step3.title'),
      description: t('process.step3.description')
    },
    {
      id: 4,
      title: t('process.step4.title'),
      description: t('process.step4.description')
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation type="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('process.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Vertical process layout */}
        <div className="max-w-3xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div 
              id={`process-step-${step.id}`} 
              key={step.id} 
              className="process-step scroll-mt-24"
            >
              <ProcessStep 
                step={step} 
                isActive={activeStep === step.id}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 