import Categories from '@/components/Categories'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-[1174px] px-6">
        <Categories />
        <div>SpeakerPromo</div>
        <div>SpeakerBanner</div>
        <div>EarbudPromo</div>
        <div>Pitch</div>
      </div>
    </main>
  )
}
