'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FloatingGradients from '../components/FloatingGradients'
import MagneticButton from '../components/MagneticButton'

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <motion.section
      id="contact"
      className="section bg-transparent relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <FloatingGradients />
      <div className="container max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">Contact</h2>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-surface shadow-card border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col gap-6 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl pointer-events-none z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent2/20 rounded-full blur-2xl pointer-events-none z-0" />
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-surface text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent border border-gray-200 transition-all duration-200 shadow-sm z-10"
            whileFocus={{ scale: 1.03, boxShadow: '0 0 0 4px rgba(127,92,255,0.10)' }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-surface text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent border border-gray-200 transition-all duration-200 shadow-sm z-10"
            whileFocus={{ scale: 1.03, boxShadow: '0 0 0 4px rgba(127,92,255,0.10)' }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-surface text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent border border-gray-200 transition-all duration-200 shadow-sm z-10"
            whileFocus={{ scale: 1.02, boxShadow: '0 0 0 4px rgba(127,92,255,0.08)' }}
          />
          <MagneticButton className="self-end mt-2 w-full sm:w-auto" type="submit" disabled={submitted}>
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-accent animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Sent!
              </motion.span>
            ) : (
              'Send Message'
            )}
          </MagneticButton>
        </motion.form>
        <div className="text-center text-secondary mt-6 text-base md:text-lg">
          Or email me at <a href="mailto:hello@uimasterpiece.com" className="text-accent underline">hello@uimasterpiece.com</a>
        </div>
      </div>
    </motion.section>
  )
} 