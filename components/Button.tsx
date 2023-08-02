import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)

const buttonClasses = cva(
  'flex h-[48px] w-[160px] items-center justify-center text-center text-[13px] font-bold uppercase tracking-[1px] transition-all',
  {
    variants: {
      intent: {
        primary: 'bg-orange-primary text-white hover:bg-orange-pale',
        secondary: 'bg-black text-white hover:bg-gray-dark',
        outline:
          'border-[1px] border-black text-black hover:bg-black hover:text-white',
      },
    },
  },
)

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <span className={clsx('highlight', className)}>{children}</span>

export const Button = ({ children, intent, ...props }: ButtonProps) => {
  const classes = buttonClasses({ intent, className: props.className })

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
