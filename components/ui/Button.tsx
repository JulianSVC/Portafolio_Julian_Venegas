// components/ui/Button.tsx
import { forwardRef } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      default: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105',
      outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 hover:scale-105',
      ghost: 'hover:bg-white/5 hover:scale-105',
    }
    
    const sizes = {
      default: 'px-6 py-2.5 text-sm',
      sm: 'px-4 py-2 text-xs',
      lg: 'px-8 py-3 text-base',
    }
    
    const classNameFinal = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`
    
    return (
      <button
        className={classNameFinal}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }