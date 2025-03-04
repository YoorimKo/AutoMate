'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object with both languages
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.process': 'Process',
    'nav.cases': 'Cases',
    'nav.contact': 'Contact',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'Enhance Productivity with Business Automation',
    'hero.subtitle': 'Automate repetitive tasks and focus on creative work. Save time and costs with our automation solutions.',
    'hero.cta.contact': 'Request Free Consultation',
    'hero.cta.services': 'Explore Services',
    'hero.company1': 'Acme Inc',
    'hero.company2': 'TechGlobe',
    'hero.company3': 'Innovate Co',
    'hero.company4': 'NextGen',
    
    // Hero Terminal
    'hero.terminal.running': 'Running automation process...',
    'hero.terminal.data': 'Data collection complete',
    'hero.terminal.report': 'Automatic report generation',
    'hero.terminal.email': 'Email delivery scheduled',
    'hero.terminal.complete': 'Task completed! Time taken: 3 seconds',
    
    // Services
    'services.title': 'Automation Services',
    'services.subtitle': 'We offer a variety of services that automate business processes to save time and costs while enhancing productivity.',
    'services.card1.title': 'Data Processing Automation',
    'services.card1.description': 'Automatically process and analyze data from Excel, CSV, databases, and various formats to derive insights.',
    'services.card2.title': 'Workflow Automation',
    'services.card2.description': 'Automate repetitive workflow processes to reduce human error and allow employees to focus on more valuable tasks.',
    'services.card3.title': 'Automatic Report Generation',
    'services.card3.description': 'Save time and provide consistent-format reports by automatically generating weekly, monthly, and quarterly reports.',
    'services.card4.title': 'Email and Notification Automation',
    'services.card4.description': 'Enhance communication with customers and employees by automating regular emails, notifications, and reminders.',
    'services.card5.title': 'API Integration and Connection',
    'services.card5.description': 'Connect various systems and applications via API to automate data flow and optimize business processes.',
    'services.card6.title': 'Data Backup and Recovery Automation',
    'services.card6.description': 'Minimize data loss risk and ensure business continuity by automating backup and recovery processes for important data.',
    
    // Benefits
    'benefits.title': 'Benefits of Automation',
    'benefits.subtitle': 'Discover the various benefits you can gain from business process automation.',
    'benefits.item1.title': 'Time Saving',
    'benefits.item1.description': 'Save time by automating repetitive tasks, allowing employees to focus on more important work.',
    'benefits.item2.title': 'Cost Reduction',
    'benefits.item2.description': 'Reduce business operating costs in the long term through reduced labor costs and error reduction.',
    'benefits.item3.title': 'Error Reduction',
    'benefits.item3.description': 'Automated processes minimize human error, increasing the accuracy and consistency of work.',
    'benefits.item4.title': 'Productivity Improvement',
    'benefits.item4.description': 'Improve workflow efficiency to achieve more with less time and resources.',
    'benefits.item5.title': 'Data-Driven Decision Making',
    'benefits.item5.description': 'Gain more accurate insights and make data-driven decisions through automated data collection and analysis.',
    'benefits.item6.title': 'Employee Satisfaction Enhancement',
    'benefits.item6.description': 'Allow employees to focus on more creative and meaningful work by freeing them from repetitive and tedious tasks.',
    
    // Process
    'process.title': 'Automation Implementation Process',
    'process.subtitle': 'We guide you through the process of implementing an optimized automation solution for your business.',
    'process.step1.title': 'Requirements Analysis',
    'process.step1.description': 'Analyze your business processes and identify areas that need automation. Define necessary requirements and expected effects.',
    'process.step2.title': 'Solution Design',
    'process.step2.description': 'Design the optimal automation solution for your requirements. Provide detailed designs including integration plans with existing systems.',
    'process.step3.title': 'Development and Implementation',
    'process.step3.description': 'Develop and implement the designed solution. Progress step by step, verifying quality at each stage.',
    'process.step4.title': 'Testing and Verification',
    'process.step4.description': 'Thoroughly test and verify the implemented automation solution. Confirm performance and stability in actual work environments.',
    'process.step5.title': 'Deployment and Training',
    'process.step5.description': 'Deploy the verified solution to the actual environment and provide training for employees to use it effectively.',
    'process.step6.title': 'Continuous Support and Improvement',
    'process.step6.description': 'Provide continuous support for stable operation of the automation solution and improve and optimize functions as needed.',
    
    // Cases
    'cases.title': 'Success Stories',
    'cases.subtitle': 'We present cases of companies that achieved business results through automation solutions.',
    'cases.challenge': 'Challenge',
    'cases.solution': 'Solution',
    'cases.result': 'Result',
    'cases.cta': 'Contact Us',
    
    // Footer
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 AUTOMATE. All rights reserved.',
    
    // Pricing
    'pricing.title': 'Pricing Plans',
    'pricing.subtitle': 'Choose the plan that best fits your business needs',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.save': 'Save 20%',
    
    'pricing.basic.title': 'Basic',
    'pricing.basic.description': 'Essential automation services for small businesses',
    'pricing.basic.price.monthly': '$99',
    'pricing.basic.price.yearly': '$950',
    'pricing.basic.per': 'per month',
    
    'pricing.professional.title': 'Professional',
    'pricing.professional.description': 'Advanced automation for growing companies',
    'pricing.professional.price.monthly': '$249',
    'pricing.professional.price.yearly': '$2,390',
    'pricing.professional.per': 'per month',
    
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.description': 'Custom automation solutions for large organizations',
    'pricing.enterprise.price.monthly': 'Custom',
    'pricing.enterprise.price.yearly': 'Custom',
    'pricing.enterprise.per': 'contact us for pricing',
    
    'pricing.feature.included': 'Included',
    'pricing.feature.notincluded': 'Not included',
    'pricing.feature.limited': 'Limited',
    
    'pricing.basic.feature1': '5 Automated Workflows',
    'pricing.basic.feature2': 'Basic Data Processing',
    'pricing.basic.feature3': 'Email Notifications',
    'pricing.basic.feature4': 'Standard Support',
    'pricing.basic.feature5': '1 User Account',
    
    'pricing.professional.feature1': '15 Automated Workflows',
    'pricing.professional.feature2': 'Advanced Data Processing',
    'pricing.professional.feature3': 'Email & SMS Notifications',
    'pricing.professional.feature4': 'Priority Support',
    'pricing.professional.feature5': '5 User Accounts',
    'pricing.professional.feature6': 'API Integrations',
    
    'pricing.enterprise.feature1': 'Unlimited Workflows',
    'pricing.enterprise.feature2': 'Custom Data Processing',
    'pricing.enterprise.feature3': 'All Notification Channels',
    'pricing.enterprise.feature4': 'Dedicated Support',
    'pricing.enterprise.feature5': 'Unlimited User Accounts',
    'pricing.enterprise.feature6': 'Enterprise API Access',
    'pricing.enterprise.feature7': 'Custom Integrations',
    
    'pricing.cta.basic': 'Get Started',
    'pricing.cta.professional': 'Choose Professional',
    'pricing.cta.enterprise': 'Contact Sales',
    
    'pricing.faq.title': 'Frequently Asked Questions',
    'pricing.faq.q1': 'How do the billing cycles work?',
    'pricing.faq.a1': 'Monthly plans are billed every month and can be canceled anytime. Yearly plans are billed annually and offer a 20% discount compared to monthly billing.',
    'pricing.faq.q2': 'Can I upgrade or downgrade my plan?',
    'pricing.faq.a2': 'Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle.',
    'pricing.faq.q3': 'Is there a trial period?',
    'pricing.faq.a3': 'We offer a 14-day free trial on all plans. No credit card required to start your trial.',
    'pricing.faq.q4': 'What payment methods do you accept?',
    'pricing.faq.a4': 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.',
  },
  ko: {
    // Header
    'nav.home': '홈',
    'nav.services': '서비스',
    'nav.benefits': '장점',
    'nav.process': '프로세스',
    'nav.cases': '사례',
    'nav.contact': '문의하기',
    'nav.pricing': '가격',
    'nav.faq': '자주 묻는 질문',
    
    // Hero
    'hero.title': '비즈니스 자동화로 생산성을 높이세요',
    'hero.subtitle': '반복적인 업무는 자동화하고, 창의적인 일에 집중하세요. 당사의 자동화 솔루션으로 시간과 비용을 절약하세요.',
    'hero.cta.contact': '무료 상담 신청',
    'hero.cta.services': '서비스 알아보기',
    'hero.company1': '에이스 주식회사',
    'hero.company2': '테크글로브',
    'hero.company3': '이노베이트',
    'hero.company4': '넥스트젠',
    
    // Hero Terminal
    'hero.terminal.running': '자동화 프로세스 실행중...',
    'hero.terminal.data': '데이터 수집 완료',
    'hero.terminal.report': '보고서 자동 생성',
    'hero.terminal.email': '이메일 발송 예약 완료',
    'hero.terminal.complete': '작업 완료! 소요시간: 3초',
    
    // Services
    'services.title': '자동화 서비스',
    'services.subtitle': '비즈니스 프로세스를 자동화하여 시간과 비용을 절약하고 생산성을 향상시키는 다양한 서비스를 제공합니다.',
    'services.card1.title': '데이터 처리 자동화',
    'services.card1.description': '엑셀, CSV, 데이터베이스 등 다양한 형식의 데이터를 자동으로 처리하고 분석하여 인사이트를 도출합니다.',
    'services.card2.title': '업무 프로세스 자동화',
    'services.card2.description': '반복적인 업무 프로세스를 자동화하여 인적 오류를 줄이고 직원들이 더 가치 있는 업무에 집중할 수 있게 합니다.',
    'services.card3.title': '보고서 자동 생성',
    'services.card3.description': '주간, 월간, 분기별 보고서를 자동으로 생성하여 시간을 절약하고 일관된 형식의 보고서를 제공합니다.',
    'services.card4.title': '이메일 및 알림 자동화',
    'services.card4.description': '정기적인 이메일 발송, 알림, 리마인더를 자동화하여 고객 및 직원과의 커뮤니케이션을 향상시킵니다.',
    'services.card5.title': 'API 통합 및 연동',
    'services.card5.description': '다양한 시스템과 애플리케이션을 API로 연결하여 데이터 흐름을 자동화하고 비즈니스 프로세스를 최적화합니다.',
    'services.card6.title': '데이터 백업 및 복구 자동화',
    'services.card6.description': '중요한 데이터의 백업 및 복구 프로세스를 자동화하여 데이터 손실 위험을 최소화하고 비즈니스 연속성을 확보합니다.',
    
    // Benefits
    'benefits.title': '자동화의 장점',
    'benefits.subtitle': '비즈니스 프로세스 자동화를 통해 얻을 수 있는 다양한 혜택을 확인하세요.',
    'benefits.item1.title': '시간 절약',
    'benefits.item1.description': '반복적인 업무를 자동화하여 직원들이 더 중요한 업무에 집중할 수 있도록 시간을 확보합니다.',
    'benefits.item2.title': '비용 절감',
    'benefits.item2.description': '인력 비용 절감과 오류 감소를 통해 장기적으로 비즈니스 운영 비용을 줄일 수 있습니다.',
    'benefits.item3.title': '오류 감소',
    'benefits.item3.description': '자동화된 프로세스는 인적 오류를 최소화하여 업무의 정확성과 일관성을 높입니다.',
    'benefits.item4.title': '생산성 향상',
    'benefits.item4.description': '업무 프로세스의 효율성을 높여 더 적은 시간과 리소스로 더 많은 성과를 달성합니다.',
    'benefits.item5.title': '데이터 기반 의사결정',
    'benefits.item5.description': '자동화된 데이터 수집 및 분석을 통해 더 정확한 인사이트를 얻고 데이터 기반의 의사결정을 할 수 있습니다.',
    'benefits.item6.title': '직원 만족도 향상',
    'benefits.item6.description': '반복적이고 지루한 작업에서 벗어나 직원들이 더 창의적이고 의미 있는 업무에 집중할 수 있게 합니다.',
    
    // Process
    'process.title': '자동화 구현 프로세스',
    'process.subtitle': '귀사의 비즈니스에 최적화된 자동화 솔루션을 구현하는 과정을 안내합니다.',
    'process.step1.title': '요구사항 분석',
    'process.step1.description': '귀사의 비즈니스 프로세스를 분석하고 자동화가 필요한 영역을 식별합니다. 필요한 요구사항과 기대효과를 함께 정의합니다.',
    'process.step2.title': '솔루션 설계',
    'process.step2.description': '귀사의 요구사항에 맞는 최적의 자동화 솔루션을 설계합니다. 기존 시스템과의 통합 방안을 포함한 상세 설계를 제공합니다.',
    'process.step3.title': '개발 및 구현',
    'process.step3.description': '설계된 솔루션을 개발하고 구현합니다. 단계별로 진행하여 각 단계마다 품질을 검증하며 진행합니다.',
    'process.step4.title': '테스트 및 검증',
    'process.step4.description': '구현된 자동화 솔루션을 철저히 테스트하고 검증합니다. 실제 업무 환경에서의 성능과 안정성을 확인합니다.',
    'process.step5.title': '배포 및 교육',
    'process.step5.description': '검증된 솔루션을 실제 환경에 배포하고, 직원들이 효과적으로 활용할 수 있도록 교육을 제공합니다.',
    'process.step6.title': '지속적인 지원 및 개선',
    'process.step6.description': '자동화 솔루션의 안정적인 운영을 위한 지속적인 지원을 제공하며, 필요에 따라 기능을 개선하고 최적화합니다.',
    
    // Cases
    'cases.title': '성공 사례',
    'cases.subtitle': '자동화 솔루션을 통해 비즈니스 성과를 달성한 기업들의 사례를 소개합니다.',
    'cases.challenge': '과제',
    'cases.solution': '솔루션',
    'cases.result': '결과',
    'cases.cta': '문의하기',
    
    // Footer
    'footer.quicklinks': '빠른 링크',
    'footer.contact': '연락처',
    'footer.copyright': '© 2024 AUTOMATE. All rights reserved.',
    
    // Pricing
    'pricing.title': '가격 플랜',
    'pricing.subtitle': '귀사의 비즈니스 요구에 가장 적합한 플랜을 선택하세요',
    'pricing.monthly': '월간',
    'pricing.yearly': '연간',
    'pricing.save': '20% 절약',
    
    'pricing.basic.title': '베이직',
    'pricing.basic.description': '소규모 비즈니스를 위한 필수 자동화 서비스',
    'pricing.basic.price.monthly': '₩120,000',
    'pricing.basic.price.yearly': '₩1,152,000',
    'pricing.basic.per': '월 기준',
    
    'pricing.professional.title': '프로페셔널',
    'pricing.professional.description': '성장하는 기업을 위한 고급 자동화 서비스',
    'pricing.professional.price.monthly': '₩299,000',
    'pricing.professional.price.yearly': '₩2,870,000',
    'pricing.professional.per': '월 기준',
    
    'pricing.enterprise.title': '엔터프라이즈',
    'pricing.enterprise.description': '대규모 조직을 위한 맞춤형 자동화 솔루션',
    'pricing.enterprise.price.monthly': '맞춤형',
    'pricing.enterprise.price.yearly': '맞춤형',
    'pricing.enterprise.per': '가격 문의',
    
    'pricing.feature.included': '포함',
    'pricing.feature.notincluded': '미포함',
    'pricing.feature.limited': '제한적',
    
    'pricing.basic.feature1': '자동화 워크플로우 5개',
    'pricing.basic.feature2': '기본 데이터 처리',
    'pricing.basic.feature3': '이메일 알림',
    'pricing.basic.feature4': '표준 지원',
    'pricing.basic.feature5': '사용자 계정 1개',
    
    'pricing.professional.feature1': '자동화 워크플로우 15개',
    'pricing.professional.feature2': '고급 데이터 처리',
    'pricing.professional.feature3': '이메일 및 SMS 알림',
    'pricing.professional.feature4': '우선 지원',
    'pricing.professional.feature5': '사용자 계정 5개',
    'pricing.professional.feature6': 'API 통합',
    
    'pricing.enterprise.feature1': '무제한 워크플로우',
    'pricing.enterprise.feature2': '맞춤형 데이터 처리',
    'pricing.enterprise.feature3': '모든 알림 채널',
    'pricing.enterprise.feature4': '전담 지원',
    'pricing.enterprise.feature5': '무제한 사용자 계정',
    'pricing.enterprise.feature6': '엔터프라이즈 API 접근',
    'pricing.enterprise.feature7': '맞춤형 통합',
    
    'pricing.cta.basic': '시작하기',
    'pricing.cta.professional': '프로페셔널 선택',
    'pricing.cta.enterprise': '영업팀 문의',
    
    'pricing.faq.title': '자주 묻는 질문',
    'pricing.faq.q1': '결제 주기는 어떻게 작동하나요?',
    'pricing.faq.a1': '월간 플랜은 매월 결제되며 언제든지 취소할 수 있습니다. 연간 플랜은 매년 결제되며 월간 결제 대비 20% 할인을 제공합니다.',
    'pricing.faq.q2': '플랜을 업그레이드하거나 다운그레이드할 수 있나요?',
    'pricing.faq.a2': '네, 언제든지 플랜을 업그레이드할 수 있습니다. 다운그레이드는 현재 결제 주기가 끝날 때 적용됩니다.',
    'pricing.faq.q3': '무료 체험 기간이 있나요?',
    'pricing.faq.a3': '모든 플랜에 14일 무료 체험 기간을 제공합니다. 체험을 시작하는 데 신용카드가 필요하지 않습니다.',
    'pricing.faq.q4': '어떤 결제 방법을 지원하나요?',
    'pricing.faq.a4': '모든 주요 신용카드, 페이팔 및 엔터프라이즈 플랜을 위한 계좌이체를 지원합니다.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Use a function in useState to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>(() => {
    // Always default to English
    return 'en';
  });

  const [isClient, setIsClient] = useState(false);
  
  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Save language preference when it changes, but only after hydration
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 