import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import SpeakerPromo from '@/components/SpeakerPromo'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-[1174px] px-6">
        <Categories />
        <SpeakerPromo />
        <div>SpeakerBanner</div>
        <div>EarbudPromo</div>
        <div>Pitch</div>
      </div>
    </main>
  )
}
