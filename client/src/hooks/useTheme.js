import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState('light')

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }
  const themeToggler = () => {
    setMode(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}
