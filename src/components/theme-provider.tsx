"use client"

import * as React from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = false
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const value = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <div className={theme}>
      {children}
    </div>
  )
} 