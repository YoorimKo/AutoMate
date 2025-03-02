'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProcessPage() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'analysis',
      title: 'process.step1.title',
      description: 'process.step1.description',
      icon: '/icons/analysis.svg',
      details: [
        t('process.step1.detail1') || 'Conduct comprehensive interviews with stakeholders',
        t('process.step1.detail2') || 'Document current business processes and pain points',
        t('process.step1.detail3') || 'Identify opportunities for automation and improvement',
        t('process.step1.detail4') || 'Define key metrics and expected outcomes'
      ],
      timeframe: t('process.step1.timeframe') || '1-2 weeks'
    },
    {
      id: 'design',
      title: 'process.step2.title',
      description: 'process.step2.description',
      icon: '/icons/design.svg',
      details: [
        t('process.step2.detail1') || 'Create detailed solution architecture and data flow diagrams',
        t('process.step2.detail2') || 'Select appropriate technologies and integration methods',
        t('process.step2.detail3') || 'Design user interfaces and experience flows',
        t('process.step2.detail4') || 'Present solution design for stakeholder approval'
      ],
      timeframe: t('process.step2.timeframe') || '2-3 weeks'
    },
    {
      id: 'development',
      title: 'process.step3.title',
      description: 'process.step3.description',
      icon: '/icons/development.svg',
      details: [
        t('process.step3.detail1') || 'Set up development environment and version control',
        t('process.step3.detail2') || 'Implement core automation logic and business rules',
        t('process.step3.detail3') || 'Create necessary integrations with existing systems',
        t('process.step3.detail4') || 'Conduct regular progress reviews and demonstrations'
      ],
      timeframe: t('process.step3.timeframe') || '4-8 weeks'
    },
    {
      id: 'testing',
      title: 'process.step4.title',
      description: 'process.step4.description',
      icon: '/icons/testing.svg',
      details: [
        t('process.step4.detail1') || 'Develop comprehensive test plans and test cases',
        t('process.step4.detail2') || 'Perform functional, integration, and performance testing',
        t('process.step4.detail3') || 'Conduct user acceptance testing with key stakeholders',
        t('process.step4.detail4') || 'Document and resolve all identified issues'
      ],
      timeframe: t('process.step4.timeframe') || '2-3 weeks'
    },
    {
      id: 'deployment',
      title: 'process.step5.title',
      description: 'process.step5.description',
      icon: '/icons/deployment.svg',
      details: [
        t('process.step5.detail1') || 'Create detailed deployment and rollback plans',
        t('process.step5.detail2') || 'Conduct training sessions for end-users and administrators',
        t('process.step5.detail3') || 'Migrate data and configure production environments',
        t('process.step5.detail4') || 'Monitor system performance during initial deployment'
      ],
      timeframe: t('process.step5.timeframe') || '1-2 weeks'
    },
    {
      id: 'support',
      title: 'process.step6.title',
      description: 'process.step6.description',
      icon: '/icons/support.svg',
      details: [
        t('process.step6.detail1') || 'Provide ongoing technical support and maintenance',
        t('process.step6.detail2') || 'Collect user feedback and identify improvement opportunities',
        t('process.step6.detail3') || 'Implement regular updates and enhancements',
        t('process.step6.detail4') || 'Conduct periodic reviews of system performance and ROI'
      ],
      timeframe: t('process.step6.timeframe') || 'Ongoing'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('process.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {t('process.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="flex flex-col items-center">
            {/* Process Step Navigator */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeStep === index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {index + 1}. {t(step.title)}
                </button>
              ))}
            </div>
            
            {/* Active Step Content */}
            <ScrollAnimation type="fade-in" duration={500} key={activeStep}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mr-6">
                    <div className="w-12 h-12 text-blue-600 dark:text-blue-400">
                      {/* Placeholder for icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{t(processSteps[activeStep].title)}</h2>
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {t('process.timeframe') || 'Timeframe'}: {processSteps[activeStep].timeframe}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t(processSteps[activeStep].description)}
                    </p>
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {t('process.key_activities') || 'Key Activities'}
                </h3>
                <ul className="space-y-3 mb-8">
                  {processSteps[activeStep].details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-medium text-lg mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {t('process.deliverables') || 'Deliverables'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t(`process.step${activeStep + 1}.deliverables`) || 'Comprehensive documentation and artifacts relevant to this phase of the automation process.'}
                </p>
                
                <div className="flex justify-between mt-8">
                  <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeStep > 0 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600' 
                        : 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    }`}
                    onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                    disabled={activeStep === 0}
                  >
                    {t('process.previous') || 'Previous Step'}
                  </button>
                  
                  <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeStep < processSteps.length - 1 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'opacity-50 cursor-not-allowed bg-blue-400 text-white'
                    }`}
                    onClick={() => activeStep < processSteps.length - 1 && setActiveStep(activeStep + 1)}
                    disabled={activeStep === processSteps.length - 1}
                  >
                    {t('process.next') || 'Next Step'}
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">{t('process.methodology_title') || 'Our Approach'}</h2>
            
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('process.methodology_description') || 'Our proven methodology combines Agile development practices with industry best practices for business process automation. We emphasize collaboration, transparency, and measurable outcomes throughout the automation journey.'}
              </p>
              
              <div className="flex justify-center mt-8">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300">
                  {t('process.contact_cta') || 'Schedule a Process Consultation'}
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