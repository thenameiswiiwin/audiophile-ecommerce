import type { Product } from '@/types'

const ProductPictures = ({ productArray }: { productArray: Product }) => {
  return (
    <div className="flex w-full flex-col gap-[20px] pb-[120px] md:flex-row md:gap-[18px] lg:gap-[30px] lg:pb-[160px]">
      <div className="flex flex-col gap-[20px] lg:gap-[32px]">
        <div className="w-full">
          <img
            className="h-[174px] w-full rounded-[8px] object-cover md:hidden"
            src={productArray.gallery.first.mobile}
            alt={`first-${productArray.name}`}
          />
          <img
            className="hidden h-[174px] w-full min-w-[277px] rounded-[8px] object-cover md:block lg:hidden"
            src={productArray.gallery.first.tablet}
            alt={`first-${productArray.name}`}
          />
          <img
            className="hidden h-[280px] w-full min-w-[445px] rounded-[8px] object-cover lg:block"
            src={productArray.gallery.first.desktop}
            alt={`first-${productArray.name}`}
          />
        </div>
        <div className="w-full">
          <img
            className="h-[174px] w-full rounded-[8px] object-cover md:hidden"
            src={productArray.gallery.second.mobile}
            alt={`second-${productArray.name}`}
          />
          <img
            className="hidden h-[174px] w-full min-w-[277px] rounded-[8px] object-cover md:block lg:hidden"
            src={productArray.gallery.second.tablet}
            alt={`second-${productArray.name}`}
          />
          <img
            className="hidden h-[280px] w-full min-w-[445px] rounded-[8px] object-cover lg:block"
            src={productArray.gallery.second.desktop}
            alt={`second-${productArray.name}`}
          />
        </div>
      </div>
      <div className="w-full">
        <img
          className="h-[368px] w-full rounded-[8px] object-cover md:hidden"
          src={productArray.gallery.third.mobile}
          alt={`third-${productArray.name}`}
        />
        <img
          className="hidden h-[368px] w-full min-w-[395px] rounded-[8px] object-cover md:block lg:hidden"
          src={productArray.gallery.third.tablet}
          alt={`third-${productArray.name}`}
        />
        <img
          className="hidden h-[592px] w-full min-w-[635px] rounded-[8px] object-cover lg:block"
          src={productArray.gallery.third.desktop}
          alt={`third-${productArray.name}`}
        />
      </div>
    </div>
  )
}

export default ProductPictures
