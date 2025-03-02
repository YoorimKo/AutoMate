'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';
import Image from 'next/image';

export default function BenefitsPage() {
  const { t, language } = useLanguage();
  
  // 자동화의 이점 항목
  const benefits = [
    {
      id: 'time-saving',
      icon: '/icons/clock.svg',
      title: language === 'ko' ? '시간 절약' : 'Time Saving',
      description: language === 'ko' 
        ? '반복적인 작업을 자동화하여 직원들이 더 가치 있는 업무에 집중할 수 있도록 합니다. 일일 작업 시간을 최대 85%까지 줄일 수 있습니다.'
        : 'Automate repetitive tasks so your employees can focus on more valuable work. Reduce daily task time by up to 85%.',
    },
    {
      id: 'cost-reduction',
      icon: '/icons/money.svg',
      title: language === 'ko' ? '비용 절감' : 'Cost Reduction',
      description: language === 'ko'
        ? '수동 프로세스 비용을 줄이고 운영 효율성을 높여 장기적인 비용 절감 효과를 제공합니다. 평균 운영 비용을 60% 절감합니다.'
        : 'Reduce manual process costs and increase operational efficiency for long-term savings. Average 60% reduction in operational costs.',
    },
    {
      id: 'error-reduction',
      icon: '/icons/shield.svg',
      title: language === 'ko' ? '오류 감소' : 'Error Reduction',
      description: language === 'ko'
        ? '인적 오류를 제거하여 데이터 품질을 향상시키고 재작업 필요성을 줄입니다. 데이터 처리 오류를 최대 98% 줄일 수 있습니다.'
        : 'Eliminate human errors to improve data quality and reduce the need for rework. Reduce data processing errors by up to 98%.',
    },
    {
      id: 'productivity-improvement',
      icon: '/icons/chart.svg',
      title: language === 'ko' ? '생산성 향상' : 'Productivity Improvement',
      description: language === 'ko'
        ? '직원들이 전략적인 과제에 집중할 수 있게 하여 전반적인 생산성과 혁신을 촉진합니다. 생산성이 평균 3.5배 증가합니다.'
        : 'Enable employees to focus on strategic tasks, enhancing overall productivity and innovation. Average 3.5x increase in productivity.',
    },
    {
      id: 'data-driven',
      icon: '/icons/chart-pie.svg',
      title: language === 'ko' ? '데이터 기반 의사결정' : 'Data-Driven Decisions',
      description: language === 'ko'
        ? '실시간 데이터와 분석을 통해 더 나은 의사결정을 지원합니다. 풍부한 데이터로 비즈니스 통찰력을 강화합니다.'
        : 'Support better decision-making with real-time data and analytics. Enhanced business insights through enriched data.',
    },
    {
      id: 'employee-satisfaction',
      icon: '/icons/happy.svg',
      title: language === 'ko' ? '직원 만족도 향상' : 'Improved Employee Satisfaction',
      description: language === 'ko'
        ? '반복적인 작업을 제거하여 직원 만족도를 높이고 이직률을 낮춥니다. 더 의미 있고 창의적인 작업에 집중할 수 있습니다.'
        : 'Eliminate tedious tasks to improve employee satisfaction and reduce turnover. Allow focus on more meaningful and creative work.',
    },
  ];
  
  // 통계 데이터
  const stats = [
    {
      value: '85%',
      label: language === 'ko' ? '반복 작업 시간 절약' : 'Time saved on repetitive tasks',
    },
    {
      value: '45%',
      label: language === 'ko' ? '프로세스 오류 감소' : 'Error reduction in processes',
    },
    {
      value: '60%',
      label: language === 'ko' ? '장기적 비용 절감' : 'Cost savings in the long term',
    },
    {
      value: '3.5x',
      label: language === 'ko' ? '생산성 향상' : 'Productivity improvement',
    },
  ];
  
  // 고객 후기
  const testimonials = [
    {
      quote: language === 'ko' 
        ? '고객 서비스 부서에 자동화를 구현한 결과, 응답 시간이 70% 감소하고 고객 만족도 점수가 45% 향상되었습니다.'
        : 'Implementing automation in our customer service department has reduced response times by 70% and improved customer satisfaction scores by 45%.',
      author: language === 'ko' ? '사라 존슨, 고객 서비스 이사' : 'Sarah Johnson, Customer Service Director',
      company: language === 'ko' ? '글로벌 리테일(주)' : 'Global Retail Inc.',
    },
    {
      quote: language === 'ko'
        ? '데이터 처리 자동화는 시장 동향을 분석하는 방식을 완전히 바꿔놓았습니다. 이전에는 며칠이 걸리던 작업이 이제는 몇 분 만에 완료됩니다.'
        : 'The data processing automation has completely transformed how we analyze market trends. What used to take us days now takes just minutes.',
      author: language === 'ko' ? '마이클 첸, 데이터 분석가' : 'Michael Chen, Data Analyst',
      company: language === 'ko' ? '파이낸셜 인사이트(주)' : 'Financial Insights Co.',
    },
    {
      quote: language === 'ko'
        ? '이제 우리 팀은 단순 작업 대신 창의적인 솔루션에 집중할 수 있게 되었습니다. 자동화 시스템을 구현한 이후로 직원 만족도가 크게 증가했습니다.'
        : 'Our team is now able to focus on creative solutions instead of mundane tasks. Employee satisfaction has increased dramatically since implementing the automation systems.',
      author: language === 'ko' ? '엘레나 로드리게즈, HR 매니저' : 'Elena Rodriguez, HR Manager',
      company: language === 'ko' ? '테크 이노베이션(주)' : 'Tech Innovations Ltd.',
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
              {language === 'ko' ? '자동화의 이점' : 'Benefits of Automation'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko' 
                ? '업무 자동화를 통해 기업이 얻을 수 있는 주요 이점과 실질적인 비즈니스 성과를 확인해보세요.'
                : 'Discover the key advantages and tangible business outcomes your organization can achieve through automation.'}
            </p>
          </ScrollAnimation>
          
          {/* 이점 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.id} type="fade-up" duration={800} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* 통계 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-16">
              {language === 'ko' ? '자동화의 효과 (수치로 확인)' : 'Automation by the Numbers'}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* 비교 섹션 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ko' ? '수동 프로세스 vs 자동화 프로세스' : 'Manual vs Automated Processes'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  {language === 'ko' ? '수동 프로세스' : 'Manual Processes'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '시간 소모적인 반복 작업' : 'Time-consuming repetitive tasks'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '인적 오류 발생 가능성' : 'Prone to human errors'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '확장성 제한' : 'Limited scalability'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '일관되지 않은 결과물 품질' : 'Inconsistent output quality'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '장기적으로 높은 비용 발생' : 'Higher long-term costs'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-600 dark:bg-blue-700 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'ko' ? '자동화 프로세스' : 'Automated Processes'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">
                      {language === 'ko' ? '작업의 빠른 실행' : 'Rapid execution of tasks'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">
                      {language === 'ko' ? '일관된 정확성' : 'Consistent accuracy'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">
                      {language === 'ko' ? '성장에 맞춰 쉽게 확장 가능' : 'Easily scalable to handle growth'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">
                      {language === 'ko' ? '일관된 고품질 결과물' : 'Consistent high-quality results'}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">
                      {language === 'ko' ? '장기적으로 낮은 비용' : 'Lower long-term costs'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ko' ? '고객 후기' : 'What Our Clients Say'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 relative">
                  <div className="mb-6 text-gray-600 dark:text-gray-300">
                    <svg className="w-8 h-8 text-blue-400 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="italic">{testimonial.quote}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ko' ? '이러한 이점을 경험할 준비가 되셨나요?' : 'Ready to Experience These Benefits?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {language === 'ko'
                ? '지금 비즈니스 프로세스 자동화를 시작하고 생산성과 최종 결과에 미치는 영향을 확인하세요.'
                : 'Start automating your business processes today and see the difference it makes to your productivity and bottom line.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '지금 문의하기' : 'Contact Us Now'}
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '서비스 살펴보기' : 'Explore Our Services'}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 