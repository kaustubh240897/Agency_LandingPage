'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: 'What is an MVP?',
    answer:
      'An MVP (Minimum Viable Product) is a version of your product with just enough features to be usable by early customers who can then provide feedback for future product development.',
  },
  {
    question: 'How fast will I receive my requests?',
    answer:
      'I strive to deliver requests as quickly as possible, typically within a few business days after our initial discussion. Once I receive the down payment, I will begin providing you with regular updates on the progress of your project. If you need your request completed sooner, please let me know, and I will do my best to accommodate your timeline.',
  },
  {
    question: 'How does onboarding work?',
    answer:
      'Onboarding process is streamlined and user-friendly. First Step is doing a meeting to see If I can help you, then we start building the MVP together, We Will continue discussing and iterating over the MVP until we have reached your satisfaction point.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer various support and maintenance packages after the free support period ends. Our team is available to assist with updates, bug fixes, and new feature development after the initial launch.',
  },
  {
    question: 'Who are the developers?',
    answer:
      "There are no external developers. I will be your sole point of contact, and my team will handle all the work. Our developers are highly skilled professionals with extensive industry experience. I will be fully accountable for the MVP.",
  },
  {
    question: 'If I want to add something new after the Initial Discussion?',
    answer:
      "The number of changes you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes. If you want to add something new, you can do so but if it extends the timeline,you might have to pay more for the extra time. If you belive that you might need to add something new constantly, you might consider buying our Recurring Plan.",
  },
  {
    question: "What if I don't like the work that is done?",
    answer:
      "I offer revisions to ensure your satisfaction. Continuous discussion and iteration throughout the process will help prevent any unexpected dissatisfaction. By involving you at every step, we can work more efficiently and avoid such situations. If you're not happy with the work, we'll make the necessary adjustments together.",
  },
  
//   {
//     question: 'What happens after the MVP is launched?',
//     answer:
//       "After launch, we help you gather user feedback, analyze metrics, and plan the next phase of development. We can continue to support your product's growth and evolution.",
//   },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div id="faq" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-base font-semibold leading-7 text-purple-400">FAQ</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-800">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-6"
            >
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-semibold leading-7 text-white">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform text-gray-400 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 pr-12"
                >
                  <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 