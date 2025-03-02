'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import HTMLLanguageHandler from '@/components/HTMLLanguageHandler';

// 페이지 네비게이션 버튼 컴포넌트
function PageNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();

  // 섹션 정보 정의
  const sections = [
    { id: 'hero', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'benefits', label: t('nav.benefits') },
    { id: 'process', label: t('nav.process') },
    { id: 'cases', label: t('nav.cases') }
  ];

  // 스크롤 이벤트 리스너, 현재 활성화된 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // 각 섹션의 위치 확인
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 실행
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-8">
        {sections.map((section) => (
          <div 
            key={`nav-${section.id}`}
            className="group relative"
          >
            <div 
              className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer 
                ${activeSection === section.id ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 whitespace-nowrap">
              {section.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { language, t } = useLanguage();
  
  // Update document title when language changes
  useEffect(() => {
    document.title = language === 'en' 
      ? "Automation Service | Smarter Business Solutions" 
      : "자동화 서비스 | 더 스마트한 비즈니스 솔루션";
  }, [language]);

  return (
    <div className="min-h-screen">
      <HTMLLanguageHandler />
      <Header />
      <PageNavigation />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Cases />
        {/* You can add a Contact section here */}
      </main>
      <Footer />
    </div>
  );
}
