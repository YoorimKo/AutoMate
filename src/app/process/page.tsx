'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';

export default function ProcessPage() {
  const { t, language } = useLanguage();
  
  // 프로세스 단계 데이터
  const steps = [
    {
      id: 'analysis',
      number: '01',
      title: language === 'ko' ? '요구사항 분석' : 'Requirements Analysis',
      description: language === 'ko' 
        ? '현재 프로세스를 분석하고 자동화할 수 있는 영역을 식별합니다. 비즈니스 목표, 기대 성과, 기술적 제약 사항을 명확히 정의합니다.' 
        : 'We analyze your current processes and identify areas for automation. We clearly define business goals, expected outcomes, and technical constraints.',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    },
    {
      id: 'design',
      number: '02',
      title: language === 'ko' ? '솔루션 설계' : 'Solution Design',
      description: language === 'ko'
        ? '요구사항을 바탕으로 자동화 솔루션의 상세 설계를 개발합니다. 워크플로우, 데이터 흐름, 통합 지점 및 사용자 인터페이스를 포함합니다.'
        : 'We develop detailed designs for the automation solution based on requirements. This includes workflows, data flows, integration points, and user interfaces.',
      iconPath: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2',
    },
    {
      id: 'development',
      number: '03',
      title: language === 'ko' ? '개발 및 구현' : 'Development',
      description: language === 'ko'
        ? '설계를 기반으로 자동화 솔루션을 구축합니다. 필요한 코드와 스크립트를 작성하고 기존 시스템과의 통합을 구현합니다.'
        : 'We build the automation solution based on the design. We write the necessary code and scripts and implement integration with existing systems.',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      id: 'testing',
      number: '04',
      title: language === 'ko' ? '테스트 및 검증' : 'Testing & Validation',
      description: language === 'ko'
        ? '철저한 테스트를 통해 자동화 솔루션이 요구사항을 충족하고 예상대로 작동하는지 확인합니다. 오류를 수정하고 성능을 최적화합니다.'
        : 'We rigorously test the automation solution to ensure it meets requirements and functions as expected. We fix any issues and optimize performance.',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      id: 'deployment',
      number: '05',
      title: language === 'ko' ? '배포 및 교육' : 'Deployment & Training',
      description: language === 'ko'
        ? '솔루션을 프로덕션 환경에 배포하고 사용자에게 사용 방법을 교육합니다. 초기 지원을 제공하여 원활한 전환을 보장합니다.'
        : 'We deploy the solution to the production environment and train users on how to use it. We provide initial support to ensure a smooth transition.',
      iconPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
    },
    {
      id: 'support',
      number: '06',
      title: language === 'ko' ? '지속적인 지원 및 최적화' : 'Ongoing Support & Optimization',
      description: language === 'ko'
        ? '자동화 솔루션의 성능을 모니터링하고 필요한 조정을 수행합니다. 추가 개선 사항을 식별하고 구현하여 가치를 극대화합니다.'
        : 'We monitor the performance of the automation solution and make necessary adjustments. We identify and implement additional improvements to maximize value.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
  ];
  
  // FAQ 항목
  const faqs = [
    {
      question: language === 'ko' ? '구현 프로세스는 일반적으로 얼마나 걸리나요?' : 'How long does the implementation process typically take?',
      answer: language === 'ko' 
        ? '자동화 요구 사항의 복잡성에 따라 구현 일정이 달라집니다. 간단한 워크플로우는 2-4주 내에 구현할 수 있지만, 더 복잡한 기업 솔루션은 2-3개월이 소요될 수 있습니다. 요구사항 분석 단계에서 상세한 일정을 제공해 드립니다.' 
        : 'The implementation timeline varies based on the complexity of your automation needs. Simple workflows can be implemented in 2-4 weeks, while more complex enterprise solutions may take 2-3 months. We\'ll provide a detailed timeline during the requirements analysis phase.',
    },
    {
      question: language === 'ko' ? '자동화 시스템을 사용하기 위해 기술 지식이 필요한가요?' : 'Do I need technical knowledge to use the automation system?',
      answer: language === 'ko'
        ? '아니요, 저희 시스템은 최소한의 기술 지식만 필요로 하는 사용자 친화적인 인터페이스로 설계되어 있습니다. 팀이 구현된 자동화 도구를 효과적으로 사용할 수 있도록 포괄적인 교육과 문서를 제공합니다.'
        : 'No, our systems are designed with user-friendly interfaces that require minimal technical knowledge. We provide comprehensive training and documentation to ensure your team can effectively use the automation tools we implement.',
    },
    {
      question: language === 'ko' ? '자동화 과정에서 데이터 보안을 어떻게 보장하나요?' : 'How do you ensure the security of our data during automation?',
      answer: language === 'ko'
        ? '데이터 보안은 모든 구현에서 최우선 과제입니다. 업계 표준 암호화, 보안 액세스 제어 및 정기적인 보안 감사를 사용합니다. 모든 솔루션은 관련 데이터 보호 규정을 준수하도록 설계되었습니다.'
        : 'Data security is a top priority in all our implementations. We use industry-standard encryption, secure access controls, and regular security audits. All solutions are designed to comply with relevant data protection regulations.',
    },
    {
      question: language === 'ko' ? '구현 후 어떤 지원을 제공하나요?' : 'What kind of support do you provide after implementation?',
      answer: language === 'ko'
        ? '정기 유지보수, 문제 해결, 업데이트 및 최적화를 포함하는 지속적인 지원 패키지를 제공합니다. 지원 팀은 발생하는 모든 문제를 해결하고 자동화 시스템이 계속 효율적으로, 운영되도록 지원합니다.'
        : 'We offer ongoing support packages that include regular maintenance, troubleshooting, updates, and optimization. Our support team is available to address any issues that arise and ensure your automation systems continue to operate efficiently.',
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
              {language === 'ko' ? '자동화 구현 프로세스' : 'Automation Implementation Process'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko'
                ? '비즈니스 프로세스를 성공적으로 자동화하기 위한 체계적인 방법론을 확인하세요.'
                : 'Discover our systematic methodology for successfully automating your business processes.'}
            </p>
          </ScrollAnimation>
          
          {/* 프로세스 단계 */}
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.id} type="fade-up" duration={800} delay={index * 100}>
                <div className="flex flex-col md:flex-row mb-12 relative">
                  {/* 연결선 (데스크톱만) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-10 top-20 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
                  )}
                  
                  {/* 단계 번호 */}
                  <div className="md:w-20 mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* 단계 내용 */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-14">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* 추가 정보 섹션 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation type="fade-right" duration={800}>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'ko' ? '협업 기반 접근 방식' : 'Our Collaborative Approach'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {language === 'ko'
                  ? '성공적인 자동화를 위해서는 저희 팀과 귀사 팀 간의 긴밀한 협력이 필요하다고 믿습니다. 프로세스 전반에 걸쳐 열린 소통 채널을 유지하여 제공되는 솔루션이 정확한 요구사항을 충족하도록 보장합니다.'
                  : 'We believe that successful automation requires close collaboration between our team and yours. Throughout the process, we maintain open communication channels to ensure that the solution we deliver meets your exact requirements.'}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'ko' ? '정기적인 진행 상황 업데이트 및 상담' : 'Regular progress updates and consultations'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'ko' ? '투명한 프로젝트 관리 방법론' : 'Transparent project management methodology'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'ko' ? '주요 의사결정 시점에 귀사 팀의 참여' : 'Involvement of your team at key decision points'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'ko' ? '변화하는 요구사항에 대응할 수 있는 유연성' : 'Flexibility to adapt to changing requirements'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  {language === 'ko' ? '자동화 여정 시작하기' : 'Start your automation journey'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="fade-left" duration={800}>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {language === 'ko' ? '일반적인 프로젝트 일정' : 'Typical Project Timeline'}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0">
                      <span className="block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <div className="w-px h-full bg-blue-200 dark:bg-blue-700 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">{language === 'ko' ? '초기 상담' : 'Initial Consultation'}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'ko' ? '1-2주' : '1-2 weeks'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0">
                      <span className="block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <div className="w-px h-full bg-blue-200 dark:bg-blue-700 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">{language === 'ko' ? '솔루션 설계' : 'Solution Design'}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'ko' ? '2-3주' : '2-3 weeks'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0">
                      <span className="block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <div className="w-px h-full bg-blue-200 dark:bg-blue-700 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">{language === 'ko' ? '개발' : 'Development'}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'ko' ? '3-8주' : '3-8 weeks'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0">
                      <span className="block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                      <div className="w-px h-full bg-blue-200 dark:bg-blue-700 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">{language === 'ko' ? '테스트 및 개선' : 'Testing & Refinement'}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'ko' ? '1-3주' : '1-3 weeks'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0">
                      <span className="block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{language === 'ko' ? '배포 및 교육' : 'Deployment & Training'}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'ko' ? '1-2주' : '1-2 weeks'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'ko' 
                      ? '참고: 일정은 프로젝트 복잡성과 범위에 따라 달라집니다. 초기 상담 후 자세한 일정이 제공됩니다.' 
                      : 'Note: Timeline varies based on project complexity and scope. A detailed timeline will be provided after the initial consultation.'}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* FAQ 섹션 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <details className="group bg-white dark:bg-gray-900 rounded-lg shadow-md">
                    <summary className="flex justify-between cursor-pointer p-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <span className="ml-6 flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-6 pt-0">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
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
              {language === 'ko' ? '자동화 여정을 시작할 준비가 되셨나요?' : 'Ready to Start Your Automation Journey?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {language === 'ko'
                ? '비즈니스 프로세스에 대해 논의하고 자동화 기회를 탐색하기 위해 전문가와 상담을 예약하세요.'
                : 'Schedule a consultation with our experts to discuss your business processes and explore automation opportunities.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '상담 예약하기' : 'Schedule Consultation'}
              </Link>
              <Link href="/cases" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors">
                {language === 'ko' ? '성공 사례 보기' : 'View Success Stories'}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 