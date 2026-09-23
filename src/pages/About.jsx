import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Img from '../components/Img'
import { about, collaboration, org, programs } from '../data/site'
import { img, programImages } from '../data/images'

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About us"
        title="A youth-focused, grassroots organization working across Madhya Pradesh"
        lede="Sahyog Yuva Samiti expands participation, awareness and opportunity for young people — through the people who already know them."
        image={img.aboutMain}
      />

      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading title="How we work" />
            <p className="mt-7 font-display text-[1.22rem] font-semibold leading-snug text-ink">
              {about.intro}
            </p>
            <p className="mt-5 text-slateink">{about.body}</p>
            <p className="mt-5 text-slateink">
              Most young people in rural and underserved areas are not short on ambition. They are
              short on access — to information, to mentors, to a place to play, and to someone who
              follows up a week later. That gap is the work.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { k: 'Registration', v: `No. ${org.registration}` },
                { k: 'Operating state', v: org.state },
                { k: 'Motto', v: org.tagline },
              ].map((item) => (
                <div key={item.k} className="border-t-2 border-ink/10 pt-4">
                  <p className="text-[0.82rem] text-slateink">{item.k}</p>
                  <p className="mt-1 font-display text-[1.05rem] font-semibold">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl bg-ink text-white">
              <Img src={img.vision.src} alt={img.vision.alt} ratio="16/10" zoom={false} />
              <div className="p-9 md:p-11">
              <p className="font-display text-[0.9rem] font-semibold text-saffron-200">Our vision</p>
              <p className="mt-6 font-display text-[1.6rem] font-semibold leading-tight">
                {about.vision.statement}
              </p>
              <div className="my-8 h-px bg-white/15" />
              <p className="text-[0.98rem] leading-relaxed text-white/70">{about.vision.detail}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Our approach"
            lede="Three habits that make a session turn into a change."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="font-display text-[2.4rem] font-bold leading-none text-sand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-[1.14rem] font-semibold">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-slateink">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What we run"
            lede="Four program areas with one common objective: aware, capable, healthy and socially responsible young citizens."
          />
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <Link
                  to={`/programs#${p.id}`}
                  className="group flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10"
                >
                  <Img
                    src={programImages[p.id].src}
                    alt={programImages[p.id].alt}
                    ratio="4/3"
                    className="w-full shrink-0 rounded-xl md:w-40"
                  />
                  <h3 className="font-display text-[1.45rem] font-semibold md:w-[30%]">{p.title}</h3>
                  <p className="flex-1 text-slateink">{p.summary}</p>
                  <ArrowRight
                    size={20}
                    className="text-ink/25 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-ink"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container">
          <SectionHeading
            tone="light"
            align="center"
            title="The standards we hold every session to"
            lede="Shared with every partner before the first workshop is scheduled."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {collaboration.standards.map((s, i) => (
              <Reveal key={s} delay={i * 0.06}>
                <span className="rounded-full border border-white/20 px-5 py-2.5 font-display text-[0.95rem] font-medium text-white/85">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
