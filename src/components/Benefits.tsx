'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Semi-transparent circular patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-60 h-60 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-10 w-40 h-40 rounded-full bg-indigo-100/20 dark:bg-indigo-900/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('benefits.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item1.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item1.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item2.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item2.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item3.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item4.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item4.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item5.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item5.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('benefits.item6.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('benefits.item6.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 