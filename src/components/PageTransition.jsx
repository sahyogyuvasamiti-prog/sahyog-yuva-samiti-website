import { motion } from 'framer-motion'

/** Wraps each route so page changes cross-fade instead of snapping. */
export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
