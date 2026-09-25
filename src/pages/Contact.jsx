import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import { org } from '../data/site'
import { img } from '../data/images'

const channels = [
  {
    icon: Phone,
    label: 'Call us',
    value: org.phone,
    href: org.phoneHref,
    note: 'Monday to Saturday, 10am – 7pm',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: org.email,
    href: `mailto:${org.email}`,
    note: 'We reply within two working days',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: org.phone,
    href: org.whatsapp,
    note: 'Quickest for scheduling questions',
  },
  {
    icon: MapPin,
    label: 'Where we work',
    value: `${org.state}, ${org.country}`,
    note: `Registration No. ${org.registration}`,
  },
]

export default function Contact() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title="Let us connect, collaborate and create meaningful opportunities for young people"
        lede="Whether you are a school, a company, a foundation or a volunteer — start here."
        image={img.contact}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => {
              const Icon = c.icon
              const inner = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-saffron-50 text-saffron-500">
                    <Icon size={20} />
                  </span>
                  <span className="mt-5 block text-[0.85rem] text-slateink">{c.label}</span>
                  <span className="mt-1 block break-words font-display text-[1.05rem] font-semibold text-ink">
                    {c.value}
                  </span>
                  <span className="mt-2 block text-[0.85rem] text-slateink">{c.note}</span>
                </>
              )
              return (
                <Reveal key={c.label} delay={i * 0.07}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="block h-full rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <EnquiryForm />

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-ink p-9 text-white md:p-10">
                <h2 className="font-display text-[1.5rem] font-semibold text-white">
                  Follow the work
                </h2>
                <p className="mt-4 text-[0.98rem] text-white/70">
                  Sessions, padyatras, tournaments and awareness drives are posted as they happen.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    { icon: Facebook, name: 'Facebook', handle: org.social.facebook.handle, url: org.social.facebook.url },
                    { icon: Instagram, name: 'Instagram', handle: org.social.instagram.handle, url: org.social.instagram.url },
                  ].map((s) => {
                    const Icon = s.icon
                    return (
                      <li key={s.name}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-4 rounded-xl border border-white/12 px-5 py-4 transition-colors hover:border-saffron-500 hover:bg-white/5"
                        >
                          <Icon size={19} className="text-saffron-200" />
                          <span>
                            <span className="block text-[0.82rem] text-white/50">{s.name}</span>
                            <span className="block text-[0.98rem] font-medium">{s.handle}</span>
                          </span>
                        </a>
                      </li>
                    )
                  })}
                  <li>
                    <a
                      href={org.social.x.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-white/12 px-5 py-4 transition-colors hover:border-saffron-500 hover:bg-white/5"
                    >
                      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" className="text-saffron-200" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                      </svg>
                      <span>
                        <span className="block text-[0.82rem] text-white/50">X</span>
                        <span className="block text-[0.98rem] font-medium">{org.social.x.handle}</span>
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="mt-9 border-t border-white/12 pt-7">
                  <p className="font-deva text-[1.05rem] text-saffron-200">{org.taglineHi}</p>
                  <p className="mt-2 text-[0.9rem] text-white/50">{org.tagline}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
