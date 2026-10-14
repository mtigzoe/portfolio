'use client';

import React, { createContext, useContext, useState } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';
type ThemeMode = 'light' | 'dark' | 'high-contrast';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ml_font_size') as FontSize;
        if (saved && ['normal', 'large', 'xlarge'].includes(saved)) {
          return saved;
        }
      } catch {}
    }
    return 'normal';
  });

  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ml_theme_mode') as ThemeMode;
        if (saved && ['light', 'dark', 'high-contrast'].includes(saved)) {
          return saved;
        }
      } catch {}
    }
    return 'dark';
  });

  const handleSetFontSize = (size: FontSize) => {
    setFontSizeState(size);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ml_font_size', size);
      } catch {}
    }
  };

  const handleSetThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ml_theme_mode', mode);
      } catch {}
    }
  };

  const toggleTheme = () => {
    if (themeMode === 'light') handleSetThemeMode('dark');
    else if (themeMode === 'dark') handleSetThemeMode('high-contrast');
    else handleSetThemeMode('light');
  };

  const fontSizeClass =
    fontSize === 'xlarge'
      ? 'text-lg leading-relaxed md:text-xl'
      : fontSize === 'large'
      ? 'text-base leading-relaxed md:text-lg'
      : 'text-sm leading-normal md:text-base';

  const themeClasses =
    themeMode === 'dark'
      ? 'bg-zinc-950 text-zinc-100 dark-theme'
      : themeMode === 'high-contrast'
      ? 'bg-black text-white high-contrast-theme border-white'
      : 'bg-stone-50 text-stone-900 light-theme';

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize: handleSetFontSize,
        themeMode,
        setThemeMode: handleSetThemeMode,
        toggleTheme,
      }}
    >
      <div
        id="app-root"
        className={`min-h-screen transition-colors duration-200 ${themeClasses} ${fontSizeClass}`}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
