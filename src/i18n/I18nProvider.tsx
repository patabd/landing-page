import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { content, type Locale, type SiteContent } from "./content";

const STORAGE_KEY = "pata-locale";

interface I18nValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  c: SiteContent;
}

const I18nContext = createContext<I18nValue | null>(null);

function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "bn" || stored === "en") return stored;
  } catch {
    // Private browsing etc. — fall through to the default.
  }
  return "bn";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persistence is best-effort.
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content[locale].meta.title;
  }, [locale]);

  const value: I18nValue = { locale, setLocale, c: content[locale] };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used within I18nProvider");
  return value;
}
