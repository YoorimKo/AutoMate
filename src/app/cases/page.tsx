'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CasesPage() {
  const { t } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'finance',
      titleKey: 'cases.case1.title',
      titleFallback: 'Financial Services Company',
      industryKey: 'cases.case1.industry',
      industryFallback: 'Financial Services',
      challengeKey: 'cases.case1.challenge',
      challengeFallback: 'A leading financial services company was struggling with manual data processing that required extensive man-hours and was prone to errors. Their monthly reporting process took an average of 5 days to complete, causing delays in decision-making.',
      solutionKey: 'cases.case1.solution',
      solutionFallback: 'We implemented an end-to-end data processing automation solution that automatically collected data from multiple sources, performed necessary calculations, and generated standardized reports. The system included validation checks to ensure data accuracy.',
      resultKeys: [
        'cases.case1.result1', 
        'cases.case1.result2', 
        'cases.case1.result3', 
        'cases.case1.result4'
      ],
      resultFallbacks: [
        'Reduced report generation time from 5 days to 4 hours',
        'Eliminated manual data entry errors',
        'Saved approximately 120 man-hours per month',
        'Improved decision-making with more timely information'
      ],
      testimonialKey: 'cases.case1.testimonial',
      testimonialFallback: '"The automation solution transformed our reporting process completely. What used to take almost a week now happens overnight, and the data quality has improved significantly."',
      personKey: 'cases.case1.person',
      personFallback: 'CFO, Financial Services Company'
    },
    {
      id: 'healthcare',
      titleKey: 'cases.case2.title',
      titleFallback: 'Healthcare Provider',
      industryKey: 'cases.case2.industry',
      industryFallback: 'Healthcare',
      challengeKey: 'cases.case2.challenge',
      challengeFallback: 'A healthcare provider was struggling with patient appointment scheduling and follow-up communications. Staff spent hours each day making phone calls and sending manual emails, resulting in missed appointments and inefficient resource allocation.',
      solutionKey: 'cases.case2.solution',
      solutionFallback: 'We developed an automated scheduling and communication system that sent appointment reminders, follow-up messages, and collected patient feedback. The system integrated with their existing patient management software and provided a dashboard for monitoring engagement.',
      resultKeys: [
        'cases.case2.result1', 
        'cases.case2.result2', 
        'cases.case2.result3', 
        'cases.case2.result4'
      ],
      resultFallbacks: [
        'Reduced no-show rate by 35%',
        'Saved 25 hours per week in administrative time',
        'Increased patient satisfaction scores by 28%',
        'Improved resource utilization across departments'
      ],
      testimonialKey: 'cases.case2.testimonial',
      testimonialFallback: '"The automated communication system has been a game-changer for our practice. Our staff now focuses on patient care instead of administrative tasks, and our schedule runs much more efficiently."',
      personKey: 'cases.case2.person',
      personFallback: 'Medical Director, Healthcare Provider'
    },
    {
      id: 'retail',
      titleKey: 'cases.case3.title',
      titleFallback: 'E-commerce Retailer',
      industryKey: 'cases.case3.industry',
      industryFallback: 'Retail',
      challengeKey: 'cases.case3.challenge',
      challengeFallback: 'A growing e-commerce retailer was struggling with inventory management and order processing as their business scaled. Manual inventory updates led to stockouts and overselling, while order processing delays affected customer satisfaction.',
      solutionKey: 'cases.case3.solution',
      solutionFallback: 'We implemented an automated inventory and order management system that synchronized data across multiple sales channels, automatically updated inventory levels, and streamlined the order fulfillment process with prioritization rules.',
      resultKeys: [
        'cases.case3.result1', 
        'cases.case3.result2', 
        'cases.case3.result3', 
        'cases.case3.result4'
      ],
      resultFallbacks: [
        'Reduced order processing time by 65%',
        'Decreased inventory discrepancies by 92%',
        'Increased same-day shipping rate from 60% to 95%',
        'Improved customer satisfaction scores by 40%'
      ],
      testimonialKey: 'cases.case3.testimonial',
      testimonialFallback: '"The automation system allowed us to scale our business without proportionally increasing our team size. We can now handle three times the order volume with the same staff, and our customers are happier with the faster service."',
      personKey: 'cases.case3.person',
      personFallback: 'Operations Manager, E-commerce Retailer'
    },
    {
      id: 'manufacturing',
      titleKey: 'cases.case4.title',
      titleFallback: 'Manufacturing Company',
      industryKey: 'cases.case4.industry',
      industryFallback: 'Manufacturing',
      challengeKey: 'cases.case4.challenge',
      challengeFallback: 'A manufacturing company was experiencing production delays due to inefficient quality control processes and lack of real-time visibility into machine performance. Manual data collection resulted in delayed identification of issues.',
      solutionKey: 'cases.case4.solution',
      solutionFallback: 'We implemented an IoT-based automation system that collected real-time data from manufacturing equipment, analyzed performance metrics, and alerted maintenance teams of potential issues before they caused downtime.',
      resultKeys: [
        'cases.case4.result1', 
        'cases.case4.result2', 
        'cases.case4.result3', 
        'cases.case4.result4'
      ],
      resultFallbacks: [
        'Reduced unplanned downtime by 47%',
        'Increased overall equipment effectiveness by 23%',
        'Decreased quality control process time by 35%',
        'Improved production output by 18% with the same resources'
      ],
      testimonialKey: 'cases.case4.testimonial',
      testimonialFallback: '"The real-time monitoring and automated alerts have transformed our maintenance from reactive to predictive. We\'ve significantly reduced downtime and improved our production efficiency."',
      personKey: 'cases.case4.person',
      personFallback: 'Plant Manager, Manufacturing Company'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('cases.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {t('cases.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="flex flex-col items-center">
            {/* Case Study Navigator */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {caseStudies.map((caseStudy, index) => (
                <button
                  key={caseStudy.id}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeCase === index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  {t(caseStudy.titleKey) || caseStudy.titleFallback}
                </button>
              ))}
            </div>
            
            {/* Active Case Content */}
            <ScrollAnimation type="fade-in" duration={500} key={activeCase}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:w-2/3 pr-0 md:pr-8">
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {t(caseStudies[activeCase].industryKey) || caseStudies[activeCase].industryFallback}
                    </div>
                    <h2 className="text-2xl font-bold mb-6">
                      {t(caseStudies[activeCase].titleKey) || caseStudies[activeCase].titleFallback}
                    </h2>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">
                        {t('cases.challenge')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t(caseStudies[activeCase].challengeKey) || caseStudies[activeCase].challengeFallback}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">
                        {t('cases.solution')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t(caseStudies[activeCase].solutionKey) || caseStudies[activeCase].solutionFallback}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mt-6 md:mt-0 flex-shrink-0">
                    <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">
                      {t('cases.result')}
                    </h3>
                    <ul className="space-y-3">
                      {caseStudies[activeCase].resultKeys.map((key, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {t(key) || caseStudies[activeCase].resultFallbacks[i]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <blockquote className="italic text-gray-600 dark:text-gray-300 text-lg mb-2">
                    {t(caseStudies[activeCase].testimonialKey) || caseStudies[activeCase].testimonialFallback}
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    — {t(caseStudies[activeCase].personKey) || caseStudies[activeCase].personFallback}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300">
                    {t('cases.cta')}
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">{t('cases.results_title') || 'Our Impact by the Numbers'}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('cases.metric1') || 'Automation Projects'}</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">45%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('cases.metric2') || 'Average Time Savings'}</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('cases.metric3') || 'Cost Reduction'}</div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('cases.metric4') || 'Client Satisfaction'}</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 