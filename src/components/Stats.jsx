import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter that counts up to a target number when visible.
 * @param {number} props.target - The number to count to
 * @param {string} props.suffix - Text after number e.g. "+" or "%"
 * @param {number} props.duration - Animation duration in ms
 */
function AnimatedNumber({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/**
 * Stats section — used in the hero and optionally elsewhere.
 * @param {'light' | 'dark'} props.theme
 */
export default function Stats({ stats, theme = 'light', className = '' }) {
  const isLight = theme === 'light'

  return (
    <div className={`flex flex-wrap items-start gap-6 sm:gap-10 md:gap-14 ${className}`}>
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col border-l-2 border-brand-yellow/70 pl-3.5 sm:pl-4">
          <span
            className={`font-heading font-900 leading-none ${
              isLight ? 'text-white' : 'text-charcoal-900'
            }`}
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {stat.animated ? (
              <AnimatedNumber target={stat.numericValue} suffix={stat.suffix} />
            ) : (
              stat.value
            )}
          </span>
          <span
            className={`font-heading font-600 text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-1.5 ${
              isLight ? 'text-concrete-300' : 'text-concrete-500'
            }`}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
