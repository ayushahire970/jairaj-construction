import { Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { company, navLinks, services } from '../data/content'

export default function Footer() {
  const currentYear = company.copyrightYear

  return (
    <footer className="bg-charcoal-950 text-concrete-300 border-t border-charcoal-700">
      {/* Main footer grid */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-none mb-5">
              <span className="text-brand-yellow font-heading font-900 text-2xl tracking-widest uppercase">
                JAIRAJ
              </span>
              <span className="text-white font-heading font-600 text-sm tracking-[0.3em] uppercase mt-[-2px]">
                CONSTRUCTION
              </span>
            </div>
            <p className="text-sm text-concrete-400 leading-relaxed max-w-xs">
              {company.tagline}
            </p>
            <p className="mt-4 text-xs text-concrete-500 tracking-wide uppercase">
              Nashik &bull; Dindori &bull; Sinnar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-700 text-white text-xs tracking-[0.2em] uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-concrete-400 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-700 text-white text-xs tracking-[0.2em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-concrete-400 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-700 text-white text-xs tracking-[0.2em] uppercase mt-8 mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {company.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-concrete-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-700 text-white text-xs tracking-[0.2em] uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-yellow mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-concrete-500 uppercase tracking-wide mb-0.5">Phone</p>
                  <a
                    href={company.phoneTel}
                    className="text-sm text-concrete-400 hover:text-brand-yellow transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-brand-yellow mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-concrete-500 uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-concrete-400 hover:text-brand-yellow transition-colors"
                  >
                    {company.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-yellow mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-concrete-500 uppercase tracking-wide mb-0.5">Location</p>
                  <span className="text-sm text-concrete-400">{company.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-concrete-600">
            &copy; {currentYear} Jairaj Construction. All rights reserved.
          </p>
          <p className="text-xs text-concrete-700">
            Nashik, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  )
}
