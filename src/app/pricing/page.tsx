'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';

export default function PricingPage() {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // 플랜 기능
  const features = {
    basic: [
      { key: 'pricing.basic.feature1', included: true },
      { key: 'pricing.basic.feature2', included: true },
      { key: 'pricing.basic.feature3', included: true },
      { key: 'pricing.basic.feature4', included: true },
      { key: 'pricing.basic.feature5', included: true },
      { key: 'pricing.professional.feature6', included: false },
      { key: 'pricing.enterprise.feature7', included: false },
    ],
    professional: [
      { key: 'pricing.professional.feature1', included: true },
      { key: 'pricing.professional.feature2', included: true },
      { key: 'pricing.professional.feature3', included: true },
      { key: 'pricing.professional.feature4', included: true },
      { key: 'pricing.professional.feature5', included: true },
      { key: 'pricing.professional.feature6', included: true },
      { key: 'pricing.enterprise.feature7', included: false },
    ],
    enterprise: [
      { key: 'pricing.enterprise.feature1', included: true },
      { key: 'pricing.enterprise.feature2', included: true },
      { key: 'pricing.enterprise.feature3', included: true },
      { key: 'pricing.enterprise.feature4', included: true },
      { key: 'pricing.enterprise.feature5', included: true },
      { key: 'pricing.enterprise.feature6', included: true },
      { key: 'pricing.enterprise.feature7', included: true },
    ]
  };

  // FAQ 항목
  const faqs = [
    {
      question: 'pricing.faq.q1',
      answer: 'pricing.faq.a1',
    },
    {
      question: 'pricing.faq.q2',
      answer: 'pricing.faq.a2',
    },
    {
      question: 'pricing.faq.q3',
      answer: 'pricing.faq.a3',
    },
    {
      question: 'pricing.faq.q4',
      answer: 'pricing.faq.a4',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('pricing.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {t('pricing.subtitle')}
            </p>
          </ScrollAnimation>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {t('pricing.yearly')}
                <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">
                  {t('pricing.save')}
                </span>
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <ScrollAnimation type="fade-up" duration={800} delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.basic.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t('pricing.basic.description')}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? t('pricing.basic.price.monthly') 
                        : t('pricing.basic.price.yearly')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{' '}{t('pricing.basic.per')}</span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {t('pricing.cta.basic')}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{t('services.features') || 'Features'}</h4>
                  <ul className="space-y-3">
                    {features.basic.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                          {t(feature.key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Professional Plan */}
            <ScrollAnimation type="fade-up" duration={800} delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 transition-transform hover:scale-105 hover:shadow-xl">
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  {t('benefits.item4.title') || 'Most Popular'}
                </div>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.professional.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t('pricing.professional.description')}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? t('pricing.professional.price.monthly') 
                        : t('pricing.professional.price.yearly')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{' '}{t('pricing.professional.per')}</span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {t('pricing.cta.professional')}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{t('services.features') || 'Features'}</h4>
                  <ul className="space-y-3">
                    {features.professional.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                          {t(feature.key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Enterprise Plan */}
            <ScrollAnimation type="fade-up" duration={800} delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-2">{t('pricing.enterprise.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t('pricing.enterprise.description')}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? t('pricing.enterprise.price.monthly') 
                        : t('pricing.enterprise.price.yearly')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{' '}{t('pricing.enterprise.per')}</span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {t('pricing.cta.enterprise')}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{t('services.features') || 'Features'}</h4>
                  <ul className="space-y-3">
                    {features.enterprise.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                          {t(feature.key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">{t('pricing.faq.title')}</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {t(faq.question)}
                      </h3>
                      <span className="relative ml-4 flex-shrink-0">
                        <svg className="group-open:hidden w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <svg className="group-open:block hidden w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                      {t(faq.answer)}
                    </div>
                  </details>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('contact.subtitle') || 'Have more questions? Contact our team for personalized assistance.'}
                </p>
                <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 