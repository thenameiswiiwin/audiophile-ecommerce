import { products } from '@/data'

import { Button } from './Button'

const EarbudPromo = () => {
  const earphone = products[0]

  return (
    <div className="mt-[24px] flex h-[424px] flex-col gap-[24px]">
      <div>
        <img
          className="h-[200px] w-full rounded-[8px] object-cover"
          src="/home/mobile/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div className="flex h-[200px] w-full flex-col justify-center gap-[32px] rounded-[8px] bg-gray-base pl-[24px]">
        <h2 className="text-[28px] font-bold uppercase tracking-[2px]">
          {earphone.name.replace('Wireless', '')}
        </h2>
        <div className="w-max">
          <Button href={`/earphones/${earphone.slug}`} intent="outline">
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EarbudPromo
