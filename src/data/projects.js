/**
 * JAIRAJ CONSTRUCTION — Projects Data
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * INSTRUCTIONS FOR ADDING REAL PROJECTS:
 * ─────────────────────────────────────────────────────────────────────────────
 * When verified project details and photographs are ready to be published:
 *
 * 1. Place project photography in `src/assets/projects/` or provide public URLs.
 * 2. Update each project entry below with real data:
 *    - id: Unique integer ID (e.g. 1, 2, 3...)
 *    - code: Project identifier (e.g. "PROJECT 01", "PROJECT 02")
 *    - title: Real project name (e.g. "Residential Villa Build", "MIDC Industrial Facility")
 *    - category: Must be one of: "residential" | "apartments" | "industrial"
 *    - categoryLabel: Display label: "Residential" | "Apartments" | "Industrial"
 *    - location: Region or city (e.g. "Nashik", "Dindori", "Sinnar")
 *    - status: Current status (e.g. "Completed", "Ongoing", "Under Construction")
 *    - description: Brief description of structural execution & scope
 *    - image: Project photograph URL or imported asset
 *    - isPlaceholder: Set to `false` when real project information is entered!
 *
 * 3. Save this file. The project cards and category filters will automatically
 *    display the updated information.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projects = [
  {
    id: 1,
    code: 'PROJECT 01',
    title: 'Project Details Coming Soon',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    isPlaceholder: true,
  },
  {
    id: 2,
    code: 'PROJECT 02',
    title: 'Project Details Coming Soon',
    category: 'apartments',
    categoryLabel: 'Apartments',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    isPlaceholder: true,
  },
  {
    id: 3,
    code: 'PROJECT 03',
    title: 'Project Details Coming Soon',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    isPlaceholder: true,
  },
  {
    id: 4,
    code: 'PROJECT 04',
    title: 'Project Details Coming Soon',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1200&q=80',
    isPlaceholder: true,
  },
  {
    id: 5,
    code: 'PROJECT 05',
    title: 'Project Details Coming Soon',
    category: 'apartments',
    categoryLabel: 'Apartments',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    isPlaceholder: true,
  },
  {
    id: 6,
    code: 'PROJECT 06',
    title: 'Project Details Coming Soon',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Location to be added',
    status: 'Project details coming soon',
    description: 'Real project information will be added here as documentation and photographs are compiled.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80',
    isPlaceholder: true,
  },
]

export const projectFilterCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'apartments', label: 'APARTMENTS' },
  { id: 'industrial', label: 'INDUSTRIAL' },
]

export const projectCategories = ['All', 'Residential', 'Apartments', 'Industrial']
