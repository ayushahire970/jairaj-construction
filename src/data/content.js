/**
 * JAIRAJ CONSTRUCTION — Site Content Data
 *
 * Central data file for company information, services, stats, and process steps.
 * Update these values as the company's information becomes available.
 */

export const company = {
  name: 'Jairaj Construction',
  tagline: 'Building strong. Building for generations.',
  owners: [
    'Uddhav Ahire',
    'Harshvardhan Chavan',
  ],
  phone: '+91 83294 40652',
  phoneTel: 'tel:+918329440652',
  whatsapp: '+91 83294 40652',
  whatsappUrl: 'https://wa.me/918329440652',
  address: 'Gangapur Road, Nashik, Maharashtra 422013',
  location: 'Gangapur Road, Nashik, Maharashtra 422013',
  cityState: 'Nashik, Maharashtra',
  serviceAreas: ['Nashik', 'Dindori', 'Sinnar'],
  yearsExperience: '15+',
  projectsCompleted: '25+',
  coreServices: '3',
  copyrightYear: '2026',
}

export const services = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Construction',
    shortTitle: 'Residential',
    description:
      'Thoughtfully executed residential construction focused on quality, functionality and long-term durability.',
    fullDescription:
      'We handle residential construction projects with a focus on precision, sound materials and attention to structural detail. Every home we build is approached with the same level of discipline — whether it is a modest independent house or a larger residence.',
    focusAreas: [
      'Structural integrity and foundation quality',
      'Material selection and procurement',
      'Timely project execution',
      'Quality finishing and detailing',
      'Post-construction support',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    imageAlt: 'Residential construction project — design placeholder',
    icon: 'Home',
  },
  {
    id: 'apartments',
    number: '02',
    title: 'Apartment Construction',
    shortTitle: 'Apartments',
    description:
      'Construction solutions for apartment developments with an emphasis on disciplined execution and dependable workmanship.',
    fullDescription:
      'Multi-storey apartment construction demands coordination, structural planning and consistent quality across all floors. We bring a disciplined approach to apartment builds — managing complexity without compromising on the workmanship that residents will rely on for decades.',
    focusAreas: [
      'Structural planning for multi-floor builds',
      'RCC framework and load-bearing design',
      'Coordinated trades and timelines',
      'Uniform quality across all units',
      'Common area and external finishing',
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    imageAlt: 'Apartment construction project — design placeholder',
    icon: 'Building2',
  },
  {
    id: 'industrial',
    number: '03',
    title: 'Industrial Buildings',
    shortTitle: 'Industrial',
    description:
      'Robust construction solutions for industrial spaces designed around structural requirements, functionality and durability.',
    fullDescription:
      'Industrial construction requires a different kind of rigour — large spans, heavy loads and operational requirements that go beyond standard residential or commercial builds. We approach industrial projects with an understanding of these demands, building structures that are built to serve their purpose reliably.',
    focusAreas: [
      'Large-span structural systems',
      'Heavy-duty foundation and flooring',
      'Industrial-grade material selection',
      'Compliance with building regulations',
      'Functional layout and access planning',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    imageAlt: 'Industrial building construction — design placeholder',
    icon: 'Factory',
  },
]

export const whyJairaj = [
  {
    stat: '15+ YEARS',
    title: 'Experience',
    description: 'Experience built through years of construction work across different project types.',
  },
  {
    stat: '25+ PROJECTS',
    title: 'Projects',
    description: 'A growing portfolio across different construction requirements in the region.',
  },
  {
    stat: 'LOCAL',
    title: 'Knowledge',
    description: 'Serving Nashik, Dindori and Sinnar — we understand the local landscape.',
  },
  {
    stat: 'BUILT',
    title: 'To Last',
    description: 'A construction approach focused on quality, durability and long-term value.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a conversation to understand your project requirements, vision and expectations.',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Site & Requirements',
    description: 'Site assessment and a detailed review of your functional, structural and regulatory requirements.',
    icon: 'MapPin',
  },
  {
    number: '03',
    title: 'Planning & Estimation',
    description: 'Preparation of plans, material estimates and a clear project timeline.',
    icon: 'ClipboardList',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Disciplined execution with quality control at every stage of the build.',
    icon: 'HardHat',
  },
  {
    number: '05',
    title: 'Handover',
    description: 'Final inspection, completion of finishing work and formal handover of the completed structure.',
    icon: 'CheckCircle2',
  },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]
