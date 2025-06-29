'use client'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$999' },
    description: 'Perfect for startups or Individuals looking to validate their idea.',
    features: [
      'MVP Development in 1 month',
      'Responsive Design',
      'Core Features Implementation',
      'Basic Analytics',
      'Best scalable tech stack',
      'Founder led development',
      '1 Month of Support'
    ],
    featured: true,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: { monthly: '$1,499' },
    description: 'Perfect for founders who need validate their Ideas with expert guidance and comprehensive support to build their product.',
    features: [
      'All features of Starter +',
      'MVP Development in 1 month',
      '2 Months of Support',
      'Performance Optimization',
      'Continuous Updates',
      'Custom Integrations',
      'Expert guidance for product',
      'Quick Emergency support',
    ],
    featured: false,
  },
  {
    name: 'Recurring Plan',
    id: 'tier-enterprise',
    price: { monthly: '$1499' },
    description: 'Recurring payment for MVP development',
    features: [
      'Min 100 hrs of development per month',
      'Custom Software development',
      'Enterprise Architecture',
      'Advanced Security',
      'Scalable Infrastructure',
      'Dedicated Support Team',
      'Priority Development',
      'Custom Integrations',
      'Quick Emergency support'
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-base font-semibold leading-7 text-purple-400">Pricing</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose the right plan for your needs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We offer flexible pricing plans to help you get started with your digital product
              development journey.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl p-8 ring-1 ring-gray-800 ${
                tier.featured ? 'bg-gray-800/60' : 'bg-gray-900/60'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold leading-8 text-white">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price.monthly}
                  </span>
                  {tier.id === 'tier-enterprise' && (
                    <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                  )}
                </p>
                {tier.id !== 'tier-enterprise' && (<p className='text-sm mt-2'>One Time Payment</p>)}
                {tier.id === 'tier-enterprise' && (<p className='text-sm mt-2'>Recurring Payment</p>)}
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://cal.com/kaustubh-csoetr"
                className={`mt-8 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-purple-600 text-white hover:bg-purple-500 focus-visible:outline-purple-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 