import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'
import RevealWrapper from '../components/RevealWrapper'

export default function NotFound() {
  return (
    <section
      className="relative min-h-[75vh] flex items-center justify-center bg-charcoal-950 pt-28 pb-20 overflow-hidden"
      aria-label="404 — Page Not Found"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Yellow accent bar */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-yellow" />

      <div className="container-wide relative z-10 text-center max-w-2xl mx-auto">
        <RevealWrapper>
          <div className="reveal">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-900 border border-charcoal-700 text-brand-yellow font-heading font-700 text-xs tracking-[0.22em] uppercase mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              ERROR 404
            </span>

            {/* Heading */}
            <h1
              className="font-heading font-900 text-white tracking-tight uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              PAGE NOT FOUND
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-concrete-300 leading-relaxed mb-8 max-w-lg mx-auto">
              The page you are looking for does not exist or may have been moved. Return to the homepage or explore our construction capabilities across Nashik, Dindori and Sinnar.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.16em] uppercase px-8 py-3.5 min-h-[48px] hover:bg-brand-amber transition-colors"
              >
                <Home size={16} />
                Return to Homepage
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-charcoal-900 border border-charcoal-700 text-concrete-300 hover:text-white hover:border-concrete-500 font-heading font-700 text-xs sm:text-sm tracking-[0.16em] uppercase px-8 py-3.5 min-h-[48px] transition-colors"
              >
                Contact Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
