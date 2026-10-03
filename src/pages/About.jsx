import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Home,
  Building2,
  Factory,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Layers,
  Award,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import RevealWrapper from '../components/RevealWrapper'
import { company } from '../data/content'

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] sm:min-h-[70vh] flex flex-col justify-end overflow-hidden"
        aria-label="About — Jairaj Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
            alt="Structural civil construction site with tower cranes — design placeholder"
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
              ABOUT JAIRAJ CONSTRUCTION
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
              BUILT ON
              <br />
              <span className="text-concrete-200">EXPERIENCE.</span>
            </h1>
          </div>

          {/* Supporting copy */}
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-concrete-300 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            With 15+ years of experience and 25+ projects, Jairaj Construction serves residential, apartment and industrial construction requirements across Nashik, Dindori and Sinnar.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR EXPERIENCE (Large Editorial Section) ──────────────────── */}
      <section
        className="section-pad bg-offwhite border-b border-concrete-200"
        aria-label="Our Experience"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-left">
                  <p className="font-heading font-700 text-brand-amber text-xs tracking-[0.25em] uppercase mb-2">
                    OUR EXPERIENCE
                  </p>
                  <h2
                    className="font-heading font-900 text-charcoal-900 tracking-tight leading-[1.05]"
                    style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                  >
                    15+ YEARS
                    <br />
                    <span className="text-concrete-500">OF EXPERIENCE.</span>
                  </h2>

                  <p className="mt-5 text-base sm:text-lg text-concrete-500 leading-relaxed font-medium">
                    A construction firm built on practical expertise, direct supervision, and structural discipline across Nashik district.
                  </p>

                  <div className="mt-4 space-y-3.5 text-sm sm:text-base text-concrete-400 leading-relaxed">
                    <p>
                      Jairaj Construction brings more than 15 years of construction experience to residential, apartment, and industrial projects in Nashik, Dindori, and Sinnar. Over that time, the company has completed 25+ projects across the region.
                    </p>
                    <p>
                      Our work is grounded in direct, hands-on construction management — ensuring that every foundation is sound, every load-bearing frame complies with structural engineering principles, and every project is supervised with care from initial excavation to final handover.
                    </p>
                    <p>
                      By maintaining a strict focus on quality materials, disciplined execution, and regional environmental factors, we deliver structures that remain dependable, functional, and durable over decades.
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  <div className="mt-7 pt-6 border-t border-concrete-200 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                      <p className="font-heading font-900 text-charcoal-900 text-2xl leading-none">15+</p>
                      <p className="font-heading font-600 text-concrete-400 text-xs tracking-[0.15em] uppercase mt-1">
                        Years of Experience
                      </p>
                    </div>
                    <div className="bg-white p-4 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                      <p className="font-heading font-900 text-charcoal-900 text-2xl leading-none">25+</p>
                      <p className="font-heading font-600 text-concrete-400 text-xs tracking-[0.15em] uppercase mt-1">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-right">
                  <div className="relative group">
                    <div className="relative overflow-hidden border border-concrete-300 bg-charcoal-900 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
                        alt="Architectural construction framework and planning — design placeholder"
                        className="w-full h-[360px] sm:h-[440px] lg:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                      {/* Watermark Tag */}
                      <div className="absolute bottom-4 left-4 bg-charcoal-950/90 border border-charcoal-700 px-4 py-2 backdrop-blur-sm">
                        <span className="font-heading font-800 text-brand-yellow text-xs tracking-[0.2em] uppercase">
                          CIVIL EXECUTION &bull; NASHIK
                        </span>
                      </div>
                    </div>
                    {/* Architectural corner frame accents */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-brand-yellow hidden sm:block pointer-events-none" />
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-charcoal-900 hidden sm:block pointer-events-none" />
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT WE BUILD ───────────────────────────────────────────── */}
      <section
        className="section-pad bg-charcoal-900 border-b border-charcoal-800"
        aria-label="What We Build"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                CONSTRUCTION SECTORS
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                WHAT WE BUILD
              </h2>
              <p className="mt-4 text-sm sm:text-base text-concrete-300 leading-relaxed max-w-xl mx-auto">
                Specialized execution across three core disciplines of civil and building construction.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6">
            {/* Card 1: Residential */}
            <RevealWrapper>
              <div className="reveal delay-100 bg-charcoal-800 border border-charcoal-700 hover:border-brand-yellow/60 transition-all duration-300 flex flex-col h-full group">
                <div className="relative overflow-hidden h-52 sm:h-56 bg-charcoal-950">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Residential house construction — design placeholder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-brand-yellow text-charcoal-900 font-heading font-800 text-xs tracking-[0.16em] uppercase px-2.5 py-1">
                    01 / RESIDENTIAL
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-800 text-white text-xl uppercase tracking-wide mb-2">
                      Residential
                    </h3>
                    <p className="text-xs sm:text-sm text-concrete-400 leading-relaxed mb-4">
                      Houses and residential construction. Thoughtful planning, structural precision, and durable materials for independent and family homes.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-charcoal-700">
                    <Link
                      to="/services#residential"
                      className="inline-flex items-center gap-2 text-xs font-heading font-700 tracking-[0.15em] uppercase text-brand-yellow hover:text-brand-amber transition-colors group/link"
                    >
                      Explore Residential
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Card 2: Apartments */}
            <RevealWrapper>
              <div className="reveal delay-200 bg-charcoal-800 border border-charcoal-700 hover:border-brand-yellow/60 transition-all duration-300 flex flex-col h-full group">
                <div className="relative overflow-hidden h-52 sm:h-56 bg-charcoal-950">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                    alt="Apartment building construction — design placeholder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-brand-yellow text-charcoal-900 font-heading font-800 text-xs tracking-[0.16em] uppercase px-2.5 py-1">
                    02 / APARTMENTS
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-800 text-white text-xl uppercase tracking-wide mb-2">
                      Apartments
                    </h3>
                    <p className="text-xs sm:text-sm text-concrete-400 leading-relaxed mb-4">
                      Multi-unit residential construction. Disciplined execution, structural coordination, and consistent quality across multi-storey developments.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-charcoal-700">
                    <Link
                      to="/services#apartments"
                      className="inline-flex items-center gap-2 text-xs font-heading font-700 tracking-[0.15em] uppercase text-brand-yellow hover:text-brand-amber transition-colors group/link"
                    >
                      Explore Apartments
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Card 3: Industrial */}
            <RevealWrapper>
              <div className="reveal delay-300 bg-charcoal-800 border border-charcoal-700 hover:border-brand-yellow/60 transition-all duration-300 flex flex-col h-full group">
                <div className="relative overflow-hidden h-52 sm:h-56 bg-charcoal-950">
                  <img
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
                    alt="Industrial building construction — design placeholder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-brand-yellow text-charcoal-900 font-heading font-800 text-xs tracking-[0.16em] uppercase px-2.5 py-1">
                    03 / INDUSTRIAL
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-800 text-white text-xl uppercase tracking-wide mb-2">
                      Industrial
                    </h3>
                    <p className="text-xs sm:text-sm text-concrete-400 leading-relaxed mb-4">
                      Industrial building construction. Engineered large-span structural systems, heavy-duty floor capacities, and durable operational envelopes.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-charcoal-700">
                    <Link
                      to="/services#industrial"
                      className="inline-flex items-center gap-2 text-xs font-heading font-700 tracking-[0.15em] uppercase text-brand-yellow hover:text-brand-amber transition-colors group/link"
                    >
                      Explore Industrial
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR APPROACH ───────────────────────────────────────────── */}
      <section
        className="section-pad bg-offwhite border-b border-concrete-200"
        aria-label="Our Approach"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <p className="font-heading font-700 text-brand-amber text-xs tracking-[0.25em] uppercase mb-2">
                OUR PRINCIPLES
              </p>
              <h2
                className="font-heading font-900 text-charcoal-900 tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                BUILT WITH PURPOSE.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-concrete-500 leading-relaxed max-w-2xl mx-auto">
                Four guiding principles that govern our construction practices across all projects.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 1: Quality */}
            <RevealWrapper>
              <div className="reveal delay-100 bg-white border border-concrete-300 p-6 sm:p-7 flex flex-col justify-between h-full border-t-4 border-t-brand-yellow shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-heading font-700 text-brand-amber text-xs tracking-[0.2em] uppercase">
                    01 / STANDARD
                  </span>
                  <h3 className="font-heading font-900 text-charcoal-900 text-xl tracking-wide uppercase mt-2 mb-3">
                    Quality
                  </h3>
                  <p className="text-xs sm:text-sm text-concrete-500 leading-relaxed">
                    Focus on quality workmanship and materials. We use verified materials and enforce disciplined quality control at every stage of construction.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Principle 2: Precision */}
            <RevealWrapper>
              <div className="reveal delay-200 bg-white border border-concrete-300 p-6 sm:p-7 flex flex-col justify-between h-full border-t-4 border-t-brand-yellow shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-heading font-700 text-brand-amber text-xs tracking-[0.2em] uppercase">
                    02 / EXECUTION
                  </span>
                  <h3 className="font-heading font-900 text-charcoal-900 text-xl tracking-wide uppercase mt-2 mb-3">
                    Precision
                  </h3>
                  <p className="text-xs sm:text-sm text-concrete-500 leading-relaxed">
                    Disciplined construction execution. Adherence to architectural plans, engineering tolerances, and structural alignment throughout the build.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Principle 3: Durability */}
            <RevealWrapper>
              <div className="reveal delay-300 bg-white border border-concrete-300 p-6 sm:p-7 flex flex-col justify-between h-full border-t-4 border-t-brand-yellow shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-heading font-700 text-brand-amber text-xs tracking-[0.2em] uppercase">
                    03 / LONGEVITY
                  </span>
                  <h3 className="font-heading font-900 text-charcoal-900 text-xl tracking-wide uppercase mt-2 mb-3">
                    Durability
                  </h3>
                  <p className="text-xs sm:text-sm text-concrete-500 leading-relaxed">
                    Construction designed with long-term performance in mind. Robust moisture barriers, thorough concrete curing, and weather-resistant detailing.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Principle 4: Responsibility */}
            <RevealWrapper>
              <div className="reveal delay-400 bg-white border border-concrete-300 p-6 sm:p-7 flex flex-col justify-between h-full border-t-4 border-t-brand-yellow shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-heading font-700 text-brand-amber text-xs tracking-[0.2em] uppercase">
                    04 / MANAGEMENT
                  </span>
                  <h3 className="font-heading font-900 text-charcoal-900 text-xl tracking-wide uppercase mt-2 mb-3">
                    Responsibility
                  </h3>
                  <p className="text-xs sm:text-sm text-concrete-500 leading-relaxed">
                    Professional and organized project execution. Clear communication, systematic milestone tracking, and respect for client parameters.
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ─── 5. OUR REACH ─────────────────────────────────────────────────── */}
      <section
        className="section-pad bg-charcoal-950 border-b border-charcoal-800"
        aria-label="Our Reach"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                SERVICE AREAS
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                SERVING THE REGION.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-concrete-300 leading-relaxed max-w-xl mx-auto">
                Jairaj Construction operates across Nashik district, serving clients with local regional knowledge and reliable execution.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Nashik */}
            <RevealWrapper>
              <div className="reveal delay-100 bg-charcoal-900 border border-charcoal-700 p-8 text-center hover:border-brand-yellow/60 transition-colors group">
                <div className="w-10 h-10 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <h3 className="font-heading font-900 text-white text-2xl uppercase tracking-wider mb-2">
                  Nashik
                </h3>
                <p className="text-xs text-concrete-400 leading-relaxed uppercase tracking-wider">
                  Maharashtra, India
                </p>
                <div className="w-8 h-0.5 bg-brand-yellow/60 mx-auto mt-4" />
              </div>
            </RevealWrapper>

            {/* Dindori */}
            <RevealWrapper>
              <div className="reveal delay-200 bg-charcoal-900 border border-charcoal-700 p-8 text-center hover:border-brand-yellow/60 transition-colors group">
                <div className="w-10 h-10 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <h3 className="font-heading font-900 text-white text-2xl uppercase tracking-wider mb-2">
                  Dindori
                </h3>
                <p className="text-xs text-concrete-400 leading-relaxed uppercase tracking-wider">
                  Maharashtra, India
                </p>
                <div className="w-8 h-0.5 bg-brand-yellow/60 mx-auto mt-4" />
              </div>
            </RevealWrapper>

            {/* Sinnar */}
            <RevealWrapper>
              <div className="reveal delay-300 bg-charcoal-900 border border-charcoal-700 p-8 text-center hover:border-brand-yellow/60 transition-colors group">
                <div className="w-10 h-10 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <h3 className="font-heading font-900 text-white text-2xl uppercase tracking-wider mb-2">
                  Sinnar
                </h3>
                <p className="text-xs text-concrete-400 leading-relaxed uppercase tracking-wider">
                  Maharashtra, India
                </p>
                <div className="w-8 h-0.5 bg-brand-yellow/60 mx-auto mt-4" />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ─── 6. TRACK RECORD ──────────────────────────────────────────────── */}
      <section
        className="section-pad bg-charcoal-900 border-b border-charcoal-800"
        aria-label="Track Record"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-14">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                VERIFIED METRICS
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                PROVEN TRACK RECORD
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Stat 1 */}
            <RevealWrapper>
              <div className="reveal delay-100 bg-charcoal-800 border-l-4 border-brand-yellow border-y border-r border-charcoal-700 p-8 text-center sm:text-left">
                <p
                  className="font-heading font-900 text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
                >
                  15+
                </p>
                <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.2em] uppercase mt-2 mb-2">
                  Years Experience
                </p>
                <p className="text-xs text-concrete-400 leading-relaxed">
                  Over a decade and a half of practical construction work in the region.
                </p>
              </div>
            </RevealWrapper>

            {/* Stat 2 */}
            <RevealWrapper>
              <div className="reveal delay-200 bg-charcoal-800 border-l-4 border-brand-yellow border-y border-r border-charcoal-700 p-8 text-center sm:text-left">
                <p
                  className="font-heading font-900 text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
                >
                  25+
                </p>
                <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.2em] uppercase mt-2 mb-2">
                  Projects
                </p>
                <p className="text-xs text-concrete-400 leading-relaxed">
                  A growing portfolio across residential, apartment, and industrial builds.
                </p>
              </div>
            </RevealWrapper>

            {/* Stat 3 */}
            <RevealWrapper>
              <div className="reveal delay-300 bg-charcoal-800 border-l-4 border-brand-yellow border-y border-r border-charcoal-700 p-8 text-center sm:text-left">
                <p
                  className="font-heading font-900 text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
                >
                  3
                </p>
                <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.2em] uppercase mt-2 mb-2">
                  Core Construction Sectors
                </p>
                <p className="text-xs text-concrete-400 leading-relaxed">
                  Residential house construction, apartment complexes, and industrial buildings.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ─── 7. FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        heading="LET'S BUILD YOUR NEXT PROJECT."
        subtext="Tell us what you're planning to build."
        primaryLabel="Start a Project"
        primaryTo="/contact"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
        variant="dark"
      />
    </>
  )
}
