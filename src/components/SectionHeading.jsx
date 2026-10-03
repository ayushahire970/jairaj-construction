/**
 * SectionHeading — reusable section title block
 *
 * @param {string} props.eyebrow - Small label above the heading (optional)
 * @param {string} props.title - Main heading text (supports \n for line breaks)
 * @param {string} props.subtitle - Supporting text below heading (optional)
 * @param {'left' | 'center'} props.align
 * @param {'light' | 'dark'} props.theme - 'light' for dark sections, 'dark' for light sections
 * @param {string} props.className
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'dark',
  className = '',
}) {
  const isLight = theme === 'light' // light text on dark bg
  const isCenter = align === 'center'

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <p
          className={`font-heading font-600 text-xs tracking-[0.25em] uppercase mb-3 ${
            isLight ? 'text-brand-yellow' : 'text-brand-amber'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-800 leading-none tracking-tight ${
          isLight ? 'text-white' : 'text-charcoal-900'
        } ${isCenter ? 'mx-auto' : ''}`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}
      >
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          } ${isLight ? 'text-concrete-300' : 'text-concrete-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
