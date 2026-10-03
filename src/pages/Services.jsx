import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  MapPin,
  ClipboardList,
  HardHat,
  CheckCircle,
  Building,
  Layers,
  ShieldCheck,
  Compass,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import RevealWrapper from '../components/RevealWrapper'

export default function Services() {
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
        aria-label="Services — Jairaj Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
            alt="Architectural and structural building construction — design placeholder"
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
              OUR CAPABILITIES
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
              CONSTRUCTION
              <br />
              <span className="text-concrete-200">BUILT WITH PURPOSE.</span>
            </h1>
          </div>

          {/* Supporting text */}
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-concrete-300 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            From residential homes to apartment developments and industrial structures, Jairaj Construction delivers construction solutions focused on quality, precision and dependable execution.
          </p>
        </div>
      </section>

      {/* ─── 2. RESIDENTIAL CONSTRUCTION (Large Editorial Section) ────────── */}
      <section
        id="residential"
        className="section-pad bg-offwhite border-b border-concrete-200"
        aria-label="Residential Construction"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-left">
                  <div className="relative group">
                    <div className="relative overflow-hidden border border-concrete-300 bg-charcoal-900 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                        alt="Residential house construction — design placeholder"
                        className="w-full h-[360px] sm:h-[440px] lg:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                      {/* Number tag */}
                      <div className="absolute bottom-4 left-4 bg-charcoal-950/90 border border-charcoal-700 px-4 py-2 backdrop-blur-sm">
                        <span className="font-heading font-800 text-brand-yellow text-sm tracking-[0.2em] uppercase">
                          DISCIPLINE 01
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

            {/* Content Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-right">
                  <p className="font-heading font-700 text-brand-amber text-xs tracking-[0.25em] uppercase mb-2">
                    01 / RESIDENTIAL CONSTRUCTION
                  </p>
                  <h2
                    className="font-heading font-900 text-charcoal-900 tracking-tight leading-[1.05]"
                    style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                  >
                    THOUGHTFULLY EXECUTED.
                    <br />
                    <span className="text-concrete-500">BUILT TO LAST.</span>
                  </h2>

                  <p className="mt-5 text-base sm:text-lg text-concrete-500 leading-relaxed">
                    Thoughtfully executed residential construction focused on quality, functionality and long-term durability.
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-concrete-400 leading-relaxed">
                    We handle residential construction projects with an emphasis on structural precision, sound materials, and disciplined on-site supervision. Every home we build is approached with the same standard — whether an independent residential house or a custom family residence, our priority remains delivering a solid structure built to endure generations.
                  </p>

                  {/* Key focus points */}
                  <div className="mt-7 pt-6 border-t border-concrete-200">
                    <p className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.2em] uppercase mb-4">
                      Key Focus Points
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Structural Execution
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Robust foundation work, reinforced RCC framing, and strict engineering compliance.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Quality Workmanship
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Disciplined masonry, proper curing, precise alignment, and meticulous finishing.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Functional Planning
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Thoughtful spatial layout ensuring airflow, natural lighting, and long-term utility.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Long-Term Durability
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Material selection and waterproofing protection suited for regional weather demands.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      to="/contact?service=residential"
                      className="inline-flex items-center justify-center gap-3 bg-charcoal-900 text-white font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:bg-charcoal-800 transition-colors duration-200 shadow-md active:scale-[0.99]"
                    >
                      Discuss a Residential Project
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. APARTMENT CONSTRUCTION ────────────────────────────────────── */}
      <section
        id="apartments"
        className="section-pad bg-charcoal-900 border-b border-charcoal-800"
        aria-label="Apartment Construction"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Column (left on desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealWrapper>
                <div className="reveal-left">
                  <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                    02 / APARTMENT CONSTRUCTION
                  </p>
                  <h2
                    className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                    style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                  >
                    DISCIPLINED EXECUTION.
                    <br />
                    <span className="text-concrete-300">MULTI-UNIT RIGOUR.</span>
                  </h2>

                  <p className="mt-5 text-base sm:text-lg text-concrete-300 leading-relaxed">
                    Construction solutions for apartment developments with an emphasis on disciplined execution and dependable workmanship.
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-concrete-400 leading-relaxed">
                    Multi-storey residential construction demands complex structural coordination, strict adherence to load-bearing designs, and consistent quality across all living units. We bring systematic project management to multi-unit builds — managing schedules and trades without compromising structural integrity or finish quality.
                  </p>

                  {/* Key focus points */}
                  <div className="mt-7 pt-6 border-t border-charcoal-700">
                    <p className="font-heading font-700 text-concrete-400 text-xs tracking-[0.2em] uppercase mb-4">
                      Key Focus Points
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div className="bg-charcoal-800 p-3.5 border-l-2 border-brand-yellow border-y border-r border-charcoal-700">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-white text-xs tracking-[0.1em] uppercase">
                            Multi-Unit Residential
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-400 leading-relaxed pl-5">
                          Multi-family development execution tailored to structured floor layouts.
                        </p>
                      </div>

                      <div className="bg-charcoal-800 p-3.5 border-l-2 border-brand-yellow border-y border-r border-charcoal-700">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-white text-xs tracking-[0.1em] uppercase">
                            Disciplined Execution
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-400 leading-relaxed pl-5">
                          Coordinated stage-by-stage construction from basement excavation to roof slabs.
                        </p>
                      </div>

                      <div className="bg-charcoal-800 p-3.5 border-l-2 border-brand-yellow border-y border-r border-charcoal-700">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-white text-xs tracking-[0.1em] uppercase">
                            Coordination
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-400 leading-relaxed pl-5">
                          Seamless alignment between civil teams, MEP conduits, and trade contractors.
                        </p>
                      </div>

                      <div className="bg-charcoal-800 p-3.5 border-l-2 border-brand-yellow border-y border-r border-charcoal-700">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-white text-xs tracking-[0.1em] uppercase">
                            Quality & Durability
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-400 leading-relaxed pl-5">
                          Concrete batch consistency, rigorous quality checks, and external weatherproofing.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      to="/contact?service=apartment"
                      className="inline-flex items-center justify-center gap-3 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:bg-brand-amber transition-colors duration-200 active:scale-[0.99]"
                    >
                      Discuss an Apartment Project
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Image Column (right on desktop) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <RevealWrapper>
                <div className="reveal-right">
                  <div className="relative group">
                    <div className="relative overflow-hidden border border-charcoal-700 bg-charcoal-950 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                        alt="Apartment building construction — design placeholder"
                        className="w-full h-[360px] sm:h-[440px] lg:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                      {/* Number tag */}
                      <div className="absolute bottom-4 left-4 bg-charcoal-950/90 border border-charcoal-700 px-4 py-2 backdrop-blur-sm">
                        <span className="font-heading font-800 text-brand-yellow text-sm tracking-[0.2em] uppercase">
                          DISCIPLINE 02
                        </span>
                      </div>
                    </div>
                    {/* Architectural frame accents */}
                    <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-yellow hidden sm:block pointer-events-none" />
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-charcoal-700 hidden sm:block pointer-events-none" />
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. INDUSTRIAL BUILDINGS ───────────────────────────────────────── */}
      <section
        id="industrial"
        className="section-pad bg-offwhite border-b border-concrete-200"
        aria-label="Industrial Buildings"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-left">
                  <div className="relative group">
                    <div className="relative overflow-hidden border border-concrete-300 bg-charcoal-900 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                        alt="Industrial building construction and structural framework — design placeholder"
                        className="w-full h-[360px] sm:h-[440px] lg:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                      {/* Number tag */}
                      <div className="absolute bottom-4 left-4 bg-charcoal-950/90 border border-charcoal-700 px-4 py-2 backdrop-blur-sm">
                        <span className="font-heading font-800 text-brand-yellow text-sm tracking-[0.2em] uppercase">
                          DISCIPLINE 03
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

            {/* Content Column */}
            <div className="lg:col-span-6">
              <RevealWrapper>
                <div className="reveal-right">
                  <p className="font-heading font-700 text-brand-amber text-xs tracking-[0.25em] uppercase mb-2">
                    03 / INDUSTRIAL BUILDINGS
                  </p>
                  <h2
                    className="font-heading font-900 text-charcoal-900 tracking-tight leading-[1.05]"
                    style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                  >
                    STRUCTURAL ROBUSTNESS.
                    <br />
                    <span className="text-concrete-500">HEAVY-DUTY UTILITY.</span>
                  </h2>

                  <p className="mt-5 text-base sm:text-lg text-concrete-500 leading-relaxed">
                    Robust construction solutions for industrial spaces designed around structural requirements, functionality and durability.
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-concrete-400 leading-relaxed">
                    Industrial construction requires specialized engineering — wide structural spans, high-capacity flooring, and heavy-duty load capabilities that go beyond standard civil construction. We approach industrial construction with deep respect for these functional requirements, delivering facilities built to operate reliably day after day.
                  </p>

                  {/* Key focus points */}
                  <div className="mt-7 pt-6 border-t border-concrete-200">
                    <p className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.2em] uppercase mb-4">
                      Key Focus Points
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Structural Construction
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Engineered large-span structural systems, heavy-duty foundations, and load-bearing framing.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Functional Spaces
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Purpose-built configurations planned for machinery access, circulation, and workflow.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Durable Construction
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Industrial-grade concrete, hard-wearing floor finishes, and durable structural shells.
                        </p>
                      </div>

                      <div className="bg-white p-3.5 border-l-2 border-brand-yellow border-y border-r border-concrete-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                          <h3 className="font-heading font-700 text-charcoal-900 text-xs tracking-[0.1em] uppercase">
                            Execution-Focused
                          </h3>
                        </div>
                        <p className="text-xs text-concrete-500 leading-relaxed pl-5">
                          Methodical on-site coordination adhering strictly to safety parameters and timelines.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      to="/contact?service=industrial"
                      className="inline-flex items-center justify-center gap-3 bg-charcoal-900 text-white font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:bg-charcoal-800 transition-colors duration-200 shadow-md active:scale-[0.99]"
                    >
                      Discuss an Industrial Project
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PROJECT JOURNEY ────────────────────────────────────────────── */}
      <section
        className="section-pad bg-charcoal-950 border-b border-charcoal-800"
        aria-label="Project Journey"
      >
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-3">
                PROJECT JOURNEY
              </p>
              <h2
                className="font-heading font-900 text-white tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                FROM REQUIREMENT
                <br />
                <span className="text-concrete-300">TO COMPLETION</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-concrete-400 leading-relaxed max-w-2xl mx-auto">
                A general overview of how construction projects typically progress from initial conversation to finished handover.
              </p>
            </div>
          </RevealWrapper>

          {/* 5-step process progression */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-charcoal-800 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
              {/* Step 01 */}
              <RevealWrapper>
                <div className="reveal delay-100 bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col h-full hover:border-brand-yellow/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-900 text-brand-yellow text-2xl tracking-wider">
                      01
                    </span>
                    <div className="w-9 h-9 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-brand-yellow">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase mb-2">
                    Consultation
                  </h3>
                  <p className="text-xs text-concrete-400 leading-relaxed">
                    Initial discussion to understand project requirements, scope, functional objectives, and preliminary vision.
                  </p>
                </div>
              </RevealWrapper>

              {/* Step 02 */}
              <RevealWrapper>
                <div className="reveal delay-200 bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col h-full hover:border-brand-yellow/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-900 text-brand-yellow text-2xl tracking-wider">
                      02
                    </span>
                    <div className="w-9 h-9 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-brand-yellow">
                      <MapPin size={16} />
                    </div>
                  </div>
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase mb-2">
                    Site & Requirements
                  </h3>
                  <p className="text-xs text-concrete-400 leading-relaxed">
                    Site assessment, reviewing ground parameters, access considerations, and evaluating structural guidelines.
                  </p>
                </div>
              </RevealWrapper>

              {/* Step 03 */}
              <RevealWrapper>
                <div className="reveal delay-300 bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col h-full hover:border-brand-yellow/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-900 text-brand-yellow text-2xl tracking-wider">
                      03
                    </span>
                    <div className="w-9 h-9 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-brand-yellow">
                      <ClipboardList size={16} />
                    </div>
                  </div>
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase mb-2">
                    Planning & Estimation
                  </h3>
                  <p className="text-xs text-concrete-400 leading-relaxed">
                    Preparation of material estimates, structural planning, quantity evaluation, and milestone scheduling.
                  </p>
                </div>
              </RevealWrapper>

              {/* Step 04 */}
              <RevealWrapper>
                <div className="reveal delay-400 bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col h-full hover:border-brand-yellow/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-900 text-brand-yellow text-2xl tracking-wider">
                      04
                    </span>
                    <div className="w-9 h-9 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-brand-yellow">
                      <HardHat size={16} />
                    </div>
                  </div>
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase mb-2">
                    Construction
                  </h3>
                  <p className="text-xs text-concrete-400 leading-relaxed">
                    Disciplined on-site execution with quality control across foundation, structural RCC framework, and finishing.
                  </p>
                </div>
              </RevealWrapper>

              {/* Step 05 */}
              <RevealWrapper>
                <div className="reveal delay-500 bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col h-full hover:border-brand-yellow/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-900 text-brand-yellow text-2xl tracking-wider">
                      05
                    </span>
                    <div className="w-9 h-9 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-brand-yellow">
                      <CheckCircle size={16} />
                    </div>
                  </div>
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase mb-2">
                    Handover
                  </h3>
                  <p className="text-xs text-concrete-400 leading-relaxed">
                    Thorough final inspection, completion of finishing details, and formal handover of the completed structure.
                  </p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        heading="HAVE A PROJECT IN MIND?"
        subtext="Let's discuss what you're planning to build."
        primaryLabel="Start a Project"
        primaryTo="/contact"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
        variant="dark"
      />
    </>
  )
}
