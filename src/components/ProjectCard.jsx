import { MapPin, Clock, ArrowUpRight } from 'lucide-react'

/**
 * ProjectCard — reusable card used on Home (preview) and Projects page.
 *
 * Designed with a clean industrial contractor look. Displays generic labels
 * and explicit placeholder indicators until real project data is supplied.
 *
 * @param {Object} props.project - Project data object from projects.js
 */
export default function ProjectCard({ project }) {
  const code = project.code || `PROJECT ${String(project.id).padStart(2, '0')}`
  const category = (project.categoryLabel || project.category || '').toUpperCase()

  return (
    <article
      className="group relative overflow-hidden bg-charcoal-800 border border-charcoal-700 hover:border-brand-yellow/60 transition-all duration-300 flex flex-col h-full shadow-lg"
      aria-label={`${code} — ${category} — Project details coming soon`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden h-60 sm:h-64 bg-charcoal-950">
        <img
          src={project.image}
          alt={`${category} construction — design placeholder`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/30" />

        {/* Top Tag Bar */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          {/* Project Code */}
          <span className="bg-charcoal-950/90 border border-charcoal-700/80 text-brand-yellow font-heading font-800 text-xs tracking-[0.18em] uppercase px-2.5 py-1 backdrop-blur-sm">
            {code}
          </span>
          {/* Category Badge */}
          <span className="bg-brand-yellow text-charcoal-900 font-heading font-700 text-[11px] tracking-[0.14em] uppercase px-2.5 py-1">
            {category}
          </span>
        </div>

        {/* Center watermark stamp for placeholders */}
        {project.isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div className="border border-white/20 bg-charcoal-950/75 backdrop-blur-sm px-4 py-2 text-center shadow-md">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.22em] uppercase">
                DESIGN PLACEHOLDER
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-charcoal-800 border-t border-charcoal-700/80">
        {!project.isPlaceholder ? (
          <div>
            <h3 className="font-heading font-800 text-white text-lg leading-tight mb-2">
              {project.title}
            </h3>
            {project.description && (
              <p className="text-concrete-400 text-xs sm:text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            )}
            <div className="flex items-center gap-4 text-xs text-concrete-500 pt-3 border-t border-charcoal-700">
              {project.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-brand-yellow" />
                  {project.location}
                </span>
              )}
              {project.status && (
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-brand-yellow" />
                  {project.status}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0 animate-pulse" />
              <p className="font-heading font-800 text-white text-sm tracking-[0.15em] uppercase">
                PROJECT DETAILS COMING SOON
              </p>
            </div>
            <p className="text-xs text-concrete-400 leading-relaxed">
              Real project information will be added here as the Jairaj Construction portfolio is documented.
            </p>

            <div className="mt-4 pt-3.5 border-t border-charcoal-700/80 flex items-center justify-between text-[11px] text-concrete-500 font-heading tracking-wider uppercase">
              <span>{category}</span>
              <span className="text-concrete-400 italic">Documentation Pending</span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
