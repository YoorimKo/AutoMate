'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';

export default function BenefitsPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      id: 'time-saving',
      title: 'benefits.item1.title',
      description: 'benefits.item1.description',
      icon: '/icons/time.svg',
      details: [
        t('benefits.item1.detail1') || 'Reduce manual data entry time by up to 90%',
        t('benefits.item1.detail2') || 'Automate repetitive tasks that previously took hours',
        t('benefits.item1.detail3') || 'Generate reports in minutes instead of days',
        t('benefits.item1.detail4') || 'Free up employee time for strategic activities'
      ],
      stats: {
        value: '70%',
        label: t('benefits.item1.stats') || 'Average time saved on automated processes'
      }
    },
    {
      id: 'cost-reduction',
      title: 'benefits.item2.title',
      description: 'benefits.item2.description',
      icon: '/icons/cost.svg',
      details: [
        t('benefits.item2.detail1') || 'Reduce operational costs by eliminating manual processes',
        t('benefits.item2.detail2') || 'Lower error-related expenses from manual data entry',
        t('benefits.item2.detail3') || 'Decrease overtime hours spent on routine tasks',
        t('benefits.item2.detail4') || 'Optimize resource allocation for better efficiency'
      ],
      stats: {
        value: '30%',
        label: t('benefits.item2.stats') || 'Average cost reduction through automation'
      }
    },
    {
      id: 'error-reduction',
      title: 'benefits.item3.title',
      description: 'benefits.item3.description',
      icon: '/icons/error.svg',
      details: [
        t('benefits.item3.detail1') || 'Eliminate human errors in data processing',
        t('benefits.item3.detail2') || 'Ensure consistent application of business rules',
        t('benefits.item3.detail3') || 'Reduce compliance risks through standardized processes',
        t('benefits.item3.detail4') || 'Implement validation checks that catch errors automatically'
      ],
      stats: {
        value: '99%',
        label: t('benefits.item3.stats') || 'Error reduction in automated processes'
      }
    },
    {
      id: 'productivity',
      title: 'benefits.item4.title',
      description: 'benefits.item4.description',
      icon: '/icons/productivity.svg',
      details: [
        t('benefits.item4.detail1') || 'Complete more tasks without increasing headcount',
        t('benefits.item4.detail2') || 'Process higher volumes of work in the same timeframe',
        t('benefits.item4.detail3') || 'Enable 24/7 operation of critical business processes',
        t('benefits.item4.detail4') || 'Respond faster to business opportunities and challenges'
      ],
      stats: {
        value: '40%',
        label: t('benefits.item4.stats') || 'Average productivity improvement'
      }
    },
    {
      id: 'data-driven',
      title: 'benefits.item5.title',
      description: 'benefits.item5.description',
      icon: '/icons/data.svg',
      details: [
        t('benefits.item5.detail1') || 'Gather more comprehensive data from automated systems',
        t('benefits.item5.detail2') || 'Generate real-time insights for faster decision-making',
        t('benefits.item5.detail3') || 'Identify trends and patterns that humans might miss',
        t('benefits.item5.detail4') || 'Create data visualization dashboards for clearer insights'
      ],
      stats: {
        value: '65%',
        label: t('benefits.item5.stats') || 'Businesses reporting improved decision-making'
      }
    },
    {
      id: 'employee-satisfaction',
      title: 'benefits.item6.title',
      description: 'benefits.item6.description',
      icon: '/icons/satisfaction.svg',
      details: [
        t('benefits.item6.detail1') || 'Reduce employee burnout from repetitive tasks',
        t('benefits.item6.detail2') || 'Enable staff to focus on creative and meaningful work',
        t('benefits.item6.detail3') || 'Increase job satisfaction by eliminating tedious processes',
        t('benefits.item6.detail4') || 'Support skill development in higher-value activities'
      ],
      stats: {
        value: '45%',
        label: t('benefits.item6.stats') || 'Increase in employee satisfaction after automation'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('benefits.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {t('benefits.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.id} type="fade-up" duration={800} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                      <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                        {/* Placeholder for icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{t(benefit.title)}</h3>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{benefit.stats.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{benefit.stats.label}</div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{t(benefit.description)}</p>
                  
                  <h4 className="font-medium text-lg mb-3">{t('benefits.impact') || 'Business Impact'}</h4>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {benefit.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">{t('benefits.roi_title') || 'Return on Investment'}</h2>
            
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('benefits.roi_description') || 'Our automation solutions typically provide return on investment within the first 6-12 months. Most clients see immediate benefits in time savings, and the cost savings accumulate over time as efficiency improves.'}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6-12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('benefits.roi_months') || 'Months to ROI'}</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3-5x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('benefits.roi_return') || 'Average return'}</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('benefits.roi_satisfaction') || 'Client satisfaction'}</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300">
                  {t('benefits.get_assessment') || 'Get a Free ROI Assessment'}
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