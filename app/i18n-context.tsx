"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../messages/en.json";
import es from "../messages/es.json";
import de from "../messages/de.json";

export type LanguageCode = "EN" | "DE" | "ES";

// Type based on the structure of our JSON files
export type TranslationMessages = typeof en;

const messages: Record<LanguageCode, TranslationMessages> = {
  EN: en,
  ES: es,
  DE: de,
};

interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (keyPath: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Default to ES as it was the default in Navbar.tsx
  const [language, setLanguageState] = useState<LanguageCode>("ES");

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("mokao_language") as LanguageCode;
    if (savedLang && ["EN", "DE", "ES"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("mokao_language", lang);
  };

  // Helper function to get nested keys like "hero.title"
  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = messages[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${keyPath} in language ${language}`);
        return keyPath;
      }
      current = current[key];
    }

    return current as string;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
