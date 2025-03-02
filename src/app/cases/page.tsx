'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CasesPage() {
  const { language } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'finance',
      title: language === 'ko' ? '금융 서비스 기업' : 'Financial Services Company',
      industry: language === 'ko' ? '금융 서비스' : 'Financial Services',
      challenge: language === 'ko' 
        ? '선도적인 금융 서비스 기업이 많은 인력 시간이 필요하고 오류가 발생하기 쉬운 수동 데이터 처리로 어려움을 겪고 있었습니다. 월간 보고서 작성 과정에 평균 5일이 소요되어 의사결정이 지연되었습니다.' 
        : 'A leading financial services company was struggling with manual data processing that required extensive man-hours and was prone to errors. Their monthly reporting process took an average of 5 days to complete, causing delays in decision-making.',
      solution: language === 'ko'
        ? '여러 소스에서 자동으로 데이터를 수집하고, 필요한 계산을 수행하며, 표준화된 보고서를 생성하는 엔드투엔드 데이터 처리 자동화 솔루션을 구현했습니다. 시스템에는 데이터 정확성을 보장하는 검증 확인 기능이 포함되었습니다.'
        : 'We implemented an end-to-end data processing automation solution that automatically collected data from multiple sources, performed necessary calculations, and generated standardized reports. The system included validation checks to ensure data accuracy.',
      results: [
        language === 'ko' ? '보고서 생성 시간을 5일에서 4시간으로 단축' : 'Reduced report generation time from 5 days to 4 hours',
        language === 'ko' ? '수동 데이터 입력 오류 제거' : 'Eliminated manual data entry errors',
        language === 'ko' ? '월 약 120시간의 인력 시간 절약' : 'Saved approximately 120 man-hours per month',
        language === 'ko' ? '더 신속한 정보로 의사결정 개선' : 'Improved decision-making with more timely information'
      ],
      testimonial: language === 'ko' 
        ? '"자동화 솔루션은 우리의 보고 프로세스를 완전히 변화시켰습니다. 예전에는 거의 일주일이 걸렸던 작업이 이제는 하룻밤 사이에 완료되며, 데이터 품질도 크게 향상되었습니다."' 
        : '"The automation solution transformed our reporting process completely. What used to take almost a week now happens overnight, and the data quality has improved significantly."',
      person: language === 'ko' ? 'CFO, 금융 서비스 기업' : 'CFO, Financial Services Company'
    },
    {
      id: 'healthcare',
      title: language === 'ko' ? '의료 서비스 제공자' : 'Healthcare Provider',
      industry: language === 'ko' ? '의료' : 'Healthcare',
      challenge: language === 'ko'
        ? '의료 서비스 제공자가 환자 예약 일정 및 후속 커뮤니케이션에 어려움을 겪고 있었습니다. 직원들은 매일 수 시간 동안 전화 통화와 수동 이메일 발송에 시간을 소비했으며, 이는 예약 누락과 비효율적인 자원 할당으로 이어졌습니다.'
        : 'A healthcare provider was struggling with patient appointment scheduling and follow-up communications. Staff spent hours each day making phone calls and sending manual emails, resulting in missed appointments and inefficient resource allocation.',
      solution: language === 'ko'
        ? '예약 알림, 후속 메시지 전송 및 환자 피드백을 수집하는 자동화된 일정 관리 및 커뮤니케이션 시스템을 개발했습니다. 이 시스템은 기존 환자 관리 소프트웨어와 통합되어 참여도를 모니터링할 수 있는 대시보드를 제공했습니다.'
        : 'We developed an automated scheduling and communication system that sent appointment reminders, follow-up messages, and collected patient feedback. The system integrated with their existing patient management software and provided a dashboard for monitoring engagement.',
      results: [
        language === 'ko' ? '노쇼율 35% 감소' : 'Reduced no-show rate by 35%',
        language === 'ko' ? '주당 행정 시간 25시간 절약' : 'Saved 25 hours per week in administrative time',
        language === 'ko' ? '환자 만족도 점수 28% 증가' : 'Increased patient satisfaction scores by 28%',
        language === 'ko' ? '부서 간 자원 활용도 개선' : 'Improved resource utilization across departments'
      ],
      testimonial: language === 'ko'
        ? '"자동화된 커뮤니케이션 시스템은 우리 병원에 게임 체인저였습니다. 직원들은 이제 행정 업무 대신 환자 치료에 집중하며, 진료 일정이 훨씬 효율적으로 운영됩니다."'
        : '"The automated communication system has been a game-changer for our practice. Our staff now focuses on patient care instead of administrative tasks, and our schedule runs much more efficiently."',
      person: language === 'ko' ? '의료 이사, 병원' : 'Medical Director, Healthcare Provider'
    },
    {
      id: 'retail',
      title: language === 'ko' ? '이커머스 리테일러' : 'E-commerce Retailer',
      industry: language === 'ko' ? '소매업' : 'Retail',
      challenge: language === 'ko'
        ? '성장하는 이커머스 소매업체가 비즈니스 규모가 확장됨에 따라 재고 관리 및 주문 처리에 어려움을 겪고 있었습니다. 수동 재고 업데이트로 인해 재고 부족 및 과잉 판매가 발생했으며, 주문 처리 지연은 고객 만족도에 영향을 미쳤습니다.'
        : 'A growing e-commerce retailer was struggling with inventory management and order processing as their business scaled. Manual inventory updates led to stockouts and overselling, while order processing delays affected customer satisfaction.',
      solution: language === 'ko'
        ? '여러 판매 채널 간에 데이터를 동기화하고, 재고 수준을 자동으로 업데이트하며, 우선순위 규칙으로 주문 이행 프로세스를 간소화하는 자동화된 재고 및 주문 관리 시스템을 구현했습니다.'
        : 'We implemented an automated inventory and order management system that synchronized data across multiple sales channels, automatically updated inventory levels, and streamlined the order fulfillment process with prioritization rules.',
      results: [
        language === 'ko' ? '주문 처리 시간 65% 단축' : 'Reduced order processing time by 65%',
        language === 'ko' ? '재고 불일치 92% 감소' : 'Decreased inventory discrepancies by 92%',
        language === 'ko' ? '당일 발송률 60%에서 95%로 증가' : 'Increased same-day shipping rate from 60% to 95%',
        language === 'ko' ? '고객 만족도 점수 40% 개선' : 'Improved customer satisfaction scores by 40%'
      ],
      testimonial: language === 'ko'
        ? '"자동화 시스템 덕분에 팀 규모를 비례적으로 늘리지 않고도 비즈니스를 확장할 수 있었습니다. 이제 같은 직원 수로 3배의 주문량을 처리할 수 있으며, 고객들은 더 빠른 서비스에 더 만족하고 있습니다."'
        : '"The automation system allowed us to scale our business without proportionally increasing our team size. We can now handle three times the order volume with the same staff, and our customers are happier with the faster service."',
      person: language === 'ko' ? '운영 매니저, 이커머스 리테일러' : 'Operations Manager, E-commerce Retailer'
    },
    {
      id: 'manufacturing',
      title: language === 'ko' ? '제조 기업' : 'Manufacturing Company',
      industry: language === 'ko' ? '제조업' : 'Manufacturing',
      challenge: language === 'ko'
        ? '제조 기업이 비효율적인 품질 관리 프로세스와 기계 성능에 대한 실시간 가시성 부족으로 생산 지연을 경험하고 있었습니다. 수동 데이터 수집으로 인해 문제 식별이 지연되었습니다.'
        : 'A manufacturing company was experiencing production delays due to inefficient quality control processes and lack of real-time visibility into machine performance. Manual data collection resulted in delayed identification of issues.',
      solution: language === 'ko'
        ? '제조 장비에서 실시간 데이터를 수집하고, 성능 지표를 분석하며, 다운타임을 발생시키기 전에 잠재적 문제에 대해 유지보수 팀에 경고하는 IoT 기반 자동화 시스템을 구현했습니다.'
        : 'We implemented an IoT-based automation system that collected real-time data from manufacturing equipment, analyzed performance metrics, and alerted maintenance teams of potential issues before they caused downtime.',
      results: [
        language === 'ko' ? '계획되지 않은 다운타임 47% 감소' : 'Reduced unplanned downtime by 47%',
        language === 'ko' ? '전체 장비 효율성 23% 증가' : 'Increased overall equipment effectiveness by 23%',
        language === 'ko' ? '품질 관리 프로세스 시간 35% 감소' : 'Decreased quality control process time by 35%',
        language === 'ko' ? '같은 자원으로 생산 산출량 18% 향상' : 'Improved production output by 18% with the same resources'
      ],
      testimonial: language === 'ko'
        ? '"실시간 모니터링과 자동화된 경고 시스템은 우리의 유지보수를 사후 대응에서 예측 대응으로 변화시켰습니다. 다운타임을 크게 줄이고 생산 효율성을 향상시켰습니다."'
        : '"The real-time monitoring and automated alerts have transformed our maintenance from reactive to predictive. We\'ve significantly reduced downtime and improved our production efficiency."',
      person: language === 'ko' ? '공장 관리자, 제조 기업' : 'Plant Manager, Manufacturing Company'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {language === 'ko' ? '성공 사례' : 'Success Stories'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko' 
                ? '다양한 산업 분야에서 자동화를 통해 비즈니스를 혁신한 고객 사례를 확인하세요.'
                : 'Explore how our clients across various industries have transformed their businesses through automation.'}
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
                  {caseStudy.title}
                </button>
              ))}
            </div>
            
            {/* Active Case Content */}
            <ScrollAnimation type="fade-in" duration={500} key={activeCase}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:w-2/3 pr-0 md:pr-8">
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {caseStudies[activeCase].industry}
                    </div>
                    <h2 className="text-2xl font-bold mb-6">
                      {caseStudies[activeCase].title}
                    </h2>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">
                        {language === 'ko' ? '도전 과제' : 'Challenge'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {caseStudies[activeCase].challenge}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">
                        {language === 'ko' ? '해결책' : 'Solution'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {caseStudies[activeCase].solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mt-6 md:mt-0 flex-shrink-0">
                    <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">
                      {language === 'ko' ? '결과' : 'Results'}
                    </h3>
                    <ul className="space-y-3">
                      {caseStudies[activeCase].results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <blockquote className="italic text-gray-600 dark:text-gray-300 text-lg mb-2">
                    {caseStudies[activeCase].testimonial}
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    — {caseStudies[activeCase].person}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300">
                    {language === 'ko' ? '자동화 솔루션 상담하기' : 'Discuss Your Automation Needs'}
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
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ko' ? '수치로 보는 우리의 영향력' : 'Our Impact by the Numbers'}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'ko' ? '자동화 프로젝트' : 'Automation Projects'}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">45%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'ko' ? '평균 시간 절약' : 'Average Time Savings'}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'ko' ? '비용 절감' : 'Cost Reduction'}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'ko' ? '고객 만족도' : 'Client Satisfaction'}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ko' ? '귀사의 성공 스토리를 만들어 보세요' : 'Ready to Create Your Success Story?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {language === 'ko'
                ? '비즈니스 프로세스 자동화를 통해 효율성을 높이고 경쟁력을 강화하세요. 저희 전문가와 상담을 시작해보세요.'
                : 'Enhance your efficiency and competitiveness through business process automation. Start a conversation with our experts today.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '상담 예약하기' : 'Schedule a Consultation'}
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