import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleStartProject = () => {
    setMobileOpen(false)
    navigate('/contact')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/98 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none group"
          aria-label="Jairaj Construction — Home"
        >
          <span className="text-brand-yellow font-heading font-900 text-xl sm:text-2xl tracking-widest uppercase">
            JAIRAJ
          </span>
          <span className="text-white font-heading font-600 text-xs sm:text-sm tracking-[0.3em] uppercase mt-[-2px]">
            CONSTRUCTION
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-heading font-600 tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-yellow'
                    : 'text-concrete-200 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={handleStartProject}
            className="bg-brand-yellow text-charcoal-900 font-heading font-700 text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-brand-amber transition-colors duration-200"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-charcoal-900 border-t border-charcoal-700 px-4 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 font-heading font-600 text-sm tracking-[0.12em] uppercase border-b border-charcoal-700 transition-colors ${
                  isActive ? 'text-brand-yellow' : 'text-concrete-200 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={handleStartProject}
            className="mt-4 bg-brand-yellow text-charcoal-900 font-heading font-700 text-sm tracking-[0.15em] uppercase py-4 px-6 hover:bg-brand-amber transition-colors duration-200 min-h-[52px]"
          >
            Start a Project
          </button>
        </div>
      </div>
    </header>
  )
}
