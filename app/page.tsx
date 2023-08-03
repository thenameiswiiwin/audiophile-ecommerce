import Categories from '@/components/Categories'
import EarbudPromo from '@/components/home/EarbudPromo'
import Hero from '@/components/home/Hero'
import SpeakerBanner from '@/components/home/SpeakerBanner'
import SpeakerPromo from '@/components/home/SpeakerPromo'
import Pitch from '@/components/Pitch'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-[1174px] px-6">
        <Categories />
        <SpeakerPromo />
        <SpeakerBanner />
        <EarbudPromo />
        <Pitch />
      </div>
    </main>
  )
}
