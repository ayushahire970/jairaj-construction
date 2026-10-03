import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeMetadata = {
  '/': {
    title: 'Jairaj Construction | Construction Company in Nashik',
    description:
      'Jairaj Construction is a Nashik-based construction company with 15+ years of experience in residential houses, apartments and industrial buildings across Nashik, Dindori and Sinnar.',
  },
  '/about': {
    title: 'About Jairaj Construction | Construction Company in Nashik',
    description:
      'Learn about Jairaj Construction, a Nashik-based construction company with 15+ years of experience and 25+ completed projects.',
  },
  '/services': {
    title: 'Construction Services in Nashik | Jairaj Construction',
    description:
      'Explore residential, apartment and industrial construction services from Jairaj Construction across Nashik, Dindori and Sinnar.',
  },
  '/projects': {
    title: 'Construction Projects | Jairaj Construction Nashik',
    description:
      'Explore the construction work and project portfolio of Jairaj Construction in Nashik and surrounding service areas.',
  },
  '/contact': {
    title: 'Contact Jairaj Construction | Construction Company in Nashik',
    description:
      'Contact Jairaj Construction in Nashik for residential, apartment or industrial construction enquiries. Call or send your project enquiry through WhatsApp.',
  },
}

function updateMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function RouteSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeMetadata[pathname] || {
      title: 'Page Not Found | Jairaj Construction',
      description:
        'The requested page could not be found. Return to the Jairaj Construction homepage.',
    }

    // HTML Page Title
    document.title = meta.title

    // Primary Meta Description & Title
    updateMeta('name', 'description', meta.description)
    updateMeta('name', 'title', meta.title)

    // Open Graph Metadata
    updateMeta('property', 'og:site_name', 'Jairaj Construction')
    updateMeta('property', 'og:type', 'website')
    updateMeta('property', 'og:title', meta.title)
    updateMeta('property', 'og:description', meta.description)

    // Twitter Card Metadata
    updateMeta('property', 'twitter:card', 'summary')
    updateMeta('property', 'twitter:title', meta.title)
    updateMeta('property', 'twitter:description', meta.description)
  }, [pathname])

  return null
}
