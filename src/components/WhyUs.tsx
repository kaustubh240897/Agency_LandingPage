'use client'
import { motion } from 'framer-motion'
import {
  RocketLaunchIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Rapid Development',
    description:
      'From idea to MVP in 25 days, not months. Our rapid development cycle helps you validate your concept quickly and gain a critical first-mover advantage that keeps you ahead in market.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Modern Tech Stack',
    description: 'Built with the latest technologies like NextJs, React Native, NodeJs, AI, LLMs,  Postgres. Ensuring Seamless, Scalable performance and future proof MVP development.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Documentation',
    description: 'We provide comprehensive and clear documentation—including API references, ER diagrams, and architecture designs—to ensure smooth collaboration for developers.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Data-Driven',
    description:
      'We start by building core features for rapid market validation, then leverage analytics and user feedback to make data-driven decisions. This approach optimizes your product, ensuring it is both scalable and future-proof.',
    icon: ChartBarIcon,
  },
]

export default function WhyUs() {
  return (
    <div id="why-us" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-purple-400">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Move Fast at Startup Speed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            We combine deep technical expertise with sharp business insight to deliver cutting-edge AI solutions that drive real results—fast.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-purple-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 