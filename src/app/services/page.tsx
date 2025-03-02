'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'data-processing',
      title: 'services.card1.title',
      description: 'services.card1.description',
      icon: '/icons/data-processing.svg',
      details: [
        t('services.card1.detail1') || 'Extract data from various sources including spreadsheets, PDFs, and databases',
        t('services.card1.detail2') || 'Clean and transform data automatically using rule-based systems',
        t('services.card1.detail3') || 'Create automated data visualizations and reports',
        t('services.card1.detail4') || 'Schedule and automate regular data processing tasks'
      ]
    },
    {
      id: 'workflow',
      title: 'services.card2.title',
      description: 'services.card2.description',
      icon: '/icons/workflow.svg',
      details: [
        t('services.card2.detail1') || 'Map and optimize business processes for automation',
        t('services.card2.detail2') || 'Create custom workflows to handle complex business logic',
        t('services.card2.detail3') || 'Integrate with existing systems and software',
        t('services.card2.detail4') || 'Implement approval processes and notification systems'
      ]
    },
    {
      id: 'reports',
      title: 'services.card3.title',
      description: 'services.card3.description',
      icon: '/icons/report.svg',
      details: [
        t('services.card3.detail1') || 'Automate generation of daily, weekly, and monthly reports',
        t('services.card3.detail2') || 'Create custom report templates with your branding',
        t('services.card3.detail3') || 'Distribute reports automatically to relevant stakeholders',
        t('services.card3.detail4') || 'Schedule reports to ensure timely delivery'
      ]
    },
    {
      id: 'notifications',
      title: 'services.card4.title',
      description: 'services.card4.description',
      icon: '/icons/email.svg',
      details: [
        t('services.card4.detail1') || 'Set up automated email campaigns and follow-ups',
        t('services.card4.detail2') || 'Create notification systems for important business events',
        t('services.card4.detail3') || 'Automate customer communication and feedback collection',
        t('services.card4.detail4') || 'Implement SMS and other notification channels'
      ]
    },
    {
      id: 'api-integration',
      title: 'services.card5.title',
      description: 'services.card5.description',
      icon: '/icons/api.svg',
      details: [
        t('services.card5.detail1') || 'Connect different software systems via API integration',
        t('services.card5.detail2') || 'Streamline data flow between different business applications',
        t('services.card5.detail3') || 'Create custom API endpoints for specific business needs',
        t('services.card5.detail4') || 'Maintain and monitor integrations for reliability'
      ]
    },
    {
      id: 'backup',
      title: 'services.card6.title',
      description: 'services.card6.description',
      icon: '/icons/backup.svg',
      details: [
        t('services.card6.detail1') || 'Implement scheduled automated backup systems',
        t('services.card6.detail2') || 'Create data recovery procedures and testing protocols',
        t('services.card6.detail3') || 'Set up secure offsite backup storage solutions',
        t('services.card6.detail4') || 'Monitor backup status and receive notifications on issues'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('services.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {t('services.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} type="fade-up" duration={800} delay={index * 100}>
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
                    <h3 className="text-xl font-semibold">{t(service.title)}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{t(service.description)}</p>
                  
                  <h4 className="font-medium text-lg mb-3">{t('services.features') || 'Key Features'}</h4>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition duration-300 w-full">
                    {t('services.get_started') || 'Get Started'}
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">{t('services.custom_solutions') || 'Custom Automation Solutions'}</h2>
            
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('services.custom_description') || 'Need a custom automation solution tailored specifically to your business needs? Our team of experts can design and implement a solution that addresses your unique challenges.'}
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300">
                  {t('services.contact_us') || 'Contact Us for Custom Solutions'}
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