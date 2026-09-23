import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-into-view reveal. Keeps motion subtle and respects reduced-motion settings.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
  once = true,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
