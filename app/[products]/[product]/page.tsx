'use client'

import { usePathname } from 'next/navigation'

import Categories from '@/components/Categories'
import Pitch from '@/components/Pitch'
import Product from '@/components/product/Product'
import { products } from '@/data'

export default function ProductPage() {
  const pathname = usePathname()

  const splitPathname = pathname.split('/')
  const productPath = splitPathname[2]
  const productArray = products.find((product) => product.slug === productPath)

  return (
    <div className="mx-auto max-w-[1174px] px-8">
      <Product productArray={productArray} />
      <Categories />
      <Pitch />
    </div>
  )
}
