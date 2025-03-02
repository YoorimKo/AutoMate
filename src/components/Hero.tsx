'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollAnimation } from '@/utils/animations';

export default function Hero() {
  const { t, language } = useLanguage();
  const [terminalLines, setTerminalLines] = useState<{text: string, isTyping: boolean}[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // 언어에 따라 다른 터미널 메시지를 가져옵니다
  const getTerminalMessages = () => {
    if (language === 'en') {
      return [
        "Executing automation process...",
        "Data collection complete",
        "Automatic report generation",
        "Email delivery scheduled",
        "Task completed! Time spent: 3 seconds"
      ];
    } else {
      return [
        t('hero.terminal.running'),
        t('hero.terminal.data'),
        t('hero.terminal.report'),
        t('hero.terminal.email'),
        t('hero.terminal.complete')
      ];
    }
  };

  // 타이핑 효과를 위한 함수
  const typeWriter = (fullText: string, lineIndex: number) => {
    let currentText = '';
    let charIndex = 0;
    
    // 현재 줄이 타이핑 중임을 표시
    setTerminalLines(prev => {
      const newLines = [...prev];
      if (newLines[lineIndex]) {
        newLines[lineIndex] = { text: '', isTyping: true };
      }
      return newLines;
    });
    
    const typing = setInterval(() => {
      if (charIndex < fullText.length) {
        currentText += fullText.charAt(charIndex);
        charIndex++;
        
        // 현재까지 타이핑된 텍스트 업데이트
        setTerminalLines(prev => {
          const newLines = [...prev];
          newLines[lineIndex] = { text: currentText, isTyping: true };
          return newLines;
        });
        
        // 터미널 스크롤을 아래로 유지
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        // 타이핑 완료
        clearInterval(typing);
        setTerminalLines(prev => {
          const newLines = [...prev];
          newLines[lineIndex] = { text: fullText, isTyping: false };
          return newLines;
        });
      }
    }, 30); // 타이핑 속도 (밀리초)
    
    return typing;
  };

  useEffect(() => {
    const messages = getTerminalMessages();
    let timeouts: NodeJS.Timeout[] = [];
    let typingIntervals: NodeJS.Timeout[] = [];
    
    // 이전 상태를 초기화합니다
    setTerminalLines([]);
    
    // 각 메시지를 순서대로 표시하고 타이핑 효과를 적용합니다
    messages.forEach((message, index) => {
      const timeout = setTimeout(() => {
        // 새로운 빈 줄 추가
        setTerminalLines(prev => [...prev, { text: '', isTyping: true }]);
        
        // 타이핑 효과 시작
        const typingInterval = typeWriter(message, index);
        typingIntervals.push(typingInterval);
        
      }, 1000 * (index + 1)); // 각 메시지 사이의 간격
      
      timeouts.push(timeout);
    });
    
    return () => {
      // 컴포넌트가 언마운트되면 모든 타임아웃과 인터벌을 정리합니다
      timeouts.forEach(timeout => clearTimeout(timeout));
      typingIntervals.forEach(interval => clearInterval(interval));
    };
  }, [language]); // 언어가 변경되면 메시지를 다시 설정합니다

  return (
    <section id="hero" className="min-h-[80vh] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/30 to-transparent dark:from-indigo-900/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation type="fade-right" duration={800} delay={200}>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition duration-300 transform hover:scale-105">
                  {t('hero.cta.contact')}
                </a>
                <a href="/services" className="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg text-center transition duration-300">
                  {t('hero.cta.services')}
                </a>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-left" duration={800} delay={400}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">automation-terminal</div>
              </div>
              <div 
                ref={terminalRef}
                className="bg-gray-950 text-green-400 p-4 font-mono text-sm h-80 overflow-y-auto"
              >
                <div className="animate-pulse">$ automation --start</div>
                {terminalLines.map((line, index) => (
                  <div key={index} className="mt-2">
                    <span className="text-blue-400">{">"}</span> {line.text}
                    {line.isTyping && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse">_</span>}
                  </div>
                ))}
                {terminalLines.length === 0 && <div className="mt-2 animate-pulse">_</div>}
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation type="fade-up" duration={800} delay={800}>
          <div className="mt-20 text-center">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8">
              {language === 'en' ? 'Trusted by' : '신뢰하는 기업들'}
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[t('hero.company1'), t('hero.company2'), t('hero.company3'), t('hero.company4')].map((company, index) => (
                <div key={index} className="text-gray-400 dark:text-gray-500 font-medium text-xl transition hover:text-gray-500 dark:hover:text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
} 