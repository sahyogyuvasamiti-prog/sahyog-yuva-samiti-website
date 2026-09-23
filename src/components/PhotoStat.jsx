import Counter from './Counter'

/** Number over a photo — used on the wide impact banner. */
export default function PhotoStat({ value, suffix = '', label }) {
  return (
    <div className="text-center">
      <p className="font-display text-[2.6rem] font-bold leading-none text-white md:text-[3.2rem]">
        <Counter value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-[0.9rem] text-white/70">{label}</p>
    </div>
  )
}
