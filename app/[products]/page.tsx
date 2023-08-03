'use client'

import { usePathname } from 'next/navigation'

import Categories from '@/components/Categories'
import Pitch from '@/components/Pitch'
import Products from '@/components/products/Products'
import { products } from '@/data'

export default function CategoryPage() {
  const pathname = usePathname()
  const splitPathname = pathname.split('/')
  const name = splitPathname[1]
  const catagory = splitPathname[1]
  const categoryArray = products.filter(
    (product) => product.category === catagory,
  )

  categoryArray.sort((a, b) => {
    if (a.new > b.new) {
      return -1
    }
    if (a.new < b.new) {
      return 1
    }
    return 0
  })

  return (
    <div>
      <div className="flex h-[102px] w-full items-center justify-center bg-black md:h-[246px] lg:h-[240px]">
        <h1 className="text-[28px] font-bold uppercase tracking-[2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
          {name}
        </h1>
      </div>
      <div className="mx-auto max-w-[1174px] px-8">
        <Products categoryArray={categoryArray} pathname={pathname} />
        <Categories />
        <Pitch />
      </div>
    </div>
  )
}
