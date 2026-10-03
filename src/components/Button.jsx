/**
 * Reusable Button component.
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline-light' | 'outline-dark'} props.variant
 * @param {'sm' | 'md' | 'lg'} props.size
 * @param {string} props.className - Additional classes
 * @param {React.ReactNode} props.children
 * @param {function} props.onClick
 * @param {string} props.type - button | submit | reset
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center font-heading font-700 uppercase tracking-[0.15em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'text-xs px-5 py-2.5 min-h-[40px]',
    md: 'text-xs px-7 py-3.5 min-h-[48px]',
    lg: 'text-sm px-9 py-4 min-h-[56px]',
  }

  const variants = {
    primary:
      'bg-brand-yellow text-charcoal-900 hover:bg-brand-amber active:bg-brand-amber',
    secondary:
      'bg-charcoal-800 text-white border border-charcoal-600 hover:bg-charcoal-700 hover:border-charcoal-500',
    'outline-light':
      'bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10',
    'outline-dark':
      'bg-transparent text-charcoal-900 border border-charcoal-700 hover:bg-charcoal-900 hover:text-white',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
