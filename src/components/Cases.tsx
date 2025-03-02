'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollAnimation } from '@/utils/animations';

interface Case {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export default function Cases() {
  const { t, language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Define cases based on the current language
  const getCases = (): Case[] => {
    if (language === 'en') {
      return [
        {
          id: 1,
          title: "Accounting Process Automation",
          company: "Company A",
          industry: "Manufacturing",
          challenge: "Frequent errors and delays in month-end accounting closings due to manual work",
          solution: "Built an automation solution integrated with the ERP system to automate data collection, organization, and report generation",
          result: "75% reduction in accounting closing time, 90% decrease in error rate, 30% increase in team productivity"
        },
        {
          id: 2,
          title: "Customer Data Analysis Automation",
          company: "Company B",
          industry: "Retail",
          challenge: "Time-consuming analysis of vast customer data for personalized marketing campaigns",
          solution: "Developed AI-based data analysis automation solution, customer segmentation and recommendation engine",
          result: "60% reduction in marketing campaign preparation time, 45% improvement in conversion rate, increased customer satisfaction"
        },
        {
          id: 3,
          title: "HR Management Process Automation",
          company: "Company C",
          industry: "Service",
          challenge: "Decreased productivity due to inefficiencies in HR management processes such as employee onboarding, training, and evaluation",
          solution: "Built a workflow automation system across HR management, automated notifications and reports",
          result: "50% improvement in HR team efficiency, 65% reduction in employee onboarding time, increased employee satisfaction"
        }
      ];
    } else {
      return [
        {
          id: 1,
          title: "회계 프로세스 자동화",
          company: "A 기업",
          industry: "제조업",
          challenge: "월말 회계 마감 과정에서 수작업으로 인한 오류와 지연이 빈번하게 발생",
          solution: "ERP 시스템과 연동된 자동화 솔루션을 구축하여 데이터 수집, 정리, 보고서 생성 프로세스 자동화",
          result: "회계 마감 시간 75% 단축, 오류율 90% 감소, 팀 생산성 30% 향상"
        },
        {
          id: 2,
          title: "고객 데이터 분석 자동화",
          company: "B 기업",
          industry: "소매업",
          challenge: "방대한 고객 데이터를 분석하여 개인화된 마케팅 캠페인을 진행하는데 많은 시간 소요",
          solution: "AI 기반 데이터 분석 자동화 솔루션 구축, 고객 세분화 및 추천 엔진 개발",
          result: "마케팅 캠페인 준비 시간 60% 단축, 전환율 45% 향상, 고객 만족도 증가"
        },
        {
          id: 3,
          title: "인사 관리 프로세스 자동화",
          company: "C 기업",
          industry: "서비스업",
          challenge: "직원 온보딩, 교육, 평가 등 인사 관리 프로세스의 비효율성으로 인한 생산성 저하",
          solution: "인사 관리 전반에 걸친 워크플로우 자동화 시스템 구축, 알림 및 보고서 자동화",
          result: "인사팀 업무 효율성 50% 향상, 직원 온보딩 시간 65% 단축, 직원 만족도 증가"
        }
      ];
    }
  };
  
  const cases = getCases();
  const [activeCase, setActiveCase] = useState<Case>(cases[0]);
  
  // Update activeCase when language changes after initial render
  useEffect(() => {
    if (isClient) {
      const updatedCases = getCases();
      setActiveCase(updatedCases[0]);
    }
  }, [language, isClient]);
  
  // Only render full content after client-side hydration
  if (!isClient) {
    return (
      <section id="cases" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cases.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('cases.subtitle')}
            </p>
          </div>
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-full max-w-3xl h-64 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Semi-transparent circular patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-1/3 w-64 h-64 rounded-full bg-blue-100/20 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation type="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cases.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('cases.subtitle')}
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation type="fade-up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {cases.map((caseItem, index) => (
              <ScrollAnimation key={caseItem.id} delay={index * 150} type="fade-up">
                <button
                  onClick={() => setActiveCase(caseItem)}
                  className={`p-6 rounded-lg transition-all transform hover:scale-105 duration-300 h-28 w-full flex flex-col items-center justify-center ${
                    activeCase.id === caseItem.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-2 text-center ${
                    activeCase.id === caseItem.id ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {caseItem.title}
                  </h3>
                  <p className={`text-sm text-center ${
                    activeCase.id === caseItem.id ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {caseItem.company} | {caseItem.industry}
                  </p>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation type="fade-up" delay={300}>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-bold">{activeCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{activeCase.company} | {activeCase.industry}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{t('cases.challenge')}</h4>
                <p className="text-gray-700 dark:text-gray-300">{activeCase.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{t('cases.solution')}</h4>
                <p className="text-gray-700 dark:text-gray-300">{activeCase.solution}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{t('cases.result')}</h4>
                <p className="text-gray-700 dark:text-gray-300">{activeCase.result}</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                {t('cases.cta')}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
} 