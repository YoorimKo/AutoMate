'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollAnimation } from '@/utils/animations';

// Service Card Bubble Pattern Component
function ServiceBubblePattern({ index }: { index: number }) {
  // Different color schemes for each card
  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-indigo-500 to-blue-400',
    'from-purple-500 to-indigo-400',
    'from-pink-500 to-purple-400',
    'from-red-500 to-pink-400',
    'from-orange-500 to-red-400'
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-90">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-10`}></div>
      
      {/* Bubble patterns */}
      <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>
      <div className={`absolute ${index % 2 === 0 ? 'top-1/4 right-0' : 'bottom-1/4 left-0'} w-16 h-16 rounded-full bg-white/10 ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>
    </div>
  );
}

interface ServiceCardProps {
  titleKey: string;
  descriptionKey: string;
  icon: ReactNode;
  index: number;
}

function ServiceCard({ titleKey, descriptionKey, icon, index }: ServiceCardProps) {
  const { t } = useLanguage();
  
  return (
    <ScrollAnimation type="fade-up" delay={index * 100}>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform hover:scale-105 overflow-hidden">
        {/* Add bubble pattern background */}
        <ServiceBubblePattern index={index} />
        
        {/* Content - positioned above the pattern */}
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{t(titleKey)}</h3>
          <p className="text-gray-600 dark:text-gray-300">{t(descriptionKey)}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      titleKey: "services.card1.title",
      descriptionKey: "services.card1.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      titleKey: "services.card2.title",
      descriptionKey: "services.card2.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      titleKey: "services.card3.title",
      descriptionKey: "services.card3.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      titleKey: "services.card4.title",
      descriptionKey: "services.card4.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: "services.card5.title",
      descriptionKey: "services.card5.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: "services.card6.title",
      descriptionKey: "services.card6.description",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
  ];
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Semi-transparent circular patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation type="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 