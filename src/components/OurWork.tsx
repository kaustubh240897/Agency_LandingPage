'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    title: 'Waykel',
    description: 'On demand commercial vehicle booking',
    image: '/waykal.webp',
    tags: ['Next.js', 'Node.js','Docker', 'MongoDB'],
  },
  {
    title: 'Owlminds',
    description: 'An Edtech platform for kids to learn.',
    image: '/owlmind.webp',
    tags: ['Next.js', 'Postgres SQL', 'Python Django', 'AWS'],
  },
  {
    title: 'Owlminds Dashboard',
    description: "An User's dashboard for track events and performance.",
    image: '/dashboard.webp',
    tags: ['NextJs', 'Python Django', 'Postgres SQL', 'AWS'],
  },
  {
    title: 'rBarbo',
    description: 'Barber shop Appointment Booking Mobile App',
    image: '/barber.webp',
    tags: ['React Native', 'Tailwind CSS', 'OAuth', 'PostgreSQL'],
  },
]

export default function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const project = projects[currentIndex]

  return (
    <div id="our-work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-base font-semibold leading-7 text-purple-400">Our Work</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Recent Projects
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Take a look at some of our recent work. Each project is a testament to our commitment to
              excellence and innovation.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full">
                  <div className="aspect-[17/9] w-full overflow-hidden rounded-2xl bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center justify-center gap-x-4 text-xs">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-purple-400/10 px-3 py-1 text-sm font-medium text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <button
              onClick={handlePrev}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 