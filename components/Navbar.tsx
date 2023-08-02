'use client'

import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'

import { navLinks } from '@/constants'

const Navbar = () => {
  return (
    <nav className="bg-black lg:px-0">
      <div className="flex items-center justify-between px-[30px] py-8 md:mx-auto md:max-w-[1174px]">
        <Image
          src="/shared/tablet/icon-hamburger.svg"
          width={16}
          height={16}
          alt="Logo"
          onClick={() => console.log('clicked')}
          className="cursor-pointer lg:hidden"
        />
        <div className="md:w-full md:pl-[42px] lg:w-max lg:pl-0">
          <Link href={'/'} className="block w-max">
            <Image
              src="/shared/desktop/logo.svg"
              width={143}
              height={200}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden gap-x-8 uppercase text-white lg:flex">
          {navLinks.map((link) => (
            <Link
              key={nanoid()}
              href={link.path}
              className="font-bold transition-all hover:text-orange-primary"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <Image
            src="/shared/desktop/icon-cart.svg"
            width={20}
            height={23}
            alt="Logo"
            className="cursor-pointer transition-transform hover:scale-125"
            onClick={() => console.log('clicked')}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
