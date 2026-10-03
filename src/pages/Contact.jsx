import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Home,
  Building2,
  Factory,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Clock,
  Info,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import RevealWrapper from '../components/RevealWrapper'
import { company } from '../data/content'

const projectTypes = [
  { value: '', label: 'Select project type' },
  { value: 'residential', label: 'Residential House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'industrial', label: 'Industrial Building' },
  { value: 'other', label: 'Other' },
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  location: '',
  message: '',
}

const initialErrors = {}

function validate(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'Full name is required'
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number (digits only)'
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type'
  }

  if (!data.location.trim()) {
    errors.location = 'Project location is required'
  }

  if (!data.message.trim()) {
    errors.message = 'Please provide a project description'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Please provide at least 10 characters describing your project'
  }

  return errors
}

function buildWhatsAppMessage(formData) {
  const typeObj = projectTypes.find((pt) => pt.value === formData.projectType)
  const projectTypeLabel = typeObj && typeObj.label ? typeObj.label : formData.projectType || 'Not specified'
  const emailText = formData.email && formData.email.trim() ? formData.email.trim() : 'Not provided'

  return [
    'NEW PROJECT ENQUIRY',
    '----------------------------',
    '',
    'Jairaj Construction',
    '',
    `Customer Name: ${formData.name.trim()}`,
    `Customer Phone: ${formData.phone.trim()}`,
    `Customer Email: ${emailText}`,
    '',
    `Project Type: ${projectTypeLabel}`,
    `Project Location: ${formData.location.trim()}`,
    '',
    'Project Description:',
    formData.message.trim(),
    '',
    '----------------------------',
    'Submitted via Jairaj Construction website',
  ].join('\n')
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = (searchParams.get('service') || '').toLowerCase()
  const validTypes = ['residential', 'apartment', 'industrial', 'other']
  const initialProjectType = validTypes.includes(serviceParam) ? serviceParam : ''

  const [form, setForm] = useState({
    ...initialForm,
    projectType: initialProjectType,
  })
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [heroVisible, setHeroVisible] = useState(false)
  const heroRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (validTypes.includes(serviceParam)) {
      setForm((prev) => ({ ...prev, projectType: serviceParam }))
    }
  }, [serviceParam])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectProjectType = (typeKey) => {
    setForm((prev) => ({ ...prev, projectType: typeKey }))
    if (errors.projectType) {
      setErrors((prev) => ({ ...prev, projectType: undefined }))
    }
    // Smooth scroll down to the form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0]
      const el = document.getElementById(firstErrorKey)
      if (el) el.focus()
      return
    }

    const message = buildWhatsAppMessage(form)
    const encoded = encodeURIComponent(message)
    const waUrl = `${company.whatsappUrl}?text=${encoded}`

    setWhatsappUrl(waUrl)
    setStatus('success')

    // Open WhatsApp in a new tab/window
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    } catch {
      // Graceful fallback: user can use the 'OPEN WHATSAPP AGAIN' button
    }
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setWhatsappUrl('')
    setStatus('idle')
  }

  const fieldBase =
    'w-full bg-charcoal-800 border text-white text-sm px-4 py-3.5 min-h-[50px] placeholder:text-concrete-500 focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all duration-200'

  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[65vh] flex flex-col justify-end overflow-hidden"
        aria-label="Contact — Jairaj Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
            alt="Commercial construction site with concrete structure — design placeholder"
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
              GET IN TOUCH
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
              LET'S BUILD
              <br />
              <span className="text-concrete-200">SOMETHING SOLID.</span>
            </h1>
          </div>

          {/* Supporting text */}
          <p
            className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-concrete-300 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tell us about your construction project and we'll have a better understanding of what you're planning to build.
          </p>
        </div>
      </section>

      {/* ─── 5. PROJECT TYPES (Visual Selection Section) ──────────────────── */}
      <section
        className="py-12 bg-charcoal-950 border-b border-charcoal-800"
        aria-label="Select Project Type"
      >
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.2em] uppercase mb-1">
                STEP 1 OF ENQUIRY
              </p>
              <h2 className="font-heading font-800 text-white text-lg tracking-wide uppercase">
                SELECT YOUR CONSTRUCTION SECTOR
              </h2>
            </div>
            <p className="text-xs text-concrete-400">
              Click a sector to automatically pre-fill the enquiry form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Residential */}
            <button
              type="button"
              onClick={() => handleSelectProjectType('residential')}
              className={`p-5 text-left border transition-all duration-200 flex items-start gap-4 active:scale-[0.99] ${
                form.projectType === 'residential'
                  ? 'bg-charcoal-800 border-brand-yellow shadow-lg'
                  : 'bg-charcoal-900 border-charcoal-700 hover:border-concrete-500'
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border ${
                  form.projectType === 'residential'
                    ? 'bg-brand-yellow text-charcoal-900 border-brand-yellow'
                    : 'bg-charcoal-800 text-brand-yellow border-charcoal-700'
                }`}
              >
                <Home size={18} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase">
                    Residential
                  </h3>
                  {form.projectType === 'residential' && (
                    <span className="text-brand-yellow font-heading font-700 text-[11px] uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-concrete-400 mt-1">
                  Independent houses, bungalows, and private residences.
                </p>
              </div>
            </button>

            {/* Apartments */}
            <button
              type="button"
              onClick={() => handleSelectProjectType('apartment')}
              className={`p-5 text-left border transition-all duration-200 flex items-start gap-4 active:scale-[0.99] ${
                form.projectType === 'apartment'
                  ? 'bg-charcoal-800 border-brand-yellow shadow-lg'
                  : 'bg-charcoal-900 border-charcoal-700 hover:border-concrete-500'
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border ${
                  form.projectType === 'apartment'
                    ? 'bg-brand-yellow text-charcoal-900 border-brand-yellow'
                    : 'bg-charcoal-800 text-brand-yellow border-charcoal-700'
                }`}
              >
                <Building2 size={18} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase">
                    Apartments
                  </h3>
                  {form.projectType === 'apartment' && (
                    <span className="text-brand-yellow font-heading font-700 text-[11px] uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-concrete-400 mt-1">
                  Multi-unit residential developments and multi-storey builds.
                </p>
              </div>
            </button>

            {/* Industrial */}
            <button
              type="button"
              onClick={() => handleSelectProjectType('industrial')}
              className={`p-5 text-left border transition-all duration-200 flex items-start gap-4 active:scale-[0.99] ${
                form.projectType === 'industrial'
                  ? 'bg-charcoal-800 border-brand-yellow shadow-lg'
                  : 'bg-charcoal-900 border-charcoal-700 hover:border-concrete-500'
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border ${
                  form.projectType === 'industrial'
                    ? 'bg-brand-yellow text-charcoal-900 border-brand-yellow'
                    : 'bg-charcoal-800 text-brand-yellow border-charcoal-700'
                }`}
              >
                <Factory size={18} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-800 text-white text-base tracking-wide uppercase">
                    Industrial
                  </h3>
                  {form.projectType === 'industrial' && (
                    <span className="text-brand-yellow font-heading font-700 text-[11px] uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-concrete-400 mt-1">
                  Engineered industrial sheds, warehouses, and structural units.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. ENQUIRY FORM & 3. CONTACT DETAILS & 4. SERVICE AREAS ──────── */}
      <section
        ref={formRef}
        id="enquiry-form"
        className="section-pad bg-charcoal-900 border-b border-charcoal-800"
        aria-label="Project Enquiry and Contact Details"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column: Contact Details & Service Areas */}
            <div className="lg:col-span-4 space-y-10">
              {/* 3. CONTACT DETAILS */}
              <RevealWrapper>
                <div className="reveal-left">
                  <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
                    CONTACT DETAILS
                  </p>
                  <h2
                    className="font-heading font-900 text-white tracking-tight leading-[1.08] mb-6"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)' }}
                  >
                    COMMUNICATION CHANNELS
                  </h2>

                  <div className="space-y-4">
                    {/* Block 1: Call Us */}
                    <div className="bg-charcoal-800 border border-charcoal-700 p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="font-heading font-800 text-white text-xs tracking-[0.16em] uppercase">
                          CALL US
                        </p>
                        <a
                          href={company.phoneTel}
                          className="text-sm text-concrete-300 hover:text-brand-yellow font-medium mt-1 inline-block transition-colors"
                        >
                          {company.phone}
                        </a>
                      </div>
                    </div>

                    {/* Block 2: WhatsApp */}
                    <div className="bg-charcoal-800 border border-charcoal-700 p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <p className="font-heading font-800 text-white text-xs tracking-[0.16em] uppercase">
                          WHATSAPP
                        </p>
                        <a
                          href={company.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-concrete-300 hover:text-brand-yellow font-medium mt-1 inline-block transition-colors"
                        >
                          {company.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Block 3: Location */}
                    <div className="bg-charcoal-800 border border-charcoal-700 p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="font-heading font-800 text-white text-xs tracking-[0.16em] uppercase">
                          LOCATION
                        </p>
                        <p className="text-sm text-concrete-300 font-medium mt-1">
                          {company.address}
                        </p>
                      </div>
                    </div>

                    {/* Block 4: Owners */}
                    <div className="bg-charcoal-800 border border-charcoal-700 p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="font-heading font-800 text-white text-xs tracking-[0.16em] uppercase">
                          OWNERS
                        </p>
                        <div className="mt-1 space-y-0.5">
                          {company.owners.map((owner) => (
                            <p key={owner} className="text-sm text-concrete-300 font-medium">
                              {owner}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealWrapper>

              {/* 4. SERVICE AREAS */}
              <RevealWrapper>
                <div className="reveal-left delay-150">
                  <div className="bg-charcoal-800/80 border border-charcoal-700 p-6">
                    <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.2em] uppercase mb-2">
                      REGIONAL COVERAGE
                    </p>
                    <h3 className="font-heading font-800 text-white text-lg tracking-wide uppercase mb-4">
                      WHERE WE WORK
                    </h3>

                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-charcoal-900 border border-charcoal-700 p-3 text-center">
                        <p className="font-heading font-800 text-white text-xs tracking-wider uppercase">
                          NASHIK
                        </p>
                        <span className="text-[10px] text-concrete-500 uppercase">Urban Hub</span>
                      </div>
                      <div className="bg-charcoal-900 border border-charcoal-700 p-3 text-center">
                        <p className="font-heading font-800 text-white text-xs tracking-wider uppercase">
                          DINDORI
                        </p>
                        <span className="text-[10px] text-concrete-500 uppercase">North Region</span>
                      </div>
                      <div className="bg-charcoal-900 border border-charcoal-700 p-3 text-center">
                        <p className="font-heading font-800 text-white text-xs tracking-wider uppercase">
                          SINNAR
                        </p>
                        <span className="text-[10px] text-concrete-500 uppercase">Industrial Belt</span>
                      </div>
                    </div>

                    <p className="text-xs text-concrete-400 leading-relaxed mt-4 pt-3.5 border-t border-charcoal-700">
                      Serving residential, apartment, and industrial construction across Nashik, Dindori, and Sinnar.
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Right Column: 2. ENQUIRY FORM */}
            <div className="lg:col-span-8">
              <RevealWrapper>
                <div className="reveal-right">
                  <div className="bg-charcoal-950 border border-charcoal-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
                    <div className="mb-8 pb-6 border-b border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-heading font-700 text-brand-yellow text-xs tracking-[0.25em] uppercase mb-1">
                          ONLINE SUBMISSION
                        </p>
                        <h2 className="font-heading font-900 text-white text-2xl tracking-tight uppercase">
                          PROJECT ENQUIRY FORM
                        </h2>
                      </div>
                      <span className="text-xs text-concrete-400 bg-charcoal-900 px-3 py-1.5 border border-charcoal-700 self-start sm:self-auto">
                        <span className="text-brand-yellow font-bold">*</span> Required fields
                      </span>
                    </div>

                    {status === 'success' ? (
                      /* SUCCESS / READY STATE */
                      <div
                        className="bg-charcoal-900 border border-brand-yellow/50 p-8 sm:p-10 text-center"
                        role="alert"
                        aria-live="polite"
                      >
                        <div className="w-16 h-16 bg-brand-yellow/10 border-2 border-brand-yellow flex items-center justify-center mx-auto mb-6">
                          <MessageCircle size={32} className="text-brand-yellow" />
                        </div>

                        <h3 className="font-heading font-900 text-white text-3xl tracking-tight uppercase mb-3">
                          ENQUIRY READY
                        </h3>

                        <p className="text-sm sm:text-base text-concrete-300 leading-relaxed max-w-lg mx-auto mb-6">
                          Your enquiry has been prepared in WhatsApp.
                          <br />
                          Please press <strong className="text-white">Send</strong> in WhatsApp to contact Jairaj Construction.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.16em] uppercase px-8 py-3.5 min-h-[48px] hover:bg-brand-amber transition-colors active:scale-[0.98]"
                          >
                            <MessageCircle size={16} />
                            OPEN WHATSAPP AGAIN
                          </a>

                          <button
                            type="button"
                            onClick={handleReset}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-charcoal-800 border border-charcoal-700 text-concrete-300 hover:text-white hover:border-concrete-500 font-heading font-700 text-xs sm:text-sm tracking-[0.16em] uppercase px-6 py-3.5 min-h-[48px] transition-colors active:scale-[0.98]"
                          >
                            Submit Another Enquiry
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* FORM */
                      <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form" className="space-y-6">
                        {/* Row 1: Full Name & Phone Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Full Name */}
                          <div>
                            <label
                              htmlFor="name"
                              className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                            >
                              FULL NAME <span className="text-brand-yellow">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="e.g. Rahul Patil"
                              className={`${fieldBase} ${
                                errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                              }`}
                              aria-invalid={!!errors.name}
                              aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            {errors.name && (
                              <p id="name-error" className="text-red-400 text-xs mt-1.5 font-medium">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label
                              htmlFor="phone"
                              className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                            >
                              PHONE NUMBER <span className="text-brand-yellow">*</span>
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="e.g. +91 98765 43210"
                              className={`${fieldBase} ${
                                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                              }`}
                              aria-invalid={!!errors.phone}
                              aria-describedby={errors.phone ? 'phone-error' : undefined}
                            />
                            {errors.phone && (
                              <p id="phone-error" className="text-red-400 text-xs mt-1.5 font-medium">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Email & Project Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Email */}
                          <div>
                            <label
                              htmlFor="email"
                              className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                            >
                              EMAIL <span className="text-concrete-500 text-[11px] font-normal lowercase">(optional)</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="e.g. rahul@example.com"
                              className={`${fieldBase} ${
                                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                              }`}
                              aria-invalid={!!errors.email}
                              aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                              <p id="email-error" className="text-red-400 text-xs mt-1.5 font-medium">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          {/* Project Type Dropdown */}
                          <div>
                            <label
                              htmlFor="projectType"
                              className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                            >
                              PROJECT TYPE <span className="text-brand-yellow">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="projectType"
                                name="projectType"
                                value={form.projectType}
                                onChange={handleChange}
                                className={`${fieldBase} appearance-none pr-10 cursor-pointer ${
                                  errors.projectType ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                                }`}
                                aria-invalid={!!errors.projectType}
                                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                              >
                                {projectTypes.map((opt) => (
                                  <option
                                    key={opt.value}
                                    value={opt.value}
                                    disabled={opt.value === ''}
                                    className="bg-charcoal-900 text-white"
                                  >
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-concrete-400">
                                <ChevronDown size={16} />
                              </div>
                            </div>
                            {errors.projectType && (
                              <p id="projectType-error" className="text-red-400 text-xs mt-1.5 font-medium">
                                {errors.projectType}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 3: Project Location */}
                        <div>
                          <label
                            htmlFor="location"
                            className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                          >
                            PROJECT LOCATION <span className="text-brand-yellow">*</span>
                          </label>
                          <input
                            id="location"
                            name="location"
                            type="text"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="e.g. Gangapur Road, Nashik / Dindori / Sinnar"
                            className={`${fieldBase} ${
                              errors.location ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                            }`}
                            aria-invalid={!!errors.location}
                            aria-describedby={errors.location ? 'location-error' : undefined}
                          />
                          {errors.location && (
                            <p id="location-error" className="text-red-400 text-xs mt-1.5 font-medium">
                              {errors.location}
                            </p>
                          )}
                        </div>

                        {/* Row 4: Project Description */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block font-heading font-700 text-xs tracking-[0.15em] uppercase text-concrete-300 mb-2"
                          >
                            PROJECT DESCRIPTION <span className="text-brand-yellow">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Describe your construction requirements — type of structure, approximate built-up area or plot size, expected timeline, or any specific structural specifications."
                            className={`${fieldBase} resize-y min-h-[130px] ${
                              errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-charcoal-700'
                            }`}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                          />
                          {errors.message && (
                            <p id="message-error" className="text-red-400 text-xs mt-1.5 font-medium">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs sm:text-sm tracking-[0.16em] uppercase px-10 py-4 min-h-[52px] sm:min-h-[56px] hover:bg-brand-amber transition-colors duration-200 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                          >
                            {status === 'submitting' ? (
                              <>
                                <span className="animate-spin rounded-full h-4 w-4 border-2 border-charcoal-900 border-t-transparent" />
                                Processing...
                              </>
                            ) : (
                              <>
                                SEND PROJECT ENQUIRY
                                <Send size={15} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CTA / BUSINESS MESSAGE ──────────────────────────────── */}
      <CTASection
        heading="HAVE A PROJECT IN MIND?"
        subtext="From residential homes to apartment developments and industrial buildings, let's discuss what you're planning to build."
        primaryLabel="View Our Services"
        primaryTo="/services"
        secondaryLabel="Start a Project"
        secondaryTo="#enquiry-form"
        variant="dark"
      />
    </>
  )
}
