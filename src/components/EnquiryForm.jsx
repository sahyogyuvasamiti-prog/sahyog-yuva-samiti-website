import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { org, partnerTracks, regions } from '../data/site'

const initial = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  interest: partnerTracks[0].title,
  district: '',
  message: '',
}

/**
 * No backend is wired up yet: submitting opens the visitor's mail client with a
 * prefilled message to the Samiti. To use a real endpoint (Formspree, Google Forms,
 * your own API), replace the body of `handleSubmit` with a fetch() call.
 */
export default function EnquiryForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((x) => ({ ...x, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address'
    if (!form.message.trim()) next.message = 'Tell us briefly what you have in mind'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const body = [
      `Name: ${form.name}`,
      `Organization: ${form.organization || '—'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Area of interest: ${form.interest}`,
      `Preferred district: ${form.district || '—'}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(
      `Collaboration enquiry — ${form.organization || form.name}`
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-saffron-500'
  const label = 'mb-2 block text-[0.85rem] font-medium text-slateink'

  if (sent) {
    return (
      <div className="rounded-2xl border border-leaf-500/25 bg-leaf-50 p-9 text-center">
        <CheckCircle2 className="mx-auto text-leaf-500" size={34} />
        <h3 className="mt-5 font-display text-[1.3rem] font-semibold">Your email is ready to send</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] text-slateink">
          We opened your mail app with the details filled in. Send it and we will reply within two
          working days. Prefer to talk? Call {org.phone}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial)
            setSent(false)
          }}
          className="btn btn-ghost mt-7"
        >
          Write another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-ink/10 bg-white p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input id="name" className={field} value={form.name} onChange={update('name')} placeholder="Full name" />
          {errors.name && <p className="mt-2 text-[0.82rem] text-saffron-600">{errors.name}</p>}
        </div>

        <div>
          <label className={label} htmlFor="organization">
            Organization
          </label>
          <input
            id="organization"
            className={field}
            value={form.organization}
            onChange={update('organization')}
            placeholder="School, company, foundation"
          />
        </div>

        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className={field} value={form.email} onChange={update('email')} placeholder="you@example.com" />
          {errors.email && <p className="mt-2 text-[0.82rem] text-saffron-600">{errors.email}</p>}
        </div>

        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" className={field} value={form.phone} onChange={update('phone')} placeholder="10-digit mobile" />
        </div>

        <div>
          <label className={label} htmlFor="interest">
            Area of interest
          </label>
          <select id="interest" className={field} value={form.interest} onChange={update('interest')}>
            {partnerTracks.map((t) => (
              <option key={t.title}>{t.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label className={label} htmlFor="district">
            Preferred district
          </label>
          <select id="district" className={field} value={form.district} onChange={update('district')}>
            <option value="">No preference</option>
            {regions.flatMap((r) => r.districts).map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          What would you like to do with us?
        </label>
        <textarea
          id="message"
          rows={5}
          className={field}
          value={form.message}
          onChange={update('message')}
          placeholder="Cohort, timeline, what you can contribute, what you want to achieve"
        />
        {errors.message && <p className="mt-2 text-[0.82rem] text-saffron-600">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
        Send enquiry <Send size={16} />
      </button>
      <p className="mt-4 text-[0.82rem] text-slateink">
        We use your details only to reply to this enquiry.
      </p>
    </form>
  )
}
