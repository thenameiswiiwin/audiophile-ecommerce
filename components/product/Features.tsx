import { nanoid } from 'nanoid'

import type { Product } from '@/types'

const Features = ({ productArray }: { productArray: Product }) => {
  return (
    <div className="flex w-full flex-col gap-[88px] py-[88px] md:gap-[120px] md:pb-[153px] md:pt-[120px] lg:flex-row lg:gap-[125px] lg:py-[160px]">
      <div>
        <h2 className="pb-[24px] text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:pb-[32px] md:text-[32px] md:tracking-[1.14px]">
          Features
        </h2>
        <p className="max-w-[689px] text-[15px] font-medium leading-[25px] opacity-50 lg:max-w-[635px]">
          {productArray.features}
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col">
        <h2 className="pb-[24px] text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:flex-1 md:pb-[32px] md:text-[32px] md:tracking-[1.14px] lg:flex-none">
          In the box
        </h2>
        <ul className="flex flex-col gap-[8px] md:flex-1 lg:flex-none">
          {productArray.includedItems.map((item) => (
            <li key={nanoid()} className="flex gap-[21px] md:gap-[24px]">
              <p className="text-orange w-[18px] text-[15px] font-bold leading-[25px]">
                {item.quantity}x
              </p>
              <p className="text-[15px] font-medium leading-[25px] opacity-50">
                {item.item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Features
