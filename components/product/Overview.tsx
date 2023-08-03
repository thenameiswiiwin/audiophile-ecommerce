import type { Product } from '@/types'

import AddToCart from '../AddToCard'

const Overview = ({ productArray }: { productArray: Product }) => {
  return (
    <div className="flex w-full flex-col gap-[40px] md:flex-row md:items-center md:gap-[69px] lg:gap-[124.5px]">
      <div className="w-full">
        <div className="bg-grey flex w-full justify-center rounded-[8px]">
          <img
            className="h-[327px] w-full max-w-[450px] rounded-[8px] object-cover md:hidden"
            src={productArray.image.mobile}
            alt={productArray.shortName}
          />
        </div>
        <div className="bg-grey flex w-full justify-center rounded-[8px]">
          <img
            className="hidden h-[480px] w-full max-w-[381px] rounded-[8px] object-cover md:block lg:hidden"
            src={productArray.image.tablet}
            alt={productArray.shortName}
          />
        </div>
        <img
          className="hidden h-[560px] max-w-[540px] rounded-[8px] object-cover lg:block"
          src={productArray.image.desktop}
          alt={productArray.shortName}
        />
      </div>
      <div className="md:w-max">
        {productArray.new && (
          <h3 className="text-orange pb-[24px] text-[14px] uppercase tracking-[10px] md:pb-[17px] lg:pb-[16px]">
            New Product
          </h3>
        )}
        <h1 className="pb-[24px] text-[28px] font-bold uppercase tracking-[1px] md:pb-[32px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
          {productArray.name}
        </h1>
        <p className="max-w-[327px] text-[15px] leading-[25px] opacity-50 md:w-[339px] md:max-w-none lg:w-[445px]">
          {productArray.description}
        </p>
        <p className="pb-[31px] pt-[24px] text-[18px] font-bold tracking-[1.29px] md:py-[32px] lg:pb-[47px]">
          ${productArray.price.toLocaleString()}
        </p>
        <AddToCart productArray={productArray} />
      </div>
    </div>
  )
}

export default Overview
