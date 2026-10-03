import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * ServiceCard — used on Home and Services pages
 * @param {Object} props.service - Service data object from content.js
 * @param {'home' | 'full'} props.variant
 */
export default function ServiceCard({ service, variant = 'home', index }) {
  return (
    <article
      className="group relative overflow-hidden bg-charcoal-800 border border-charcoal-700 hover:border-brand-yellow/40 transition-all duration-300"
      aria-label={`Service: ${service.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent" />
        {/* Number label */}
        <span className="absolute top-4 right-4 font-heading font-900 text-5xl text-white/10 select-none leading-none">
          {service.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <p className="text-brand-yellow font-heading font-700 text-xs tracking-[0.2em] uppercase mb-2">
          {service.number} — {service.shortTitle}
        </p>
        <h3 className="font-heading font-800 text-white text-2xl mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-concrete-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-heading font-700 tracking-[0.15em] uppercase text-concrete-300 hover:text-brand-yellow transition-colors duration-200 group/link"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  )
}
