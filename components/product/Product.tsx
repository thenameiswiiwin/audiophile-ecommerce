'use client'

import { usePathname } from 'next/navigation'

import { products } from '@/data'

import GoBack from '../GoBack'
import Features from './Features'
import Overview from './Overview'
import ProductPictures from './ProductPictures'
import Recommended from './Recommended'

const Product = () => {
  const pathname = usePathname()

  const splitPathname = pathname.split('/')
  const productPath = splitPathname[2]
  const productArray = products.find((product) => product.slug === productPath)

  if (!productArray) {
    return <div>Product not found</div>
  }
  return (
    <div>
      <GoBack />
      <Overview productArray={productArray} />
      <Features productArray={productArray} />
      <ProductPictures productArray={productArray} />
      <Recommended productArray={productArray} />
    </div>
  )
}

export default Product
