import { useEffect, useState } from 'react'

export const useData = () => {
  const [isDark,setIsDark] = useState(localStorage.getItem("theme")==="dark")
  useEffect(() => {
    if(isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
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
