import { products } from '@/data'

import Button from '../Button'

const EarbudPromo = () => {
  const earphone = products[0]

  return (
    <div className="mt-[24px] flex h-[424px] flex-col gap-[24px] md:mt-[32px] md:h-[320px] md:flex-row md:gap-[11px] lg:mt-[48px] lg:gap-[30px]">
      <div>
        <img
          className="h-[200px] w-full rounded-[8px] object-cover md:hidden"
          src="/home/mobile/image-earphones-yx1.jpg"
          alt="earphones"
        />
        <img
          className="hidden h-full max-w-[339px] rounded-[8px] object-cover md:block lg:hidden"
          src="/home/tablet/image-earphones-yx1.jpg"
          alt="earphones"
        />
        <img
          className="hidden h-full max-w-[540px] rounded-[8px] lg:block"
          src="/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div className="flex h-[200px] w-full flex-col justify-center gap-[32px] rounded-[8px] bg-gray-base pl-[24px] md:h-[320px] md:pl-[41px] lg:pl-[95px]">
        <h2 className="text-[28px] font-bold uppercase tracking-[2px]">
          {earphone.name.replace('Wireless', '')}
        </h2>
        <div className="w-max">
          <Button
            href={`/earphones/${earphone.slug}`}
            intent="outline"
            size="base"
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EarbudPromo
