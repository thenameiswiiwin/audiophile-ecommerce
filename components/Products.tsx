import { nanoid } from 'nanoid'

import Button from './Button'

interface Product {
  category: string
  new: boolean
  name: string
  shortName: string
  categoryImage: {
    desktop: string
    tablet: string
    mobile: string
  }
  description: string
  slug: string
}

interface ProductsProps {
  categoryArray: Product[]
  pathname: string
}

const Products = ({ categoryArray, pathname }: ProductsProps) => {
  return (
    <div className="mb-40 mt-[64px] flex flex-col gap-[120px] md:mb-[160px] md:mt-[120px] lg:mb-[180px] lg:mt-[160px] lg:gap-[160px]">
      {categoryArray.map((category) => (
        <div
          key={nanoid()}
          className="flex flex-col items-center gap-[32px] md:gap-[52px] lg:flex-row lg:gap-[125px] lg:even:flex-row-reverse"
        >
          <div>
            <img
              className="hidden rounded-[8px] lg:block"
              src={category.categoryImage.desktop}
              alt={category.shortName}
            />
            <img
              className="hidden rounded-[8px] md:block lg:hidden"
              src={category.categoryImage.tablet}
              alt={category.shortName}
            />
            <img
              className="rounded-[8px] md:hidden"
              src={category.categoryImage.mobile}
              alt={category.shortName}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-[24px] lg:max-w-[445px] lg:items-start lg:gap-[32px]">
            {category.new && (
              <h3 className="text-orange text-center text-[14px] uppercase tracking-[10px] lg:mb-[-16px] lg:text-left">
                New Product
              </h3>
            )}
            <h2 className="text-center text-[28px] font-bold uppercase tracking-[1px] md:-translate-y-2 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] lg:translate-y-0 lg:text-left">
              {category.name}
            </h2>
            <p className="max-w-[327px] text-center text-[15px] leading-[25px] opacity-50 md:max-w-[572px] lg:text-left">
              {category.description}
            </p>
            <div className="lg:mt-[8px]">
              <Button
                href={`${pathname}/${category.slug}`}
                intent="primary"
                size="base"
              >
                See Product
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
