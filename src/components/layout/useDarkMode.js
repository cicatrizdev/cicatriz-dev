import { useState, useEffect } from 'react'

export const isBrowser = () => typeof window !== 'undefined'

export const useDarkMode = () => {
  let websiteTheme
  // if (isBrowser()) {
  //   websiteTheme = window.__theme
  // }
  const [theme, setTheme] = useState(websiteTheme)

  const toggleTheme = () => {
    window.__setPreferredTheme('light')
  }
  useEffect(() => {
    setTheme('light')
    window.__onThemeChange = () => {
      setTheme('light')
    }
  }, [])
  return [theme, toggleTheme]
}
