import { products } from '@/data'

import Button from '../Button'

const Hero = () => {
  const headphone = products[3]

  return (
    <div className="relative h-full w-full">
      <img
        src={'/home/mobile/image-hero.jpg'}
        alt="HeroImage"
        className="max-h-[600px] w-full object-cover md:hidden lg:hidden"
      />
      <img
        src={'/home/tablet/image-hero.jpg'}
        alt="HeroImage"
        className="hidden max-h-[729px] w-full object-cover object-center md:block lg:hidden"
      />
      <img
        src={'/home/desktop/image-hero.jpg'}
        alt="HeroImage"
        className="hidden max-h-[729px] w-full object-cover object-center lg:block"
      />
      <div className="absolute inset-0 mx-auto flex max-w-[1174px] items-center object-center px-[39px] lg:px-8 lg:pt-[89px]">
        <article className="w-full text-center lg:text-left">
          <h2 className="pb-[16px] text-[14px] uppercase tracking-[10px] text-white/50 md:pb-[24px]">
            New product
          </h2>
          <h1 className="mx-auto max-w-[328px] pb-[24px] text-[36px] font-bold uppercase text-white md:max-w-[396px] md:text-[56px] lg:mx-0 lg:max-w-[396px] lg:text-[56px]">
            {headphone.name}
          </h1>
          <p className="mx-auto max-w-[349px] pb-[24px] text-[15px] font-medium leading-[25px] text-white/75 md:pb-[40px] lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="mx-auto block w-max lg:mx-0">
            <Button
              href={`/headphones/${headphone.slug}`}
              intent="primary"
              size="base"
            >
              See Product
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
