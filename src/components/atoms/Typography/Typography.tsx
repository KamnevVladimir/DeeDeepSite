import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const typographyVariants = cva(
  'text-neutral-900 dark:text-neutral-100',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
        h6: 'scroll-m-20 text-base font-semibold tracking-tight',
        p: 'leading-7 [&:not(:first-child)]:mt-6',
        blockquote: 'mt-6 border-l-2 pl-6 italic',
        code: 'relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-neutral-800',
        lead: 'text-xl text-neutral-700 dark:text-neutral-400',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-neutral-500 dark:text-neutral-400',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
      },
      weight: {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
    },
    defaultVariants: {
      variant: 'p',
      size: 'base',
      weight: 'normal',
      align: 'left',
    },
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'blockquote' | 'code'
  children: React.ReactNode
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, size, weight, align, as, children, ...props }, ref) => {
    const Component = as || (variant?.startsWith('h') ? variant : 'p') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'blockquote' | 'code'

    const elementProps = {
      className: cn(typographyVariants({ variant, size, weight, align, className })),
      ...props,
    }

    switch (Component) {
      case 'h1':
        return <h1 {...elementProps}>{children}</h1>
      case 'h2':
        return <h2 {...elementProps}>{children}</h2>
      case 'h3':
        return <h3 {...elementProps}>{children}</h3>
      case 'h4':
        return <h4 {...elementProps}>{children}</h4>
      case 'h5':
        return <h5 {...elementProps}>{children}</h5>
      case 'h6':
        return <h6 {...elementProps}>{children}</h6>
      case 'blockquote':
        return <blockquote {...elementProps}>{children}</blockquote>
      case 'code':
        return <code {...elementProps}>{children}</code>
      case 'span':
        return <span {...elementProps}>{children}</span>
      case 'div':
        return <div {...elementProps}>{children}</div>
      default:
        return <p {...elementProps}>{children}</p>
    }
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants } 