import { products } from '@/data'

import Button from '../Button'

const SpeakerPromo = () => {
  const speaker = products[5]

  return (
    <div className="bg-top-center mb-[24px] flex flex-col items-center overflow-y-hidden rounded-[8px] bg-orange-primary bg-circle-pattern bg-cover bg-no-repeat md:mb-[32px] lg:mb-[48px] lg:flex-row lg:justify-center lg:gap-[128px] lg:pt-[56px]">
      <div className="pb-[32px] pt-[55px] md:pb-[64px] md:pt-[52px] lg:translate-y-4 lg:p-0">
        <img
          className="mx-auto max-w-[172px] md:hidden"
          src="/home/mobile/image-speaker-zx9.png"
          alt=""
        />
        <img
          className="mx-auto hidden max-w-[197px] md:flex lg:hidden"
          src="/home/tablet/image-speaker-zx9.png"
          alt=""
        />
        <img
          className="hidden max-w-[410px] lg:block"
          src="/home/desktop/image-speaker-zx9.png"
          alt=""
        />
      </div>
      <div>
        <h2 className="mx-auto max-w-[200px] text-center text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] text-white md:max-w-[261px] md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:mx-0 lg:text-left">
          {speaker.name}
        </h2>
        <p className="mx-auto max-w-[280px] py-[24px] text-center text-[15px] font-medium leading-[25px] text-white md:pb-[40px] lg:mx-0 lg:text-left">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="mx-auto mb-[55px] block w-max md:mb-[64px] lg:mx-0 lg:mb-[124px]">
          <Button
            href={`speakers/${speaker.slug}`}
            intent="secondary"
            size="base"
          >
            See product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SpeakerPromo
