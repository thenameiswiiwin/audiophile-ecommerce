import { products } from '@/data'

import Button from '../Button'

const SpeakerBanner = () => {
  const speaker = products[4]

  return (
    <div className="flex h-[327px] w-full flex-col justify-center gap-[32px] rounded-[9px] bg-speaker-banner-mobile bg-cover bg-right-top bg-no-repeat pl-[24px] md:h-[320px] md:bg-speaker-banner-tablet md:pl-[62px] lg:bg-speaker-banner-desktop lg:pl-[95px]">
      <h2 className="text-[28px] font-bold uppercase tracking-[2px]">
        {speaker.name}
      </h2>
      <div className="w-max">
        <Button href={`/speakers/${speaker.slug}`} intent="outline" size="base">
          See product
        </Button>
      </div>
    </div>
  )
}

export default SpeakerBanner
