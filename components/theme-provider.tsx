'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from 'next-themes'

type ThemeContextValue = {
  isDark: boolean
  theme: string | undefined
  resolvedTheme: 'light' | 'dark' | undefined
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

function InnerThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme, setTheme } = useNextTheme()
  const narrowedResolved = (resolvedTheme === 'light' || resolvedTheme === 'dark') ? resolvedTheme : undefined
  const isDark = narrowedResolved === 'dark'

  const toggleTheme = React.useCallback(() => {
    setTheme(isDark ? 'light' : 'dark')
  }, [isDark, setTheme])

  const value = React.useMemo<ThemeContextValue>(
    () => ({ isDark, theme, resolvedTheme: narrowedResolved, toggleTheme, setTheme }),
    [isDark, theme, narrowedResolved, toggleTheme, setTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" enableSystem defaultTheme="light" disableTransitionOnChange {...props}>
      <InnerThemeProvider>{children}</InnerThemeProvider>
    </NextThemesProvider>
  )
}

export function useThemeContext(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return ctx
}
