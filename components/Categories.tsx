'use client'

import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'

import { categories } from '@/constants'

const Categories = () => {
  return (
    <div className="z-1 mt-20">
      {categories.map((category) => (
        <div
          key={nanoid()}
          className="relative mb-[60px] rounded-lg bg-gray-base p-10 pt-20"
        >
          <Link href={`/${category.title}`} key={nanoid()}>
            <Image
              src={category.image}
              width={160}
              height={122}
              alt="Logo"
              className="absolute inset-x-[50%] top-[50%] translate-x-[-50%] translate-y-[-100%] justify-center"
            />
            <p className="mt-5 text-center text-[15px] font-bold uppercase">
              {category.title}
            </p>
            <div className="mt-[20px] flex items-center justify-center">
              <p className="mr-[10px] text-[13px] font-bold transition-all hover:text-orange-primary">
                SHOP
              </p>
              <Image
                src="/shared/desktop/icon-arrow-right.svg"
                width={20}
                height={20}
                alt="Logo"
                onClick={() => console.log('clicked')}
                className="z-1 h-[15px] w-[10px] items-center"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
