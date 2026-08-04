import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import ta from '../i18n/ta.json';
import hi from '../i18n/hi.json';
import fr from '../i18n/fr.json';
import de from '../i18n/de.json';
import ar from '../i18n/ar.json';
import zh from '../i18n/zh.json';
import ja from '../i18n/ja.json';

const translations = { en, ta, hi, fr, de, ar, zh, ja };

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ta', name: 'Tamil (தமிழ்)', flag: '🇮🇳', dir: 'ltr' },
  { code: 'hi', name: 'Hindi (हिन्दी)', flag: '🇮🇳', dir: 'ltr' },
  { code: 'fr', name: 'French (Français)', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German (Deutsch)', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ar', name: 'Arabic (العربية)', flag: '🇸🇦', dir: 'rtl' },
  { code: 'zh', name: 'Chinese (中文)', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ja', name: 'Japanese (日本語)', flag: '🇯🇵', dir: 'ltr' },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isGlobeModalOpen, setIsGlobeModalOpen] = useState(false);
  const [isAnimatingTransition, setIsAnimatingTransition] = useState(false);

  const selectedLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    // Update HTML dir attribute for RTL support (e.g. Arabic)
    document.documentElement.setAttribute('dir', selectedLangObj.dir);
    document.documentElement.setAttribute('lang', selectedLangObj.code);
  }, [selectedLangObj]);

  const switchLanguage = (langCode) => {
    if (langCode === currentLang) {
      setIsGlobeModalOpen(false);
      return;
    }

    setIsAnimatingTransition(true);
    setIsGlobeModalOpen(false);

    setTimeout(() => {
      setCurrentLang(langCode);
      setTimeout(() => {
        setIsAnimatingTransition(false);
      }, 300);
    }, 250);
  };

  // Helper function to resolve nested keys like "hero.badge"
  const t = (keyPath, fallback = '') => {
    if (!keyPath) return fallback;
    const keys = keyPath.split('.');
    let dict = translations[currentLang] || translations['en'];

    for (let k of keys) {
      if (dict && dict[k] !== undefined) {
        dict = dict[k];
      } else {
        // Fallback to English if missing in target language
        let fallbackDict = translations['en'];
        for (let fk of keys) {
          if (fallbackDict && fallbackDict[fk] !== undefined) {
            fallbackDict = fallbackDict[fk];
          } else {
            return fallback || keyPath;
          }
        }
        return fallbackDict;
      }
    }
    return dict;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        selectedLangObj,
        LANGUAGES,
        switchLanguage,
        t,
        isGlobeModalOpen,
        setIsGlobeModalOpen,
        isAnimatingTransition,
      }}
    >
      <div
        className={`app-language-wrapper ${isAnimatingTransition ? 'lang-transitioning' : ''}`}
        style={{
          transition: 'filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
          filter: isAnimatingTransition ? 'blur(6px)' : 'none',
          opacity: isAnimatingTransition ? 0.6 : 1,
          transform: isAnimatingTransition ? 'scale(0.995)' : 'scale(1)',
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
