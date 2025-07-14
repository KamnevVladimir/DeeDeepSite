import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const inputVariants = cva(
  'flex w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-primary-400',
  {
    variants: {
      variant: {
        default: 'border-neutral-300 dark:border-neutral-700',
        error: 'border-error-500 dark:border-error-400',
        success: 'border-success-500 dark:border-success-400',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  success?: string
  label?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    leftIcon, 
    rightIcon, 
    error, 
    success, 
    label, 
    helperText,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const hasError = !!error
    const hasSuccess = !!success
    const inputVariant = hasError ? 'error' : hasSuccess ? 'success' : variant

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {leftIcon}
            </div>
          )}
          
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: inputVariant, size, className }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10'
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || success || helperText) && (
          <div className="mt-2">
            {error && (
              <p className="text-sm text-error-600 dark:text-error-400">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-success-600 dark:text-success-400">
                {success}
              </p>
            )}
            {helperText && !error && !success && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input, inputVariants } 