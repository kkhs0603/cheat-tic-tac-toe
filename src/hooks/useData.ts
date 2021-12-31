import React, { useEffect, useState } from 'react'

export const useData = () => {
  const [isDark,setIsDark] = useState(false)
  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark])
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);
      setIsDark(defaultDark)
  },[])
  return {isDark,setIsDark}
}
