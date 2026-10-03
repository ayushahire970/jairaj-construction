import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, MapPin, Building, ShieldCheck, FileText } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import RevealWrapper from '../components/RevealWrapper'
import { projects, projectFilterCategories } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  // Filter projects by category
  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        )

  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] sm:min-h-[70vh] flex flex-col justify-end overflow-hidden"
        aria-label="Projects — Jairaj Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85"
            alt="Commercial and residential building structure — design placeholder"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Multi-layered dark industrial overlays */}
          <div className="absolute inset-0 bg-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

          {/* Architectural grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Left accent structural bar */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-yellow" />
        </div>

        {/* Hero content */}
        <div className="relative container-wide pb-14 sm:pb-18 pt-32 sm:pt-40">
          {/* Location badge */}
          <div
            className={`mb-4 sm:mb-5 transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-3 py-1 bg-charcoal-900/90 border border-charcoal-700/80 text-concrete-300 font-heading font-600 text-[11px] sm:text-xs tracking-[0.22em] uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" />
              NASHIK &bull; DINDORI &bull; SINNAR
            </span>
          </div>

          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 delay-150 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-heading font-700 text-brand-yellow text-xs sm:text-sm tracking-[0.28em] uppercase mb-2 sm:mb-3">
              OUR WORK
            </p>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1
              className="font-heading font-900 text-white tracking-tight leading-[1.04]"
              style={{ fontSize: 'clamp(2.2rem, 5.2vw, 4.25rem)' }}
            >
              BUILT ACROSS
              <br />
              <span className="text-concrete-200">THE REGION.</span>
            </h1>
          </div>

          {/* Supporting copy */}
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-concrete-300 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A growing portfolio of residential, apartment and industrial construction work.
          </p>
        </div>
      </section>

      {/* ─── 2. PROJECT FILTER & 3. PROJECT GRID ──────────────────────────── */}
      <section
        className="section-pad bg-charcoal-900 border-b border-charcoal-800"
        aria-label="Project portfolio"
      >
        <div className="container-wide">
          {/* Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div>
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                PORTFOLIO
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)' }}
              >
                SELECTED PROJECTS
              </h2>
            </div>

            {/* Filter buttons - horizontally scrollable on mobile */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 sm:pb-0 sm:mb-0 scrollbar-none"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {projectFilterCategories.map((cat) => {
                const isActive = activeFilter === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`font-heading font-700 text-xs tracking-[0.16em] uppercase px-5 sm:px-6 py-2.5 sm:py-3 border transition-all duration-200 min-h-[42px] whitespace-nowrap active:scale-[0.98] ${
                      isActive
                        ? 'bg-brand-yellow text-charcoal-900 border-brand-yellow shadow-md'
                        : 'bg-charcoal-800 text-concrete-300 border-charcoal-700 hover:border-concrete-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Project Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
              {filtered.map((project, i) => (
                <RevealWrapper key={project.id}>
                  <div className={`reveal delay-${Math.min(((i % 3) + 1) * 100, 400)} h-full`}>
                    <ProjectCard project={project} />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-charcoal-800/40 border border-charcoal-700">
              <p className="font-heading font-700 text-concrete-400 text-lg uppercase tracking-wide">
                No projects in this category currently
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 font-heading font-700 text-xs tracking-[0.15em] uppercase text-brand-yellow hover:text-brand-amber underline"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Discreet Maintenance Notice for Developers/Business Owner */}
          <div className="mt-12 sm:mt-16 border border-dashed border-charcoal-700 bg-charcoal-800/40 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <FileText size={18} className="text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.15em] uppercase mb-1">
                  Developer / Content Note — Project Placeholders
                </p>
                <p className="text-xs sm:text-sm text-concrete-400 leading-relaxed">
                  Project entries shown above are design placeholders. When real project photography and specifications are available, replace the placeholder data in{' '}
                  <code className="text-brand-yellow bg-charcoal-900 px-1.5 py-0.5 rounded text-xs">
                    src/data/projects.js
                  </code>
                  . The grid and category filters will automatically update.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED PROJECT AREA (PROJECT SPOTLIGHT) ──────────────────── */}
      <section
        className="section-pad bg-charcoal-950 border-b border-charcoal-800"
        aria-label="Project Spotlight"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                FEATURED SHOWCASE
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                PROJECT SPOTLIGHT
              </h2>
            </div>
          </RevealWrapper>

          {/* Large Editorial Spotlight Box */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-charcoal-900 border border-charcoal-700 p-6 sm:p-8 lg:p-12 shadow-2xl">
            {/* Visual Frame */}
            <div className="lg:col-span-7">
              <RevealWrapper>
                <div className="reveal-left">
                  <div className="relative group">
                    <div className="relative overflow-hidden border border-charcoal-700 bg-charcoal-950">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                        alt="High-rise civil building construction — design placeholder"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

                      {/* Editorial Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="border border-brand-yellow/40 bg-charcoal-950/85 backdrop-blur-sm px-6 py-4 text-center max-w-sm">
                          <p className="font-heading font-800 text-brand-yellow text-sm tracking-[0.22em] uppercase mb-1">
                            CASE STUDY SPOTLIGHT
                          </p>
                          <p className="text-xs text-concrete-300 uppercase tracking-wider">
                            Photography & Documentation Pending
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Architectural corner frame accents */}
                    <div className="absolute -top-2.5 -left-2.5 w-12 h-12 border-t-2 border-l-2 border-brand-yellow hidden sm:block pointer-events-none" />
                    <div className="absolute -bottom-2.5 -right-2.5 w-12 h-12 border-b-2 border-r-2 border-charcoal-600 hidden sm:block pointer-events-none" />
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Editorial Information Column */}
            <div className="lg:col-span-5">
              <RevealWrapper>
                <div className="reveal-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-800 border border-charcoal-700 text-brand-yellow font-heading font-700 text-xs tracking-[0.18em] uppercase mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                    PORTFOLIO DOCUMENTATION
                  </div>

                  <h3
                    className="font-heading font-900 text-white tracking-tight leading-[1.08] mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)' }}
                  >
                    UPCOMING COMPREHENSIVE
                    <br />
                    <span className="text-concrete-300">CASE STUDY</span>
                  </h3>

                  <p className="text-sm sm:text-base text-concrete-300 leading-relaxed mb-6">
                    Detailed project information and photography will be added as the Jairaj Construction portfolio is documented.
                  </p>

                  {/* Factual Specification Framework (No invented claims) */}
                  <div className="space-y-3 pt-5 border-t border-charcoal-700/80 mb-8">
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-charcoal-800">
                      <span className="text-concrete-500 uppercase tracking-wider font-heading">
                        Sectors Covered
                      </span>
                      <span className="text-white font-medium">Residential &bull; Apartments &bull; Industrial</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-charcoal-800">
                      <span className="text-concrete-500 uppercase tracking-wider font-heading">
                        Primary Region
                      </span>
                      <span className="text-white font-medium">Nashik &bull; Dindori &bull; Sinnar</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-charcoal-800">
                      <span className="text-concrete-500 uppercase tracking-wider font-heading">
                        Experience Track
                      </span>
                      <span className="text-white font-medium">15+ Years / 25+ Completed</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-1.5">
                      <span className="text-concrete-500 uppercase tracking-wider font-heading">
                        Documentation Phase
                      </span>
                      <span className="text-brand-yellow font-medium">In Compilation</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-7 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:bg-brand-amber transition-colors duration-200 active:scale-[0.99] w-full sm:w-auto"
                  >
                    Discuss Your Construction Project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        heading="HAVE A PROJECT TO BUILD?"
        subtext="Let's discuss your next construction project."
        primaryLabel="Start a Project"
        primaryTo="/contact"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
        variant="dark"
      />
    </>
  )
}
