"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // Avoid hydration mismatch: only render icon after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = theme === "dark"

  const toggle = () => setTheme(isDark ? "light" : "dark")

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className="relative w-9 h-9 rounded-xl bg-gray-100 dark:bg-dm-muted flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 450, damping: 22 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!mounted ? (
          // Placeholder to avoid layout shift before hydration
          <motion.span key="placeholder" className="w-4 h-4 block" />
        ) : isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate:  90,  scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Sun className="w-4 h-4 text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90,  scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate: -90,  scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Moon className="w-4 h-4 text-gray-500 dark:text-dm-muted-text" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
