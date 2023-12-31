'use client'

import clsx from 'clsx'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { navLinks } from '@/constants'
import { useAppSelector } from '@/redux/hooks'
import type { RootState } from '@/redux/store'

import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  const [menu, setMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const pathname = usePathname()

  const pathSplit = pathname.split('/')
  const categoryPath = `/${pathSplit[1]}`

  let totalItems = 0

  if (cart) {
    totalItems = cart.reduce((acc, product) => acc + product.quantity, 0)
  }

  return (
    <div className="relative">
      <nav className="bg-black lg:px-0">
        <div className="relative z-50 flex items-center justify-between px-[30px] py-8 md:mx-auto md:max-w-[1174px]">
          <Image
            src="/shared/tablet/icon-hamburger.svg"
            width={16}
            height={16}
            alt="Logo"
            onClick={() => {
              setMenu(!menu)
              setOpenCart(false)
            }}
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
                className={clsx(
                  'font-bold transition-all hover:text-orange-primary',
                  categoryPath === link.path
                    ? 'text-orange-primary'
                    : 'text-white',
                  pathname === link.path ? 'cursor-default' : 'cursor-pointer',
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <Image
              src="/shared/desktop/icon-cart.svg"
              width={20}
              height={23}
              alt="Logo"
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => {
                setMenu(false)
                setOpenCart(!openCart)
              }}
            />
            {totalItems !== 0 && (
              <div className="absolute right-[-10px] top-[-12px] flex aspect-square h-[16px] w-[16px] items-center justify-center rounded-full bg-orange-primary text-white">
                <p className="text-[10px] font-medium">{totalItems}</p>
              </div>
            )}
          </div>
        </div>
        <div className="border-b-[1px] border-[#FFF] opacity-[0.2]"></div>
        {menu && (
          <div
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <HamburgerMenu />
            <div className="fixed inset-0 z-20 bg-black/40"></div>
          </div>
        )}
        <div className="relative mx-auto max-w-[1174px]">
          {openCart && (
            <div className="absolute mt-[24px] w-full px-6 md:right-14 md:w-[377px]">
              <Cart openCart={openCart} setOpenCart={setOpenCart} />
              <div
                onClick={() => {
                  setOpenCart(!openCart)
                }}
                className="fixed inset-0 z-20 bg-black opacity-40"
              ></div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
