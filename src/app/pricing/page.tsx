'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/utils/animations';
import Link from 'next/link';

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // 플랜 기능
  const features = {
    basic: [
      { key: language === 'ko' ? '기본 자동화 워크플로우 5개' : 'Up to 5 automation workflows', included: true },
      { key: language === 'ko' ? '월 1,000건 처리' : 'Process up to 1,000 tasks per month', included: true },
      { key: language === 'ko' ? '기본 이메일 알림' : 'Basic email notifications', included: true },
      { key: language === 'ko' ? '표준 보고서' : 'Standard reports', included: true },
      { key: language === 'ko' ? '이메일 지원' : 'Email support', included: true },
      { key: language === 'ko' ? '고급 자동화 커스터마이징' : 'Advanced automation customization', included: false },
      { key: language === 'ko' ? '엔터프라이즈급 보안' : 'Enterprise-grade security', included: false },
    ],
    professional: [
      { key: language === 'ko' ? '자동화 워크플로우 20개' : 'Up to 20 automation workflows', included: true },
      { key: language === 'ko' ? '월 10,000건 처리' : 'Process up to 10,000 tasks per month', included: true },
      { key: language === 'ko' ? '고급 알림 설정' : 'Advanced notification settings', included: true },
      { key: language === 'ko' ? '커스텀 보고서' : 'Custom reports', included: true },
      { key: language === 'ko' ? '우선 응대 지원' : 'Priority support', included: true },
      { key: language === 'ko' ? '고급 자동화 커스터마이징' : 'Advanced automation customization', included: true },
      { key: language === 'ko' ? '엔터프라이즈급 보안' : 'Enterprise-grade security', included: false },
    ],
    enterprise: [
      { key: language === 'ko' ? '무제한 자동화 워크플로우' : 'Unlimited automation workflows', included: true },
      { key: language === 'ko' ? '무제한 작업 처리' : 'Unlimited task processing', included: true },
      { key: language === 'ko' ? '고급 알림 및 통합' : 'Advanced notifications and integrations', included: true },
      { key: language === 'ko' ? '맞춤형 분석 및 보고서' : 'Custom analytics and reporting', included: true },
      { key: language === 'ko' ? '전담 지원 관리자' : 'Dedicated account manager', included: true },
      { key: language === 'ko' ? '맞춤형 솔루션 개발' : 'Custom solution development', included: true },
      { key: language === 'ko' ? '엔터프라이즈급 보안 및 규정 준수' : 'Enterprise-grade security and compliance', included: true },
    ]
  };

  // FAQ 항목
  const faqs = [
    {
      question: language === 'ko' ? '요금제를 변경할 수 있나요?' : 'Can I change my plan later?',
      answer: language === 'ko' ? '네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.' : 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect from the next billing cycle.',
    },
    {
      question: language === 'ko' ? '무료 체험 기간이 있나요?' : 'Is there a free trial available?',
      answer: language === 'ko' ? '모든 플랜에 14일 무료 체험 기간을 제공합니다. 신용카드 정보 없이도 서비스를 체험해 보실 수 있습니다.' : 'We offer a 14-day free trial for all our plans. You can experience our services without providing credit card information.',
    },
    {
      question: language === 'ko' ? '환불 정책은 어떻게 되나요?' : 'What is your refund policy?',
      answer: language === 'ko' ? '서비스 이용 후 7일 이내에 요청하시면 전액 환불해 드립니다. 7일 이후에는 미사용 기간에 대한 비례 환불이 가능합니다.' : 'We provide a full refund if requested within 7 days of service usage. After 7 days, a prorated refund is available for the unused period.',
    },
    {
      question: language === 'ko' ? '기술 지원은 어떻게 받을 수 있나요?' : 'How do I get technical support?',
      answer: language === 'ko' ? '모든 요금제는 이메일 지원을 포함하며, Professional 및 Enterprise 요금제는 우선 응대 및 전화 지원도 제공합니다.' : 'All plans include email support, while Professional and Enterprise plans also offer priority response and phone support.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{language === 'ko' ? '요금제 안내' : 'Pricing Plans'}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              {language === 'ko' ? '비즈니스 규모와 요구사항에 맞는 유연한 요금제를 제공합니다' : 'Flexible pricing options tailored to your business size and requirements'}
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
                {language === 'ko' ? '월간 결제' : 'Monthly Billing'}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {language === 'ko' ? '연간 결제' : 'Annual Billing'}
                <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">
                  {language === 'ko' ? '20% 할인' : 'Save 20%'}
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
                  <h3 className="text-2xl font-bold mb-2">{language === 'ko' ? '베이직' : 'Basic'}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{language === 'ko' ? '소규모 비즈니스를 위한 필수 자동화' : 'Essential automation for small businesses'}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? (language === 'ko' ? '₩190,000' : '$149') 
                        : (language === 'ko' ? '₩1,824,000' : '$1,430')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{' '}{language === 'ko' ? '/월' : '/month'}</span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {language === 'ko' ? '시작하기' : 'Get Started'}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{language === 'ko' ? '기능' : 'Features'}</h4>
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
                          {feature.key}
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
                  {language === 'ko' ? '가장 인기 있는 요금제' : 'Most Popular'}
                </div>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-2">{language === 'ko' ? '프로페셔널' : 'Professional'}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{language === 'ko' ? '성장하는 비즈니스를 위한 고급 자동화' : 'Advanced automation for growing businesses'}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? (language === 'ko' ? '₩390,000' : '$299') 
                        : (language === 'ko' ? '₩3,744,000' : '$2,870')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{' '}{language === 'ko' ? '/월' : '/month'}</span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {language === 'ko' ? '시작하기' : 'Get Started'}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{language === 'ko' ? '기능' : 'Features'}</h4>
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
                          {feature.key}
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
                  <h3 className="text-2xl font-bold mb-2">{language === 'ko' ? '엔터프라이즈' : 'Enterprise'}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{language === 'ko' ? '대규모 기업을 위한 맞춤형 자동화 솔루션' : 'Custom automation solutions for large organizations'}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === 'monthly' 
                        ? (language === 'ko' ? '문의하기' : 'Contact Us') 
                        : (language === 'ko' ? '문의하기' : 'Contact Us')}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {billingCycle === 'monthly' ? '' : ''}
                    </span>
                  </div>
                  <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {language === 'ko' ? '문의하기' : 'Contact Us'}
                  </Link>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">{language === 'ko' ? '기능' : 'Features'}</h4>
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
                          {feature.key}
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
            <h2 className="text-3xl font-bold text-center mb-12">{language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 text-gray-500 group-open:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                      <span className="ml-6 flex-shrink-0 text-gray-500 hidden group-open:block">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation type="fade-up" duration={800}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
                <div className="mb-8 lg:mb-0 lg:max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">{language === 'ko' ? '아직 결정하기 어려우신가요?' : 'Still having questions?'}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'ko' ? '전문 컨설턴트와 상담을 통해 귀사에 가장 적합한 자동화 솔루션을 찾아보세요.' : 'Schedule a consultation with our experts to find the perfect automation solution for your business.'}
                  </p>
                </div>
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                  <Link href="/contact" className="block w-full md:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors">
                    {language === 'ko' ? '무료 상담 예약' : 'Book a Free Consultation'}
                  </Link>
                  <Link href="/services" className="block w-full md:w-auto py-3 px-6 bg-white dark:bg-gray-700 text-blue-600 dark:text-white border border-blue-600 dark:border-gray-600 text-center rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-600">
                    {language === 'ko' ? '서비스 더 알아보기' : 'Learn More About Services'}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 