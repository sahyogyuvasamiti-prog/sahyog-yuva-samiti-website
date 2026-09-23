import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import Img from './Img'
import { org } from '../data/site'
import { img } from '../data/images'

export default function CTASection({
  title = 'Bring your program to young people who are waiting for it',
  text = 'Tell us the cohort you want to reach and the outcome you are aiming for. We will come back with a district, a schedule and a delivery plan.',
  primary = { label: 'Start a conversation', to: '/contact' },
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl">
          <Img
            src={img.cta.src}
            alt={img.cta.alt}
            ratio="16/9"
            zoom={false}
            className="min-h-[440px] rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ink/94 via-ink/80 to-ink/45" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-7 py-12 md:px-16">
                <div className="max-w-2xl">
                  <span className="rule-saffron mb-6" />
                  <h2 className="display-lg text-white">{title}</h2>
                  <p className="lede mt-5 text-white/75">{text}</p>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link to={primary.to} className="btn btn-primary">
                      {primary.label}
                      <ArrowRight size={17} />
                    </Link>
                    <a
                      href={org.phoneHref}
                      className="btn border border-white/30 text-white hover:bg-white/10"
                    >
                      <Phone size={16} /> {org.phone}
                    </a>
                    <a
                      href={`mailto:${org.email}`}
                      className="link-underline inline-flex items-center gap-2 text-[0.93rem] text-white/75 hover:text-white"
                    >
                      <Mail size={16} /> {org.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Img>
        </Reveal>
      </div>
    </section>
  )
}
