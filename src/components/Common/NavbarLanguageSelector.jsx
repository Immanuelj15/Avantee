import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { FlagIcon } from '../i18n/FlagIcons';
import styles from './NavbarLanguageSelector.module.css';

export const NavbarLanguageSelector = () => {
  const { currentLang, LANGUAGES, switchLanguage } = useTranslation();

  return (
    <div className={styles.horizontalLangContainer} role="region" aria-label="Language Selector">
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;

        return (
          <button
            key={lang.code}
            className={`${styles.langBtn} ${isActive ? styles.activeLang : ''}`}
            onClick={() => switchLanguage(lang.code)}
            aria-label={`Switch language to ${lang.name}`}
            aria-pressed={isActive}
            title={lang.name}
          >
            <div className={styles.flagWrapper}>
              <FlagIcon code={lang.code} size={24} />
            </div>

            <span className={styles.langCode}>{lang.label}</span>

            {isActive && (
              <motion.div
                className={styles.activeUnderline}
                layoutId="activeLangUnderline"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
