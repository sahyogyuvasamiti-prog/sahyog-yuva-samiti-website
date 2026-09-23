import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import PhotoGrid from '../components/PhotoGrid'
import CTASection from '../components/CTASection'
import { img } from '../data/images'

export default function Gallery() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Gallery"
        title="Our work, as it happens"
        lede="Counselling sessions, matches, padyatras, pledge drives and workshops from districts across Madhya Pradesh. Filter by the kind of work, or tap any photo to view it full size."
        image={img.impact}
      />

      <section className="section">
        <div className="container">
          <PhotoGrid />
          <p className="mt-14 max-w-2xl text-[0.93rem] text-slateink">
            Photographs are shared with the consent of participants and their institutions. If you
            would like a photo removed, write to us and we will take it down.
          </p>
        </div>
      </section>

      <CTASection
        title="Want your program in these photos?"
        text="Schools, companies and foundations can run a session with us in any active district."
      />
    </PageTransition>
  )
}
