import { useState } from 'react'
import { motion } from 'framer-motion'

import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { accentOf } from '../components/accents'
import Img from '../components/Img'
import { regions, valueProps } from '../data/site'
import { img } from '../data/images'

/** Optional map image: drop mp-map.png into /public to show it here. */
function MapPanel() {
  const [hasMap, setHasMap] = useState(true)
  return (
    <Reveal delay={0.1}>
      <div className="space-y-5">
        {hasMap && (
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white p-4">
            <img
              src="/mp-map.png"
              alt="Map of Madhya Pradesh showing districts where Sahyog Yuva Samiti is active"
              className="w-full rounded-2xl"
              onError={() => setHasMap(false)}
            />
          </div>
        )}
        <Img
          src={img.presence.src}
          alt={img.presence.alt}
          ratio="16/10"
          zoom={false}
          className="rounded-3xl"
        >
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-7">
            <span className="block font-display text-[1.05rem] font-semibold text-white">
              Outreach visits reach blocks that rarely see a programme.
            </span>
          </span>
        </Img>
      </div>
    </Reveal>
  )
}

export default function Presence() {
  const total = regions.reduce((n, r) => n + r.districts.length, 0)

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our presence"
        title="Active across Madhya Pradesh, district by district"
        lede="Examples of active districts, supported by wider volunteer and teacher connectivity across the state."
        image={img.presence}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { n: total, l: 'Districts listed here' },
              { n: regions.length, l: 'Regional clusters' },
              { n: '1', l: 'Coordinator per location' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.07}>
                <div className="rounded-2xl border border-ink/10 bg-white p-7">
                  <p className="font-display text-[2.6rem] font-bold leading-none text-ink">{s.n}</p>
                  <p className="mt-3 text-[0.95rem] text-slateink">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="space-y-8">
              {regions.map((r, ri) => {
                const a = accentOf(r.accent)
                return (
                  <Reveal key={r.name} delay={ri * 0.08}>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${a.bar}`} />
                        <h2 className="font-display text-[1.25rem] font-semibold">{r.name}</h2>
                        <span className="text-[0.85rem] text-slateink">
                          {r.districts.length} districts
                        </span>
                      </div>
                      <ul className="mt-4 flex flex-wrap gap-2.5">
                        {r.districts.map((d, di) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: di * 0.04 }}
                            className={`rounded-full border px-4 py-1.5 text-[0.9rem] font-medium ${a.chip}`}
                          >
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <MapPanel />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-2xl bg-sand/70 p-9 md:p-11">
              <p className="font-display text-[1.3rem] font-semibold leading-snug text-ink">
                Statewide presence enables district-to-district mobilisation and physical delivery.
              </p>
              <p className="mt-4 max-w-[60ch] text-slateink">
                If your program needs a district that is not listed, we can usually reach it through
                the volunteer and teacher network already connected to a neighbouring cluster.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What that network does on the ground"
            lede="Reach is only useful if someone is there to open the door, fill the room and follow up."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-ink/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="font-display text-[1.1rem] font-semibold">{v.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-slateink">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Choose a district and we will open the door"
        text="Tell us the region you want to reach. We will confirm institutions, coordinators and a workable schedule."
      />
    </PageTransition>
  )
}
