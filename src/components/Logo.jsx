/**
 * Brand mark.
 * Drop the official logo file into /public/logo.png and it will be used automatically;
 * until then this inline SVG (supporting hands + youth figures) renders as a stand-in.
 */
import { useState } from 'react'

export default function Logo({ className = 'h-11 w-11', showFallbackOnly = false }) {
  const [broken, setBroken] = useState(showFallbackOnly)

  if (!broken) {
    return (
      <img
        src="/images/logo.png"
        alt="Sahyog Yuva Samiti logo"
        className={`${className} object-contain`}
        onError={() => setBroken(true)}
      />
    )
  }

  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Sahyog Yuva Samiti logo">
      <path
        d="M32 6c9.2 0 16.8 6.2 18.9 14.6"
        fill="none"
        stroke="#E4611F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="24" r="6.4" fill="#16355F" />
      <circle cx="17.5" cy="28.5" r="4.6" fill="#1B3F6E" />
      <circle cx="46.5" cy="28.5" r="4.6" fill="#E4611F" />
      <path
        d="M32 31.5c5.4 0 8.6 3.4 8.6 8.6v6.2H23.4v-6.2c0-5.2 3.2-8.6 8.6-8.6Z"
        fill="#16355F"
      />
      <path
        d="M8 36c0 10.5 10.7 19 24 19s24-8.5 24-19"
        fill="none"
        stroke="#16355F"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}
