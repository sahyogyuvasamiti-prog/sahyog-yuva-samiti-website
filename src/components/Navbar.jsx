import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { navLinks, org } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Every page opens with a dark photograph, so the bar starts light and inverts on scroll.
  const onDark = !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/92 shadow-edge backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-[78px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Sahyog Yuva Samiti — home">
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
              onDark ? 'bg-white/95 p-1.5' : 'bg-transparent'
            }`}
          >
            <Logo className="h-10 w-10" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-[1.02rem] font-bold tracking-tight transition-colors duration-300 ${
                onDark ? 'text-white' : 'text-ink'
              }`}
            >
              Sahyog Yuva Samiti
            </span>
            <span
              className={`block font-deva text-[0.72rem] transition-colors duration-300 ${
                onDark ? 'text-white/70' : 'text-slateink'
              }`}
            >
              {org.taglineHi}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `link-underline text-[0.92rem] font-medium transition-colors ${
                  isActive
                    ? onDark
                      ? 'text-saffron-200'
                      : 'text-saffron-500'
                    : onDark
                      ? 'text-white/85 hover:text-white'
                      : 'text-ink/75 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={org.phoneHref}
            className={`btn ${onDark ? 'bg-white text-ink hover:bg-white/90' : 'btn-dark'}`}
          >
            <Phone size={16} />
            {org.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            onDark ? 'border-white/35 text-white' : 'border-ink/15 text-ink'
          }`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-saffron-500"
        aria-hidden="true"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <div className="mx-5 mb-5 rounded-2xl border border-ink/10 bg-white p-5 shadow-lift">
              <ul className="divide-y divide-ink/10">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block py-3 font-display text-lg font-semibold ${
                          isActive ? 'text-saffron-500' : 'text-ink'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <a href={org.phoneHref} className="btn btn-primary mt-5 w-full">
                <Phone size={16} /> Call {org.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
