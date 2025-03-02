'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

export default function HTMLLanguageHandler() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute based on the selected language
    if (document && document.documentElement) {
      document.documentElement.lang = language;
    }
  }, [language]);

  // This component doesn't render anything visible
  return null;
} 