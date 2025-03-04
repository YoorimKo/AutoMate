'use client';

import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';

export default function FAQPage() {
  const { t, language } = useLanguage();
  
  // FAQ 항목 - 자동화 플랫폼에 관한 일반적인 질문들
  const faqs = [
    {
      category: language === 'ko' ? '일반 질문' : 'General Questions',
      items: [
        {
          question: language === 'ko' ? '자동화가 정확히 무엇인가요?' : 'What exactly is automation?',
          answer: language === 'ko' 
            ? '자동화는 인간의 개입 없이 작업이 자동으로 완료될 수 있도록 프로세스나 절차를 설정하는 것입니다. 비즈니스 환경에서 자동화는 반복적인 작업, 데이터 처리, 분석 등을 자동으로 수행하여 인력 및 시간을 절약하고 오류를 줄이는 데 도움을 줍니다.'
            : 'Automation is the setup of processes or procedures so that tasks can be completed automatically without human intervention. In a business environment, automation helps to perform repetitive tasks, data processing, analytics, and more automatically, saving manpower, time, and reducing errors.',
        },
        {
          question: language === 'ko' ? '우리 비즈니스에 자동화가 필요한 이유는 무엇인가요?' : 'Why does my business need automation?',
          answer: language === 'ko'
            ? '자동화는 운영 효율성을 높이고, 인적 오류를 줄이며, 비용을 절감하고, 직원들이 더 가치 있는 작업에 집중할 수 있게 합니다. 또한 데이터 기반 의사결정을 지원하고 비즈니스 확장성을 개선하는 데 도움이 됩니다.'
            : 'Automation increases operational efficiency, reduces human errors, cuts costs, and allows your employees to focus on more valuable tasks. It also supports data-driven decision making and helps improve business scalability.',
        },
      ]
    },
    {
      category: language === 'ko' ? '서비스 및 구현' : 'Services & Implementation',
      items: [
        {
          question: language === 'ko' ? '어떤 유형의 프로세스를 자동화할 수 있나요?' : 'What types of processes can be automated?',
          answer: language === 'ko'
            ? '데이터 입력 및 처리, 보고서 생성, 이메일 캠페인, 고객 지원 응답, 인보이스 처리, 재고 관리, 일정 관리 등 다양한 반복적인 작업을 자동화할 수 있습니다. 귀사의 특정 요구 사항에 맞는 맞춤형 솔루션도 제공합니다.'
            : 'Various repetitive tasks can be automated, including data entry and processing, report generation, email campaigns, customer support responses, invoice processing, inventory management, scheduling, and more. We also provide customized solutions tailored to your specific requirements.',
        },
        {
          question: language === 'ko' ? '자동화 구현 프로세스는 어떻게 진행되나요?' : 'How does the automation implementation process work?',
          answer: language === 'ko'
            ? '당사의 구현 프로세스는 1) 비즈니스 요구 사항 분석, 2) 자동화 가능한 프로세스 식별, 3) 솔루션 설계, 4) 개발 및 테스트, 5) 배포 및 교육, 6) 지속적인 지원 및 최적화의 단계로 진행됩니다. 각 단계에서 고객과 긴밀히 협력하여 비즈니스 목표에 맞는 최상의 솔루션을 제공합니다.'
            : 'Our implementation process involves the following steps: 1) Business requirements analysis, 2) Identification of automatable processes, 3) Solution design, 4) Development and testing, 5) Deployment and training, 6) Ongoing support and optimization. We work closely with you at each stage to ensure the best solution for your business goals.',
        },
        {
          question: language === 'ko' ? '자동화 솔루션 구현에 얼마나 걸리나요?' : 'How long does it take to implement an automation solution?',
          answer: language === 'ko'
            ? '구현 시간은 자동화하려는 프로세스의 복잡성과 범위에 따라 달라집니다. 간단한 워크플로우는 2-4주 내에 구현할 수 있지만, 더 복잡한 기업 솔루션은 2-3개월이 소요될 수 있습니다. 초기 상담 및 요구사항 분석 후 구체적인 일정을 제공해 드립니다.'
            : "Implementation time varies depending on the complexity and scope of the processes you want to automate. Simple workflows can be implemented within 2-4 weeks, while more complex enterprise solutions may take 2-3 months. We'll provide a specific timeline after an initial consultation and requirements analysis.",
        },
      ]
    },
    {
      category: language === 'ko' ? '기술 및 통합' : 'Technology & Integration',
      items: [
        {
          question: language === 'ko' ? '자동화 솔루션은 기존 시스템과 통합될 수 있나요?' : 'Can automation solutions integrate with existing systems?',
          answer: language === 'ko'
            ? '네, 당사의 자동화 솔루션은 대부분의 기존 소프트웨어 및 시스템과 통합될 수 있도록 설계되었습니다. 이는 ERP, CRM, 회계 소프트웨어, 클라우드 서비스, 데이터베이스 등을 포함합니다. 특정 시스템 통합에 대해 궁금한 점이 있으시면 문의해 주세요.'
            : 'Yes, our automation solutions are designed to integrate with most existing software and systems. This includes ERP, CRM, accounting software, cloud services, databases, and more. If you have questions about specific system integrations, please contact us.',
        },
        {
          question: language === 'ko' ? '자동화에 사용되는 기술은 무엇인가요?' : 'What technologies are used for automation?',
          answer: language === 'ko'
            ? '당사는 RPA(로봇 프로세스 자동화), 머신러닝, AI, API 통합, 클라우드 컴퓨팅, 데이터 분석 등 다양한 기술을 활용합니다. 각 비즈니스의 특정 요구 사항에 가장 적합한 기술을 선택하여 최적의 결과를 제공합니다.'
            : "We utilize various technologies including RPA (Robotic Process Automation), machine learning, AI, API integrations, cloud computing, and data analytics. We select the most appropriate technologies for each business's specific requirements to provide optimal results.",
        },
        {
          question: language === 'ko' ? '자동화 솔루션의 보안은 어떻게 보장되나요?' : 'How is security ensured in automation solutions?',
          answer: language === 'ko'
            ? '당사는 데이터 암호화, 접근 제어, 정기적인 보안 감사, 규정 준수 확인 등을 포함한 포괄적인 보안 프로토콜을 구현합니다. 모든 솔루션은 산업 표준 보안 요구 사항을 준수하며, 고객 데이터 보호를 최우선으로 고려합니다.'
            : 'We implement comprehensive security protocols including data encryption, access controls, regular security audits, and compliance checks. All solutions adhere to industry-standard security requirements, with customer data protection as a top priority.',
        },
      ]
    },
    {
      category: language === 'ko' ? '가격 및 지원' : 'Pricing & Support',
      items: [
        {
          question: language === 'ko' ? '자동화 솔루션의 가격은 어떻게 책정되나요?' : 'How is pricing structured for automation solutions?',
          answer: language === 'ko'
            ? '당사는 기본, 프로페셔널, 엔터프라이즈 등 다양한 가격 계층을 제공합니다. 가격은 자동화하려는 프로세스의 수와 복잡성, 필요한 기능, 지원 수준 등에 따라 달라집니다. 맞춤형 견적을 원하시면 연락 주세요.'
            : 'We offer various pricing tiers including Basic, Professional, and Enterprise. Pricing varies based on the number and complexity of processes you want to automate, features required, support levels, and more. Contact us for a customized quote.',
        },
        {
          question: language === 'ko' ? '자동화 솔루션에 어떤 지원이 포함되어 있나요?' : 'What support is included with automation solutions?',
          answer: language === 'ko'
            ? '모든 플랜은 이메일 지원을 포함하며, 프로페셔널 및 엔터프라이즈 플랜은 우선 응대, 전화 지원, 전담 계정 관리자 등의 추가 지원을 제공합니다. 또한 모든 고객에게 상세한 문서와 교육 자료를 제공합니다.'
            : 'All plans include email support, with Professional and Enterprise plans offering additional support like priority response, phone support, and dedicated account managers. We also provide detailed documentation and training materials for all customers.',
        },
        {
          question: language === 'ko' ? '무료 시범 서비스나 데모가 제공되나요?' : 'Are free trials or demos available?',
          answer: language === 'ko'
            ? '네, 저희는 모든 잠재 고객이 자동화 솔루션의 가치를 직접 경험할 수 있도록 무료 데모와 시범 서비스를 제공합니다. 또한 귀사의 특정 요구 사항에 맞춘 개념 증명(POC)을 개발할 수도 있습니다.'
            : 'Yes, we offer free demos and trials so that all potential customers can experience the value of our automation solutions firsthand. We can also develop a proof of concept (POC) tailored to your specific requirements.',
        },
      ]
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
              {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko' 
                ? '자동화 서비스에 대한 궁금증을 해결해 드립니다. 원하는 정보를 찾지 못하셨다면 문의해 주세요.'
                : "Find answers to common questions about our automation services. If you don't see what you're looking for, please contact us."}
            </p>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* FAQ 섹션 */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <ScrollAnimation type="fade-up" duration={800} delay={categoryIndex * 100}>
                  <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">{category.category}</h2>
                  <div className="space-y-6">
                    {category.items.map((faq, faqIndex) => (
                      <details key={faqIndex} className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                        <summary className="flex justify-between cursor-pointer p-6">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-8">
                            {faq.question}
                          </h3>
                          <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400">
                            <svg className="w-6 h-6 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <svg className="w-6 h-6 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    ))}
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation type="fade-up" duration={800}>
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === 'ko' ? '더 궁금한 점이 있으신가요?' : 'Still have questions?'}
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              {language === 'ko' 
                ? '자동화 솔루션에 대해 더 알고 싶으시거나 특정 질문이 있으시면 언제든지 문의해 주세요.'
                : "Contact us if you'd like to learn more about our automation solutions or have specific questions."}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {language === 'ko' ? '문의하기' : 'Contact Us'}
            </Link>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 