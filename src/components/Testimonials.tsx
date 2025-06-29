'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    content:
      "makeMVP transformed our idea into a fully functional product in just 6 weeks. Their team's expertise and dedication were impressive.",
    author: {
      name: 'Sarah Chen',
      role: '- Owlminds',
      image: '/testimonials/sarah.jpg',
    },
  },
  {
    content:
      "The onboarding process was seamless, and our traffic increased by 35% now. A job well done, thank you!",
    author: {
      name: 'Sarah Chen',
      role: '- TechStart',
      image: '/testimonials/sarah.jpg',
    },
  },
  {
    content:
      'Working with makeMVP was a game-changer for our business. They delivered a high-quality product that exceeded our expectations.',
    author: {
      name: 'Michael Rodriguez',
      role: '- Waykel',
      image: '/testimonials/michael.jpg',
    },
  },
  {
    content:
      'The team at makeMVP understood our vision perfectly and delivered a solution that perfectly matches our requirements.',
    author: {
      name: 'Emily Thompson',
      role: '- GrowthLabs',
      image: '/testimonials/emily.jpg',
    },
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const total = testimonials.length

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }, (_, i) => testimonials[(current + i) % total])
  }

  return (
    <div id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-base font-semibold leading-7 text-purple-400">Testimonials</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Trusted By Founders & Teams
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>
        <div className="relative mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-7xl">
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:-left-12"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:-right-12"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="flex justify-center gap-4 lg:gap-8 overflow-hidden px-4">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author.name}-${current}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <div className="flex h-full flex-col justify-between rounded-2xl bg-gray-800/60 p-6 lg:p-8 ring-1 ring-gray-800">
                  <div>
                    <div className="flex gap-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">{testimonial.content}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-x-4">
                    <div>
                      {/* <div className="font-semibold text-white">{testimonial.author.name}</div> */}
                      <div className="text-sm text-gray-400">{testimonial.author.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === current ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 