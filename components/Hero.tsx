import { products } from '@/data'

import { Button } from './Button'

const Hero = () => {
  const headphone = products[3]

  return (
    <div className="relative h-full w-full">
      <img
        src={'/home/mobile/image-hero.jpg'}
        alt="HeroImage"
        className="max-h-[600px] w-full object-cover md:hidden lg:hidden"
      />
      <div className="absolute inset-0 mx-auto flex max-w-[1174px] items-center object-center px-[39px]">
        <article className="w-full text-center">
          <h2 className="pb-[16px] text-[14px] uppercase tracking-[10px] text-white/50">
            New product
          </h2>
          <h1 className="mx-auto max-w-[328px] pb-[24px] text-[36px] font-bold uppercase text-white">
            {headphone.name}
          </h1>
          <p className="mx-auto max-w-[349px] pb-[24px] text-[15px] font-medium leading-[25px] text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="mx-auto block w-max">
            <Button intent="primary" href={`/headphones/${headphone.slug}`}>
              See Product
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
