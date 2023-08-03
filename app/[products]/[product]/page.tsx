import Categories from '@/components/Categories'
import Pitch from '@/components/Pitch'
import Product from '@/components/product/Product'

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-[1174px] px-8">
      <Product />
      <Categories />
      <Pitch />
    </div>
  )
}
