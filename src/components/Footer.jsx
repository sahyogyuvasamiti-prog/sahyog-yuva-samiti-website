import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { navLinks, org, programs } from '../data/site'

function XIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/70">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/95 p-1.5">
                <Logo className="h-9 w-9" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-white">{org.name}</span>
                <span className="block font-deva text-[0.78rem] text-saffron-200">
                  {org.taglineHi}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              A youth-focused, grassroots organization expanding participation, awareness and
              opportunity for young people across {org.state}.
            </p>
            <p className="mt-5 text-[0.85rem] text-white/45">
              Registration No. {org.registration}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-[0.95rem] font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-[0.93rem]">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link className="link-underline hover:text-white" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-[0.95rem] font-semibold text-white">Programs</h3>
            <ul className="mt-5 space-y-3 text-[0.93rem]">
              {programs.map((p) => (
                <li key={p.id}>
                  <Link className="link-underline hover:text-white" to={`/programs#${p.id}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[0.95rem] font-semibold text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-[0.93rem]">
              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-1 shrink-0 text-saffron-200" />
                <a className="hover:text-white" href={org.phoneHref}>
                  {org.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-1 shrink-0 text-saffron-200" />
                <a className="break-all hover:text-white" href={`mailto:${org.email}`}>
                  {org.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-saffron-200" />
                <span>
                  {org.state} • {org.country}
                </span>
              </li>
            </ul>

            <div className="mt-7 flex items-center gap-3">
              {[
                { href: org.social.facebook.url, icon: <Facebook size={18} />, label: 'Facebook' },
                { href: org.social.instagram.url, icon: <Instagram size={18} />, label: 'Instagram' },
                { href: org.social.x.url, icon: <XIcon />, label: 'X' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-saffron-500 hover:bg-saffron-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.84rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {org.name}. All rights reserved.
          </p>
          <p>{org.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
