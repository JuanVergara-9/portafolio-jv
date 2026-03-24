"use client"

import { useEffect, useRef } from "react"

const TRAIL_POINTS  = 30     // max points en el buffer
const TRAIL_DURATION = 340   // ms que tarda en desaparecer

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Solo saltar en dispositivos exclusivamente táctiles (sin cursor físico)
    // No chequeamos prefers-reduced-motion porque en Windows suele estar activado
    // aunque el usuario sí quiera ver animaciones
    if (window.matchMedia("(pointer: coarse) and (hover: none)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rafId: number
    let pts: { x: number; y: number; t: number }[] = []

    // Ajustar canvas al viewport
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize, { passive: true })

    // Registrar posición del mouse
    const onMove = (e: MouseEvent) => {
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() })
    }
    window.addEventListener("mousemove", onMove, { passive: true })

    // Detectar modo oscuro para ajustar la opacidad
    const isDark = () => document.documentElement.classList.contains("dark")

    const draw = () => {
      const now = performance.now()
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Limpiar puntos viejos y mantener el límite
      pts = pts.filter(p => now - p.t < TRAIL_DURATION)
      if (pts.length > TRAIL_POINTS) pts = pts.slice(-TRAIL_POINTS)

      if (pts.length >= 2) {
        const dark      = isDark()
        const maxAlpha  = dark ? 0.85 : 0.70
        const maxWidth  = dark ? 3.0  : 2.5

        for (let i = 1; i < pts.length; i++) {
          const p0 = pts[i - 1]
          const p1 = pts[i]

          // progress: 0 (cola más vieja) → 1 (punta más nueva)
          const progress  = i / (pts.length - 1)
          const ageFactor = Math.max(0, 1 - (now - p1.t) / TRAIL_DURATION)
          const alpha     = progress * ageFactor * maxAlpha

          ctx.beginPath()
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.strokeStyle = `rgba(0, 123, 255, ${alpha})`
          ctx.lineWidth   = progress * ageFactor * maxWidth
          ctx.lineCap     = "round"
          ctx.lineJoin    = "round"
          ctx.stroke()
        }

        // Pequeño halo en la punta
        const head = pts[pts.length - 1]
        const age  = now - head.t
        if (age < 150) {
          const gFactor = Math.max(0, 1 - age / 150)
          const radius  = dark ? 10 : 8
          const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, radius)
          glow.addColorStop(0, `rgba(0, 123, 255, ${0.65 * gFactor})`)
          glow.addColorStop(1, "rgba(0, 123, 255, 0)")
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(head.x, head.y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  )
}
