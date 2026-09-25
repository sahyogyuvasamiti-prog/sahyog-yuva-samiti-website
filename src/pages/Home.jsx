import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin, Quote } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Counter from '../components/Counter'
import PhotoStat from '../components/PhotoStat'
import Img from '../components/Img'
import PhotoGrid from '../components/PhotoGrid'
import CTASection from '../components/CTASection'
import { accentOf } from '../components/accents'
import { about, org, pilot, programs, regions, stats, valueProps } from '../data/site'
import { img, programImages, stories } from '../data/images'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <PageTransition>
      {/* ------------------------------------------------- Hero: photo first */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={img.hero.src} alt={img.hero.alt} className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/75 to-ink/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

        <div className="container relative flex min-h-[92vh] flex-col justify-end pb-24 pt-36 md:pb-28">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div
              variants={rise}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.82rem] font-medium text-white/90 backdrop-blur-sm"
            >
              <MapPin size={15} className="text-saffron-200" />
              Working across {org.state} · Reg. No. {org.registration}
            </motion.div>

            <motion.h1 variants={rise} className="display-xl mt-7 text-white">
              Connecting Young Minds, Creating Meaningful Futures
            </motion.h1>

            <motion.p variants={rise} className="lede mt-7 text-white/80">
              A grassroots youth organization working through volunteers, teachers and schools — and
              a last-mile delivery partner for educational, technology, sports, skilling and
              social-impact organizations.
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/partner" className="btn btn-primary">
                Partner with us <ArrowRight size={17} />
              </Link>
              <Link
                to="/gallery"
                className="btn border border-white/30 text-white backdrop-blur-sm hover:bg-white/10"
              >
                See our work in photos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------- Stats, lifted over the fold */}
      <section className="relative z-10 -mt-16">
        <div className="container">
          <Reveal>
            <div className="grid gap-y-10 rounded-3xl bg-white p-9 shadow-lift sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:p-11">
              {stats.map((s) => (
                <div key={s.label} className="lg:px-4">
                  <p className="font-display text-[2.9rem] font-bold leading-none text-ink">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2.5 font-display text-[1rem] font-semibold text-saffron-500">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[0.88rem] text-slateink">{s.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------- About: photo collage */}
      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <Img
              src={img.aboutMain.src}
              alt={img.aboutMain.alt}
              ratio="4/5"
              className="rounded-3xl"
              zoom={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-2xl border-[6px] border-cream sm:block lg:-right-10 lg:w-64"
            >
              <Img
                src={img.aboutInset.src}
                alt={img.aboutInset.alt}
                ratio="1/1"
                zoom={false}
                className="rounded-xl"
              />
            </motion.div>
          </Reveal>

          <div>
            <SectionHeading title={about.headline} />
            <p className="mt-7 font-display text-[1.2rem] font-semibold leading-snug text-ink">
              {about.intro}
            </p>
            <p className="mt-5 text-slateink">{about.body}</p>

            <ul className="mt-9 space-y-5">
              {about.approach.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.07} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-saffron-500" />
                  <span>
                    <span className="block font-display text-[1.02rem] font-semibold">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[0.94rem] text-slateink">{item.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>

            <Link to="/about" className="btn btn-ghost mt-9">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Programs as photo cards */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Four ways we work with young people"
            lede="Opportunity, healthy engagement and social awareness — combined to channel youth energy in a constructive direction."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => {
              const a = accentOf(p.accent)
              const photo = programImages[p.id]
              return (
                <Reveal key={p.id} delay={i * 0.08}>
                  <Link
                    to={`/programs#${p.id}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <Img src={photo.src} alt={photo.alt} ratio="4/3">
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      <span
                        className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[0.75rem] font-semibold text-white ${a.bar}`}
                      >
                        {p.index}
                      </span>
                      <span className="absolute inset-x-0 bottom-0 p-5 font-display text-[1.12rem] font-semibold leading-tight text-white">
                        {p.title}
                      </span>
                    </Img>
                    <div className="p-6">
                      <p className={`text-[0.82rem] font-semibold ${a.text}`}>{p.kicker}</p>
                      <p className="mt-3 text-[0.93rem] text-slateink">{p.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.9rem] font-semibold text-ink">
                        Read more
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Impact photo banner */}
      <section className="relative overflow-hidden">
        <Img
          src={img.impact.src}
          alt={img.impact.alt}
          ratio="21/9"
          zoom={false}
          className="min-h-[460px]"
        >
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-0 grid place-items-center px-5 py-12">
            <div className="container text-center">
              <Reveal>
                <p className="mx-auto max-w-3xl font-display text-[1.55rem] font-semibold leading-snug text-white md:text-[2.05rem]">
                  Every young person should have access to guidance, skills, healthy opportunities
                  and the confidence to build a purposeful future.
                </p>
              </Reveal>
              <div className="mt-11 grid gap-8 sm:grid-cols-3">
                <PhotoStat value={19} label="Districts we work in" />
                <PhotoStat value={4} label="Program areas" />
                <PhotoStat value={8} suffix=" wks" label="To run a full pilot" />
              </div>
            </div>
          </div>
        </Img>
      </section>

      {/* ------------------------------------------------------ Photo gallery */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="What our work looks like"
              lede="Sessions, matches, padyatras and pledge drives from districts across Madhya Pradesh."
            />
            <Link to="/gallery" className="btn btn-ghost">
              Open full gallery <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12">
            <PhotoGrid limit={6} showFilters={false} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Voices */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Voices from the ground"
            lede="Collected during sessions and follow-up visits."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name + s.place} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-8">
                  <Quote size={24} className="text-saffron-500" />
                  <blockquote className="mt-5 flex-1 font-display text-[1.08rem] font-medium leading-snug text-ink">
                    {s.quote}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-ink/10 pt-5 text-[0.88rem]">
                    <span className="block font-semibold text-ink">{s.name}</span>
                    <span className="block text-slateink">{s.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Presence */}
      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Present where the young people are"
              lede="Active district networks across four regions of Madhya Pradesh, supported by wider volunteer and teacher connectivity."
            />
            <div className="mt-10 space-y-6">
              {regions.map((r, i) => {
                const a = accentOf(r.accent)
                return (
                  <Reveal key={r.name} delay={i * 0.07}>
                    <div className="flex items-baseline gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${a.bar}`} />
                      <h3 className="font-display text-[1.02rem] font-semibold">{r.name}</h3>
                    </div>
                    <p className="mt-2 pl-6 text-[0.95rem] text-slateink">
                      {r.districts.join(' · ')}
                    </p>
                  </Reveal>
                )
              })}
            </div>
            <Link to="/presence" className="btn btn-ghost mt-10">
              See where we work <ArrowRight size={16} />
            </Link>
          </div>

          <Reveal delay={0.1}>
            <Img
              src={img.presence.src}
              alt={img.presence.alt}
              ratio="4/5"
              className="rounded-3xl"
              zoom={false}
            >
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
                <span className="block font-display text-[1.15rem] font-semibold leading-snug text-white">
                  Statewide presence enables district-to-district mobilisation and physical
                  delivery.
                </span>
              </span>
            </Img>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- Partner value + pilot */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What a partner gets when they work through Sahyog"
            lede="Partners contribute expertise and resources. We convert them into accessible, locally delivered programs for young people."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Img
                src={img.partner.src}
                alt={img.partner.alt}
                ratio="7/5"
                className="rounded-3xl"
                zoom={false}
              />
              <p className="mt-6 font-display text-[1.15rem] font-semibold text-ink">
                Expertise from the partner. Reach, trust and execution from Sahyog.
              </p>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {valueProps.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.06}>
                  <div className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-cream">
                    <span className="block h-[3px] w-8 rounded-full bg-saffron-500 transition-all duration-300 group-hover:w-14" />
                    <h3 className="mt-5 font-display text-[1.06rem] font-semibold">{v.title}</h3>
                    <p className="mt-2.5 text-[0.92rem] text-slateink">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading title="Start with an 8-week pilot" lede={pilot.intro} />
            <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {pilot.steps.map((s, i) => (
                <Reveal as="li" key={s.step} delay={i * 0.09}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[0.95rem] font-bold text-saffron-500">
                      {s.step}
                    </span>
                    <span className="text-[0.82rem] text-slateink">{s.weeks}</span>
                  </div>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.09 }}
                    className="mt-4 block h-[3px] origin-left bg-ink"
                  />
                  <h3 className="mt-5 font-display text-[1.22rem] font-semibold">{s.title}</h3>
                  <p className="mt-2.5 text-[0.94rem] text-slateink">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
