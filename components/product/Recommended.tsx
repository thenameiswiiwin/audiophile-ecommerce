import { nanoid } from 'nanoid'

import type { Product } from '@/types'

import Button from '../Button'

const Recommended = ({ productArray }: { productArray: Product }) => {
  return (
    <div className="pb-[120px] lg:pb-[160px]">
      <h2 className="pb-[40px] text-center text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:flex-1 md:pb-[56px] md:text-[32px] md:tracking-[1.14px] lg:flex-none lg:pb-[64px]">
        You may also like
      </h2>
      <div className="flex w-full flex-col gap-[56px] md:flex-row md:gap-[11px] lg:gap-[30px]">
        {productArray.others.map((other) => (
          <div key={nanoid()} className="w-full">
            <div className="flex w-full items-center justify-center rounded-[8px] bg-gray-base">
              <img
                className="max-h-[120px] rounded-[8px] object-cover md:hidden"
                src={other.image.mobile}
                alt={other.name}
              />
              <img
                className="hidden max-h-[318px] rounded-[8px] object-cover md:block lg:hidden"
                src={other.image.tablet}
                alt={other.name}
              />
              <img
                className="hidden max-h-[318px] rounded-[8px] object-cover lg:block"
                src={other.image.desktop}
                alt={other.name}
              />
            </div>
            <article className="flex w-full flex-col items-center">
              <h3 className="py-[32px] text-[24px] font-bold uppercase tracking-[1.71px] md:pt-[40px]">
                {other.name}
              </h3>
              <Button href={`/${other.slug}`} intent="primary" size="base">
                See Product
              </Button>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommended
