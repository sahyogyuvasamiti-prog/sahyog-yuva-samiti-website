import { useState } from 'react'

/**
 * Photo wrapper: fixed aspect ratio, lazy loading, a soft fade-in once the file
 * arrives, and a labelled fallback if the file is missing so a broken path is
 * obvious during editing instead of silently blank.
 */
export default function Img({
  src,
  alt = '',
  ratio = '4/3',
  className = '',
  imgClassName = '',
  zoom = true,
  priority = false,
  children,
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-sand ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : undefined}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-all duration-[900ms] ease-out ${
            loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
          } ${zoom ? 'group-hover:scale-[1.04]' : ''} ${imgClassName}`}
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-navy-50 px-4 text-center">
          <span className="text-[0.8rem] font-medium text-navy-700/60">
            Add a photo at{' '}
            <code className="rounded bg-white px-1.5 py-0.5 text-[0.75rem]">{src}</code>
          </span>
        </div>
      )}
      {children}
    </div>
  )
}
