import { products } from '@/data'

import { Button } from './Button'

const SpeakerBanner = () => {
  const speaker = products[4]

  return (
    <div className="flex h-[327px] w-full flex-col justify-center gap-[32px] rounded-[9px] bg-speaker-banner-mobile bg-cover bg-right-top bg-no-repeat pl-[24px]">
      <h2 className="text-[28px] font-bold uppercase tracking-[2px]">
        {speaker.name}
      </h2>
      <div className="w-max">
        <Button href={`/speakers/${speaker.slug}`} intent="outline">
          See product
        </Button>
      </div>
    </div>
  )
}

export default SpeakerBanner
