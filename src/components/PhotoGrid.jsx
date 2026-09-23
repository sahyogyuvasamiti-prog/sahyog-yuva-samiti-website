import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react'
import Img from './Img'
import { gallery, galleryTags } from '../data/images'

/**
 * Masonry-style photo wall with tag filters and a lightbox.
 * Pass `limit` to show only the first N photos (used on the home page).
 */
export default function PhotoGrid({ limit, showFilters = true }) {
  const [tag, setTag] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)

  const photos = useMemo(() => {
    const list = tag === 'All' ? gallery : gallery.filter((p) => p.tag === tag)
    return limit ? list.slice(0, limit) : list
  }, [tag, limit])

  const close = () => setOpenIndex(null)
  const step = (dir) =>
    setOpenIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length))

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, photos.length])

  const active = openIndex === null ? null : photos[openIndex]

  return (
    <>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-2.5">
          {galleryTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`rounded-full border px-5 py-2 text-[0.88rem] font-medium transition-all duration-300 ${
                tag === t
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink/15 bg-white text-ink/70 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {photos.map((p, i) => (
            <motion.button
              layout
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="group block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
            >
              <Img
                src={p.src}
                alt={p.alt}
                ratio={i % 3 === 0 ? '4/5' : i % 3 === 1 ? '4/3' : '1/1'}
                className="rounded-2xl"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-display text-[1.02rem] font-semibold text-white">
                    {p.caption}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-[0.82rem] text-white/75">
                    <MapPin size={13} /> {p.place}
                  </span>
                </span>
              </Img>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:left-8"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-full max-w-4xl"
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[72vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-5 text-center">
                <p className="font-display text-[1.1rem] font-semibold text-white">
                  {active.caption}
                </p>
                <p className="mt-1 text-[0.88rem] text-white/60">
                  {active.place} · {active.tag}
                </p>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:right-8"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
