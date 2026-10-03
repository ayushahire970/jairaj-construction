import { useEffect, useRef } from 'react'

/**
 * Wrapper that triggers CSS reveal animations when the element scrolls into view.
 * Add className="reveal", "reveal-left", or "reveal-right" to children.
 */
export default function RevealWrapper({ children, className = '', threshold = 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' to all .reveal / .reveal-left / .reveal-right inside
            entry.target
              .querySelectorAll('.reveal, .reveal-left, .reveal-right')
              .forEach((child) => child.classList.add('visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
