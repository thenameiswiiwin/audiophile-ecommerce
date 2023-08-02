'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const Pitch = () => {
  const pathName = usePathname()

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center gap-[40px] md:gap-[63px] lg:flex-row-reverse lg:gap-[125px]',
        pathName === '/'
          ? 'py-[120px] md:py-[96px] lg:py-[200px]'
          : 'pb-[120px] pt-[60px] md:pb-[120px] lg:pb-[160px] lg:pt-[100px]',
      )}
    >
      <div className="w-full">
        <img
          className="h-[300px] w-full rounded-[8px] object-cover md:hidden"
          src="/shared/mobile/image-best-gear.jpg"
          alt=""
        />
      </div>
      <div className="w-full text-center">
        <h2 className="text-[28px] font-bold uppercase tracking-[1px]">
          Bringing you the <span className="text-orange-primary">best</span>{' '}
          audio gear
        </h2>
        <p className="mx-auto max-w-[573px] pt-[32px] text-[15px] font-medium leading-[25px] opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}

export default Pitch
