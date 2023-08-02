import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
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
        <div>EarbudPromo</div>
        <div>Pitch</div>
      </div>
    </main>
  )
}
