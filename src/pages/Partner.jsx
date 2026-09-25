import { motion } from 'framer-motion'
import { Dot } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import EnquiryForm from '../components/EnquiryForm'
import Img from '../components/Img'
import { collaboration, org, partnerTracks, pilot, valueProps } from '../data/site'
import { img } from '../data/images'

export default function Partner() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Partner with us"
        title="Expertise from you. Reach, trust and execution from Sahyog."
        lede="A modular portfolio lets each organization contribute within its area of expertise, while we handle local access and delivery."
        image={img.aboutHero}
      />

      {/* Tracks */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Choose a track"
            lede="Pick one to begin with. Most partnerships start narrow and widen after the first cycle."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-saffron-500/50 hover:shadow-lift">
                  <span className="font-display text-[0.85rem] font-semibold text-slateink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-[1.14rem] font-semibold">{t.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-slateink">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who does what */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="A clear collaboration model"
            lede="Sahyog manages local access and delivery coordination. Partners provide specialist capability and learning resources."
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            {[
              { who: org.name, list: collaboration.sahyog, dot: 'bg-saffron-500' },
              { who: 'Partner organization', list: collaboration.partner, dot: 'bg-leaf-500' },
            ].map((col, ci) => (
              <div key={col.who} className={ci === 1 ? 'md:border-l md:border-ink/10 md:pl-16' : ''}>
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">{col.who}</h3>
                <ul className="mt-7 space-y-5">
                  {col.list.map((item, i) => (
                    <Reveal as="li" key={item} delay={i * 0.06} className="flex items-start gap-4">
                      <span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${col.dot}`} />
                      <span className="text-[1rem] text-ink/85">{item}</span>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-ink px-8 py-7 text-white md:flex-row md:items-center md:gap-8">
              <p className="font-display text-[1rem] font-semibold">Shared standards</p>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-white/75">
                {collaboration.standards.map((s, i) => (
                  <span key={s} className="flex items-center">
                    {i > 0 && <Dot size={18} className="text-saffron-200" />}
                    <span className="text-[0.95rem]">{s}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why route your program through us"
            lede="Partners contribute expertise and resources. We convert them into accessible, locally delivered programs."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <div className="group h-full bg-cream p-8 transition-colors duration-300 hover:bg-white">
                  <span className="block h-[3px] w-8 rounded-full bg-saffron-500 transition-all duration-300 group-hover:w-14" />
                  <h3 className="mt-6 font-display text-[1.12rem] font-semibold">{v.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-slateink">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading title="Start with an 8-week pilot" lede={pilot.intro} />

          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10">
            {pilot.steps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-3 bg-white p-8 md:grid-cols-[80px_200px_1fr] md:items-baseline md:gap-8"
              >
                <span className="font-display text-[1.6rem] font-bold leading-none text-sand">
                  {s.step}
                </span>
                <span>
                  <span className="block font-display text-[1.2rem] font-semibold">{s.title}</span>
                  <span className="mt-1 block text-[0.85rem] text-saffron-500">{s.weeks}</span>
                </span>
                <span className="text-slateink">{s.text}</span>
              </motion.li>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl bg-sand/60 p-9 md:p-11">
              <p className="font-display text-[0.9rem] font-semibold text-saffron-500">
                Pilot output
              </p>
              <p className="mt-4 font-display text-[1.5rem] font-semibold leading-snug">
                {pilot.output}
              </p>
              <ul className="mt-7 flex flex-wrap gap-3">
                {pilot.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-ink/12 bg-white px-4 py-2 text-[0.88rem] font-medium"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Tell us what you want to build"
              lede="Share the cohort, the outcome and what you can contribute. We will come back with a district and a schedule."
            />
            <div className="mt-8 space-y-3 text-[0.95rem] text-slateink">
              <p>
                Call{' '}
                <a className="font-semibold text-ink link-underline" href={org.phoneHref}>
                  {org.phone}
                </a>
              </p>
              <p>
                Email{' '}
                <a className="font-semibold text-ink link-underline" href={`mailto:${org.email}`}>
                  {org.email}
                </a>
              </p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </PageTransition>
  )
}
