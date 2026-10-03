import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * CTASection — reusable high-impact call-to-action strip
 * @param {string} props.heading
 * @param {string} props.subtext
 * @param {string} props.primaryLabel
 * @param {string} props.primaryTo - Route path
 * @param {string} props.secondaryLabel
 * @param {string} props.secondaryTo - Route path
 * @param {'dark' | 'yellow'} props.variant
 */
export default function CTASection({
  heading = 'READY TO BUILD?',
  subtext = "Let's discuss your next construction project.",
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'Contact Us',
  secondaryTo = '/contact',
  variant = 'dark',
}) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-charcoal-950' : 'bg-brand-yellow'
      }`}
      aria-label="Call to action"
    >
      {/* Subtle background texture */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      )}

      {/* Accent bar on left */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${
          isDark ? 'bg-brand-yellow' : 'bg-charcoal-900'
        }`}
      />

      <div className="container-wide py-20 lg:py-28 relative">
        <div className="max-w-3xl">
          <h2
            className={`font-heading font-900 leading-none tracking-tight mb-5 ${
              isDark ? 'text-white' : 'text-charcoal-900'
            }`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {heading}
          </h2>
          <p
            className={`text-lg leading-relaxed mb-10 ${
              isDark ? 'text-concrete-300' : 'text-charcoal-800'
            }`}
          >
            {subtext}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={primaryTo}
              className={`inline-flex items-center gap-3 font-heading font-700 text-sm tracking-[0.15em] uppercase px-8 py-4 min-h-[56px] transition-all duration-200 ${
                isDark
                  ? 'bg-brand-yellow text-charcoal-900 hover:bg-brand-amber'
                  : 'bg-charcoal-900 text-white hover:bg-charcoal-800'
              }`}
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-3 font-heading font-700 text-sm tracking-[0.15em] uppercase px-8 py-4 min-h-[56px] border transition-all duration-200 ${
                isDark
                  ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                  : 'border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white'
              }`}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
