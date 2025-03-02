'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { ScrollAnimation } from '@/utils/animations';

// Footer bubble pattern component
function FooterBubblePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"></div>
    </div>
  );
}

export default function Footer() {
  const { t, language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const currentYear = new Date().getFullYear();

  // Only render after client-side hydration to avoid hydration mismatch
  if (!isClient) {
    return (
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="h-40"></div>
        </div>
      </footer>
    );
  }
  
  // Use a stable value for server-side rendering
  const companyInfo = isClient 
    ? (language === 'en' 
        ? 'We provide services to improve productivity and efficiency through business process automation.'
        : '비즈니스 프로세스 자동화를 통한 생산성 향상 및 효율성 강화 서비스를 제공합니다.')
    : t('footer.copyright'); // Use a translation key as fallback during SSR
    
  // Use a stable value for address
  const address = isClient 
    ? (language === 'en' 
        ? '123 Teheran-ro, Gangnam-gu, Seoul, South Korea' 
        : '서울특별시 강남구 테헤란로 123')
    : '123 Teheran-ro, Gangnam-gu, Seoul';
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Enhanced background with bubble pattern */}
      <FooterBubblePattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <ScrollAnimation type="fade-up" duration={600} delay={100}>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">AUTO</span>
                <span className="text-white">MATE</span>
              </h3>
              <p className="text-gray-400 mb-4">
                {companyInfo}
              </p>
              <p className="text-gray-400">
                {t('footer.copyright')}
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-up" duration={600} delay={200}>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {language === 'en' ? 'Our Services' : '서비스'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Process Automation' : '프로세스 자동화'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Data Analysis' : '데이터 분석'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Workflow Optimization' : '워크플로우 최적화'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Custom Solutions' : '맞춤형 솔루션'}
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-up" duration={600} delay={300}>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {language === 'en' ? 'Resources' : '리소스'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Case Studies' : '사례 연구'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Automation Guide' : '자동화 가이드'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'Technology Blog' : '기술 블로그'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {language === 'en' ? 'FAQ' : '자주 묻는 질문'}
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-up" duration={600} delay={400}>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {language === 'en' ? 'Contact Us' : '연락처'}
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-400">{address}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {language === 'en' ? 'Office Address' : '사무실 주소'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-400">+82 123-456-7890</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {language === 'en' ? 'Customer Support' : '고객 지원'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-400">contact@automate.com</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {language === 'en' ? 'General Inquiries' : '일반 문의'}
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg inline-block transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                {language === 'en' ? 'Get in Touch' : '문의하기'}
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation type="fade-up" duration={600} delay={500}>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-6 md:mb-0">
                &copy; {currentYear} {t('footer.copyright')}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  {t('footer.links.privacy')}
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  {t('footer.links.terms')}
                </a>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">{t('footer.language')}:</span>
                  <select 
                    className="bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={language}
                    onChange={(e) => {
                      const htmlElement = document.documentElement;
                      htmlElement.setAttribute('lang', e.target.value);
                      window.localStorage.setItem('language', e.target.value);
                      window.dispatchEvent(new Event('languageChange'));
                    }}
                  >
                    <option value="en">English</option>
                    <option value="ko">한국어</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
} 