import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="container flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-[0.9rem] font-semibold text-saffron-500">404</p>
        <h1 className="display-lg mt-5 max-w-2xl">This page is not here</h1>
        <p className="lede mt-5">
          The link may be old or mistyped. Head back to the homepage and start again.
        </p>
        <Link to="/" className="btn btn-primary mt-9">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </section>
    </PageTransition>
  )
}
