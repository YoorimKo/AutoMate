'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const { t, language } = useLanguage();

  // 서비스 카드 데이터
  const services = [
    {
      id: 'data-processing',
      icon: '/icons/data-processing.svg',
      title: language === 'ko' ? '데이터 처리 자동화' : 'Data Processing Automation',
      description: language === 'ko' ? 
        '반복적인 데이터 입력, 정리, 변환 작업을 자동화하여 시간을 절약하고 오류를 줄입니다. 대량의 정보도 신속하게 처리합니다.' : 
        'Automate repetitive data entry, cleaning, and transformation tasks to save time and reduce errors.',
    },
    {
      id: 'workflow',
      icon: '/icons/workflow.svg',
      title: language === 'ko' ? '워크플로우 자동화' : 'Workflow Automation',
      description: language === 'ko' ? 
        '업무 프로세스를 자동화하여 작업 효율성을 높이고 부서 간 협업을 개선합니다. 승인 과정, 문서 관리, 작업 할당을 간소화합니다.' : 
        'Streamline business processes to improve operational efficiency and cross-department collaboration.',
    },
    {
      id: 'report-generation',
      icon: '/icons/report.svg',
      title: language === 'ko' ? '보고서 자동 생성' : 'Automated Reporting',
      description: language === 'ko' ? 
        '데이터 수집부터 보고서 생성까지 전 과정을 자동화합니다. 정확한 데이터를 바탕으로 시각적으로 뛰어난 보고서를 자동으로 생성합니다.' : 
        'Automatically generate comprehensive reports with the latest data, formatted professionally and delivered on schedule.',
    },
    {
      id: 'email-notification',
      icon: '/icons/email.svg',
      title: language === 'ko' ? '이메일 및 알림 자동화' : 'Email & Notification Automation',
      description: language === 'ko' ? 
        '중요한 이벤트, 마감일, 상태 변경에 대한 자동 알림을 설정하여 커뮤니케이션을 강화하고 후속 조치를 보장합니다.' : 
        'Set up automatic alerts for important events, deadlines, and status changes to enhance communication.',
    },
    {
      id: 'api-integration',
      icon: '/icons/api.svg',
      title: language === 'ko' ? 'API 통합 서비스' : 'API Integration Services',
      description: language === 'ko' ? 
        '다양한 시스템과 앱을 원활하게 연결하여 데이터 흐름을 자동화합니다. 기존 도구와의 통합으로 작업 환경을 최적화합니다.' : 
        'Connect different systems and applications to create a seamless flow of information across your organization.',
    },
    {
      id: 'backup-recovery',
      icon: '/icons/backup.svg',
      title: language === 'ko' ? '백업 및 복구 자동화' : 'Backup & Recovery Automation',
      description: language === 'ko' ? 
        '중요한 데이터의 자동 백업 일정을 설정하고 필요할 때 신속하게 복구할 수 있는 시스템을 구축합니다. 데이터 손실 위험을 최소화합니다.' : 
        'Schedule automatic backups of critical data and create systems for rapid recovery when needed.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* 헤더 섹션 */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {language === 'ko' ? '업무 자동화 서비스' : 'Automation Services'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko' ? 
                '반복적인 작업을 자동화하여 업무 효율성을 높이고 인적 오류를 줄이는 다양한 서비스를 제공합니다.' : 
                'We offer a range of services to automate repetitive tasks, improve efficiency, and reduce human error.'}
            </p>
          </ScrollAnimation>
          
          {/* 서비스 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} type="fade-up" duration={800} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Link href={`/contact?service=${service.id}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                    {language === 'ko' ? '자세히 알아보기' : 'Learn More'}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* 특징 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <ScrollAnimation type="fade-right" duration={800}>
                <div className="bg-blue-600 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-80 z-0"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">
                      {language === 'ko' ? '왜 우리의 자동화 서비스를 선택해야 할까요?' : 'Why Choose Our Automation Services?'}
                    </h2>
                    <p className="mb-6">
                      {language === 'ko' ? 
                        '우리의 자동화 솔루션은 유연하고 확장 가능하며 기존 시스템과 쉽게 통합됩니다. 비즈니스 요구에 맞춘 맞춤형 솔루션을 제공합니다.' : 
                        'Our automation solutions are designed to be flexible, scalable, and easy to integrate with your existing systems.'}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-200 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'ko' ? '비즈니스 요구에 맞춘 맞춤형 솔루션' : 'Tailored solutions for your specific business needs'}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-200 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'ko' ? '기존 워크플로우와의 원활한 통합' : 'Seamless integration with existing workflows'}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-200 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'ko' ? '지속적인 지원 및 개선' : 'Continuous support and improvement'}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-200 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'ko' ? '비즈니스 성장에 따라 확장 가능한 솔루션' : 'Scalable solutions that grow with your business'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            
            <div className="lg:w-1/2">
              <ScrollAnimation type="fade-left" duration={800}>
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'ko' ? '우리의 접근 방식' : 'Our Approach'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {language === 'ko' ? 
                    '저희는 자동화에 협력적인 접근 방식을 취합니다. 고객의 고유한 과제를 이해하고 실질적인 비즈니스 가치를 제공하는 솔루션을 설계하기 위해 긴밀히 협력합니다.' : 
                    'We believe in a collaborative approach to automation. We work closely with you to understand your unique challenges and design solutions that deliver real business value.'}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko' ? '비즈니스 이해하기' : 'Understand Your Business'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {language === 'ko' ? 
                          '고객의 비즈니스 프로세스, 과제, 목표를 이해하는 것부터 시작합니다.' : 
                          'We start by understanding your business processes, challenges, and goals.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko' ? '맞춤형 솔루션 설계' : 'Design Custom Solutions'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {language === 'ko' ? 
                          '고객의 특정 요구사항에 맞는 자동화 솔루션을 설계합니다.' : 
                          'We design automation solutions tailored to your specific requirements.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko' ? '구현 및 통합' : 'Implement & Integrate'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {language === 'ko' ? 
                          '솔루션을 구현하고 기존 시스템과 통합합니다.' : 
                          'We implement the solution and integrate it with your existing systems.'}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ko' ? '비즈니스 자동화를 시작할 준비가 되셨나요?' : 'Ready to Automate Your Business?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {language === 'ko' ? 
                '프로세스 간소화와 생산성 향상을 위한 방법을 알아보기 위해 전문가 팀에 문의하세요.' : 
                'Get in touch with our team of experts to learn how we can help you streamline your processes and boost productivity.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '상담 신청하기' : 'Request Consultation'}
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '요금제 보기' : 'View Pricing'}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 