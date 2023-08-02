'use client'

import clsx from 'clsx'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks, socials } from '@/constants'

const Footer = () => {
  const pathname = usePathname()

  const pathSplit = pathname.split('/')
  const categoryPath = `/${pathSplit[1]}`

  return (
    <footer className="relative z-0 bg-black-near">
      <div className="relative mx-auto max-w-[1174px] px-8 pb-[38px] pt-[52px] md:pb-[46px] md:pt-[60px] lg:pb-[48px] lg:pt-[75px]">
        <article className="flex flex-col items-center md:items-start lg:flex-row lg:justify-between">
          <img src="/shared/desktop/logo.svg" alt="logo" />
          <div className="flex flex-col gap-[16px] py-[48px] text-center md:flex-row md:gap-[34px] md:py-[32px] md:text-left lg:pb-[36px] lg:pt-0">
            {navLinks.map((link) => (
              <Link key={nanoid()} href={link.path}>
                <h2
                  className={clsx(
                    'text-[13px] font-bold uppercase leading-[25px] tracking-[2px] transition-all hover:text-orange-primary',
                    categoryPath === link.path
                      ? 'text-orange-primary'
                      : 'text-white',
                    pathname === link.path
                      ? 'cursor-default'
                      : 'cursor-pointer',
                  )}
                >
                  {link.title}
                </h2>
              </Link>
            ))}
          </div>
        </article>

        <article className="flex items-end justify-between pb-[48px] md:pb-[80px] lg:pb-[56px]">
          <p className="mx-auto max-w-[327px] text-center text-[15px] font-medium leading-[25px] text-white/50 md:mx-0 md:max-w-[689px] md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="hidden gap-[16px] lg:flex">
            {socials.map((some) => (
              <img key={nanoid()} src={some.image} alt={some.image} />
            ))}
          </div>
        </article>

        <article className="flex flex-col justify-between md:flex-row">
          <p className="text-center text-[15px] font-bold leading-[25px] text-white/50 md:text-left">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center gap-[16px] pt-[48px] md:justify-start md:pt-0 lg:hidden">
            {socials.map((some) => (
              <img key={nanoid()} src={some.image} alt={some.image} />
            ))}
          </div>
        </article>

        <div className="absolute left-[50%] top-0 h-[4px] w-[101px] translate-x-[-50%] bg-orange-primary md:left-8 md:translate-x-0" />
      </div>
    </footer>
  )
}

export default Footer
