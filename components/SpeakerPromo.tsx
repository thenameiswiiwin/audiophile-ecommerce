import { products } from '@/data'

import { Button } from './Button'

const SpeakerPromo = () => {
  const speaker = products[5]

  return (
    <div className="bg-top-center mb-[24px] flex flex-col items-center overflow-y-hidden rounded-[8px] bg-orange-primary bg-circle-pattern bg-cover bg-no-repeat">
      <div className="pb-[32px] pt-[55px]">
        <img
          className="mx-auto max-w-[172px] md:hidden"
          src="/home/mobile/image-speaker-zx9.png"
          alt=""
        />
      </div>
      <div>
        <h2 className="mx-auto max-w-[200px] text-center text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] text-white">
          {speaker.name}
        </h2>
        <p className="mx-auto max-w-[280px] py-[24px] text-center text-[15px] font-medium leading-[25px] text-white">
          intent to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="mx-auto mb-[55px] block w-max">
          <Button href={`speakers/${speaker.slug}`} intent="secondary">
            See product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SpeakerPromo
