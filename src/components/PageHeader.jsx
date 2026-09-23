import { motion } from 'framer-motion'

/**
 * Inner-page masthead built on a photograph.
 * Pass any image from src/data/images.js as `image={{ src, alt }}`.
 */
export default function PageHeader({ eyebrow, title, lede, image }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-14 pt-[140px] md:min-h-[68vh] md:pb-20">
      {image && (
        <motion.img
          src={image.src}
          alt={image.alt}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/45" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent" />

      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-[0.9rem] font-semibold text-saffron-200"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="display-lg mt-4 max-w-4xl text-white"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lede mt-6 text-white/80"
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  )
}
