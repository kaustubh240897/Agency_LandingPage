'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BoltIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <div className="relative isolate pt-24 sm:pt-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-pink-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="py-12 sm:py-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Transform Your Ideas into{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Digital Reality in 15 days
                  <BoltIcon className="inline-block h-10 w-10 text-yellow-400 ml-2 align-middle animate-pulse drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" aria-label="Lightning" />
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We help businesses bring their ideas to life very fast. Specializing in modern web apps, mobile apps, and custom solutions, we empower you to validate your concept quickly and gain a crucial market advantage.
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              AI-Driven Development — Build Fast, Validate Even Faster
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://cal.com/kaustubh-csoetr"
                  className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Book a Call
                </Link>
                <Link href="#our-work" className="text-sm font-semibold leading-6 text-white">
                  View Our Work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-pink-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 