import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Check } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { accentOf } from '../components/accents'
import Img from '../components/Img'
import { programs } from '../data/site'
import { img, programImages } from '../data/images'

export default function Programs() {
  const { hash } = useLocation()

  // Jump to the requested program once the page has rendered.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
  }, [hash])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Programs"
        title="Our work with youth and communities"
        lede="Opportunity, healthy engagement and social awareness — combined to channel youth energy in a constructive direction."
        image={img.vision}
      />

      {/* Quick jump rail */}
      <div className="sticky top-[74px] z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <div className="container flex gap-2 overflow-x-auto py-3.5">
          {programs.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="whitespace-nowrap rounded-full border border-ink/12 bg-white px-4 py-2 text-[0.85rem] font-medium text-ink/75 transition-colors hover:border-ink/35 hover:text-ink"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {programs.map((p, i) => {
        const a = accentOf(p.accent)
        const flipped = i % 2 === 1
        return (
          <section
            key={p.id}
            id={p.id}
            className={`scroll-mt-32 py-16 md:py-24 ${i % 2 === 1 ? 'bg-white' : ''}`}
          >
            <div
              className={`container grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                flipped ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className={`h-10 w-1.5 rounded-full ${a.bar}`} />
                  <span className={`font-display text-[0.9rem] font-semibold ${a.text}`}>
                    {p.index} · {p.kicker}
                  </span>
                </div>
                <h2 className="display-lg mt-6">{p.title}</h2>
                <p className="lede mt-6">{p.summary}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <Img
                  src={programImages[p.id].src}
                  alt={programImages[p.id].alt}
                  ratio="4/3"
                  className="mb-6 rounded-2xl"
                />
                <ul className={`rounded-2xl ${a.soft} p-8 md:p-10`}>
                  {p.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-4 border-b border-ink/8 py-4 first:pt-0 last:border-0 last:pb-0"
                    >
                      <Check size={18} className={`mt-1 shrink-0 ${a.text}`} />
                      <span className="text-[0.98rem] text-ink/85">{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )
      })}

      <section className="py-14">
        <div className="container">
          <Reveal>
            <div className="rounded-2xl bg-ink px-8 py-10 text-center md:px-12">
              <p className="font-display text-[1.25rem] font-semibold leading-snug text-white">
                The common objective: aware, capable, healthy and socially responsible young
                citizens.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to run one of these programs in your district?"
        text="Schools, colleges, companies and foundations can plug into any program area. Tell us what you can offer and where."
        primary={{ label: 'Talk to the team', to: '/contact' }}
      />
    </PageTransition>
  )
}
