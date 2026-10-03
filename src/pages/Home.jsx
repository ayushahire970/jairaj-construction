import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MessageSquare, MapPin, ClipboardList, HardHat, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import CTASection from '../components/CTASection'
import RevealWrapper from '../components/RevealWrapper'
import { company, services, whyJairaj, processSteps } from '../data/content'
import { projects } from '../data/projects'

// Icon map for process steps
const iconMap = {
  MessageSquare: <MessageSquare size={24} />,
  MapPin: <MapPin size={24} />,
  ClipboardList: <ClipboardList size={24} />,
  HardHat: <HardHat size={24} />,
  CheckCircle2: <CheckCircle2 size={24} />,
}

const heroStats = [
  { value: '15+', numericValue: 15, suffix: '+', label: 'Years Experience', animated: true },
  { value: '25+', numericValue: 25, suffix: '+', label: 'Projects', animated: true },
  { value: '3', numericValue: 3, suffix: '', label: 'Core Services', animated: true },
]

// Show only first 6 projects on homepage
const previewProjects = projects.slice(0, 6)

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    // Trigger hero animation after mount
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col justify-end overflow-hidden"
        aria-label="Hero — Jairaj Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
            alt="Modern civil and commercial building construction site with cranes and concrete structure — design placeholder"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Multi-layered dark industrial overlays for high contrast and readability */}
          <div className="absolute inset-0 bg-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Left accent structural bar */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-yellow" />
        </div>

        {/* Hero content */}
        <div className="relative container-wide pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-36 md:pt-40">
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

          {/* Main heading */}
          <div
            className={`transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-heading font-700 text-brand-yellow text-xs sm:text-sm tracking-[0.28em] uppercase mb-2 sm:mb-3">
              JAIRAJ CONSTRUCTION
            </p>
            <h1
              className="font-heading font-900 text-white tracking-tight leading-[1.04]"
              style={{ fontSize: 'clamp(2.1rem, 5.1vw, 4rem)' }}
            >
              BUILDING STRONG.
              <br />
              <span className="text-concrete-200">BUILDING FOR GENERATIONS.</span>
            </h1>
          </div>

          {/* Supporting text */}
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-concrete-300 max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Construction solutions built around quality, precision and dependable execution.
          </p>

          {/* CTAs */}
          <div
            className={`mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4 transition-all duration-700 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:bg-brand-amber transition-colors duration-200 active:scale-[0.99]"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-charcoal-900/70 backdrop-blur-sm text-white border border-white/30 font-heading font-700 text-xs sm:text-sm tracking-[0.15em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[52px] hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200 active:scale-[0.99]"
            >
              View Our Projects
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Stats stats={heroStats} theme="light" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2 text-concrete-500">
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase writing-mode-vertical rotate-90">
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ────────────────────────────────────────────────── */}
      <section className="section-pad bg-offwhite" aria-label="About preview">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealWrapper>
              <div className="reveal-left">
                <SectionHeading
                  eyebrow="Who We Are"
                  title={'BUILT ON EXPERIENCE.\nDRIVEN BY QUALITY.'}
                  theme="dark"
                />
                <div className="mt-8 space-y-4 text-concrete-500 leading-relaxed">
                  <p>
                    Jairaj Construction has been delivering construction projects in Nashik and the surrounding region
                    for over 15 years. Through that time, we have worked across residential homes, apartment developments
                    and industrial buildings — bringing the same standard of workmanship to every project.
                  </p>
                  <p>
                    We serve Nashik, Dindori and Sinnar, and understand the local requirements, materials and
                    site conditions that shape construction in this part of Maharashtra.
                  </p>
                  <p>
                    Our work is grounded in disciplined execution — doing the work properly, using the right materials,
                    and building structures that stand the test of time.
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 font-heading font-700 text-sm tracking-[0.15em] uppercase text-charcoal-900 border-b-2 border-brand-yellow pb-1 hover:text-brand-amber transition-colors duration-200 group"
                  >
                    Learn More About Us
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </RevealWrapper>

            {/* Image side */}
            <RevealWrapper>
              <div className="reveal-right">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                    alt="Construction work in progress — design placeholder"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                    loading="lazy"
                  />
                  {/* Stats overlay */}
                  <div className="absolute -bottom-6 -left-6 bg-charcoal-900 p-6 border-l-4 border-brand-yellow hidden sm:block">
                    <p className="font-heading font-900 text-white text-4xl leading-none">15+</p>
                    <p className="font-heading font-600 text-concrete-400 text-xs tracking-[0.2em] uppercase mt-1">
                      Years Experience
                    </p>
                  </div>
                  {/* Accent border */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-brand-yellow hidden sm:block" />
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <section className="section-pad bg-charcoal-900" aria-label="Our services">
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
              <SectionHeading
                eyebrow="What We Do"
                title="WHAT WE BUILD"
                theme="light"
              />
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 hover:text-brand-yellow transition-colors duration-200 shrink-0 group"
              >
                All Services
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => (
              <RevealWrapper key={service.id}>
                <div className={`reveal delay-${(i + 1) * 100}`}>
                  <ServiceCard service={service} />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY JAIRAJ ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-offwhite-dark" aria-label="Why choose Jairaj Construction">
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center mb-14 lg:mb-20">
              <SectionHeading
                eyebrow="Our Strengths"
                title="WHY JAIRAJ"
                align="center"
                theme="dark"
              />
            </div>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete-200">
            {whyJairaj.map((item, i) => (
              <RevealWrapper key={i}>
                <div className={`reveal delay-${(i + 1) * 100} bg-white p-8 lg:p-10 group hover:bg-charcoal-900 transition-colors duration-300`}>
                  <p className="font-heading font-900 text-brand-yellow text-4xl leading-none mb-2 group-hover:text-brand-yellow">
                    {item.stat}
                  </p>
                  <h3 className="font-heading font-800 text-charcoal-900 text-xl uppercase tracking-wide mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-concrete-500 leading-relaxed group-hover:text-concrete-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PREVIEW ────────────────────────────────────────────── */}
      <section className="section-pad bg-charcoal-800" aria-label="Selected projects preview">
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <SectionHeading
                eyebrow="Our Portfolio"
                title="SELECTED PROJECTS"
                theme="light"
              />
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 hover:text-brand-yellow transition-colors duration-200 shrink-0 group"
              >
                View All Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewProjects.map((project, i) => (
              <RevealWrapper key={project.id}>
                <div className={`reveal delay-${Math.min((i + 1) * 100, 500)}`}>
                  <ProjectCard project={project} />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-pad bg-offwhite" aria-label="Our construction process">
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center mb-14 lg:mb-20">
              <SectionHeading
                eyebrow="How We Work"
                title={'FROM PLAN\nTO STRUCTURE'}
                align="center"
                theme="dark"
                subtitle="A general overview of the journey from initial conversation to final handover."
              />
            </div>
          </RevealWrapper>

          {/* Process steps */}
          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-concrete-200 mx-16" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 lg:gap-6 relative">
              {processSteps.map((step, i) => (
                <RevealWrapper key={i}>
                  <div className={`reveal delay-${(i + 1) * 100} flex flex-col items-center text-center`}>
                    {/* Circle */}
                    <div className="relative z-10 w-20 h-20 bg-charcoal-900 border-4 border-brand-yellow flex items-center justify-center mb-5 group-hover:bg-brand-yellow transition-colors">
                      <span className="text-brand-yellow">{iconMap[step.icon]}</span>
                    </div>
                    <p className="font-heading font-900 text-brand-yellow text-xs tracking-[0.2em] uppercase mb-1">
                      {step.number}
                    </p>
                    <h3 className="font-heading font-800 text-charcoal-900 text-lg uppercase tracking-wide mb-2">
                      {step.title}
                    </h3>
                    <p className="text-concrete-500 text-sm leading-relaxed max-w-[180px]">
                      {step.description}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ──────────────────────────────────────────────── */}
      <section className="section-pad bg-charcoal-950" aria-label="Service areas">
        <div className="container-wide">
          <RevealWrapper>
            <div className="reveal text-center mb-14">
              <SectionHeading
                eyebrow="Our Reach"
                title="SERVING THE REGION"
                align="center"
                theme="light"
                subtitle="Jairaj Construction operates across Nashik district, serving communities in and around these areas."
              />
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal-700 max-w-3xl mx-auto">
            {company.serviceAreas.map((area, i) => (
              <RevealWrapper key={area}>
                <div className={`reveal delay-${(i + 1) * 100} bg-charcoal-900 p-10 text-center group hover:bg-charcoal-800 transition-colors`}>
                  <div className="w-px h-8 bg-brand-yellow mx-auto mb-5" />
                  <h3 className="font-heading font-900 text-white text-2xl sm:text-3xl uppercase tracking-wider">
                    {area}
                  </h3>
                  <p className="text-concrete-500 text-xs tracking-[0.15em] uppercase mt-2">Maharashtra</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <CTASection
        heading="READY TO BUILD?"
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
