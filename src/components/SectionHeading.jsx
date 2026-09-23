import Reveal from './Reveal'

export default function SectionHeading({ title, lede, align = 'left', tone = 'dark' }) {
  const isCenter = align === 'center'
  return (
    <Reveal className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <span className={`rule-saffron ${isCenter ? 'mx-auto' : ''} mb-6`} />
      <h2 className={`display-lg ${tone === 'light' ? 'text-white' : ''}`}>{title}</h2>
      {lede && (
        <p className={`lede mt-5 ${isCenter ? 'mx-auto' : ''} ${tone === 'light' ? 'text-white/70' : ''}`}>
          {lede}
        </p>
      )}
    </Reveal>
  )
}
