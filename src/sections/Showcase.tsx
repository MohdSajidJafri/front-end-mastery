'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FloatingGradients from '../components/FloatingGradients'

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const projects = [
  {
    title: 'Brand Identity',
    image: '/images/Branding.png',
    description: 'A bold new look for a modern brand.',
  },
  {
    title: 'E-commerce Experience',
    image: '/images/E-Commerce.png',
    description: 'Seamless shopping with beautiful UI.',
  },
  {
    title: 'Mobile App Design',
    image: '/images/Mobile App Design.png',
    description: 'Intuitive and engaging mobile experiences.',
  },
]

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Showcase() {
  return (
    <motion.section
      id="showcase"
      className="section bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <FloatingGradients />
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-surface shadow-card border border-gray-200 rounded-2xl overflow-hidden transition-transform group relative will-change-transform"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(99,91,255,0.10)', rotateY: 10, rotateX: 10, z: 30, filter: 'brightness(1.08) drop-shadow(0 0 32px #635BFF44)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ rotateY: 12, rotateX: 12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 drop-shadow-none">{project.title}</h3>
                  <p className="text-secondary drop-shadow-none">{project.description}</p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-accent opacity-0 group-hover:opacity-60 transition-opacity blur-sm animate-pulse" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 