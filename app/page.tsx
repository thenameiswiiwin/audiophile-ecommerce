import Categories from '@/components/Categories'
import EarbudPromo from '@/components/EarbudPromo'
import Hero from '@/components/Hero'
import Pitch from '@/components/Pitch'
import SpeakerBanner from '@/components/SpeakerBanner'
import SpeakerPromo from '@/components/SpeakerPromo'

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
