'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <motion.section
        className="bg-gray-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Success Stories
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Real results from our community of successful house flippers. Get
            inspired by their journeys and learn from their experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-12 bg-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '350+', label: 'Successful Flips' },
              { number: '$50M+', label: 'Total Property Value' },
              { number: '35%', label: 'Average ROI' },
              { number: '4mo', label: 'Average Flip Time' },
            ].map((stat, i) => (
              <motion.div key={i} className="text-center" variants={scaleIn}>
                <motion.h3
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Success Stories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Success Stories
          </motion.h2>
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div
                    className="relative h-[400px]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Image
                      src={`/images/${i}.jpg`}
                      alt="Before Renovation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <motion.div
                      className="absolute bottom-6 left-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm font-bold">BEFORE</p>
                      <p className="text-2xl font-bold">
                        Purchase Price: $180,000
                      </p>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="relative h-[400px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Image
                      src={`/images/${i + 3}.jpg`}
                      alt="After Renovation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <motion.div
                      className="absolute bottom-6 left-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm font-bold">AFTER</p>
                      <p className="text-2xl font-bold">Sold Price: $280,000</p>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={`/images/${i + 6}.jpg`}
                      alt="Investor"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Sarah Johnson</h3>
                      <p className="text-gray-600">First-time Flipper</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                        55% ROI
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    &ldquo;This Victorian-style home needed significant updates,
                    but I saw its potential. With FixFlip&apos;s guidance on
                    renovation planning and contractor selection, we completed
                    the project under budget and ahead of schedule. The property
                    sold within a week of listing!&rdquo;
                  </p>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-gray-500">Timeline</p>
                      <p className="font-bold">3.5 months</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Renovation Cost</p>
                      <p className="font-bold">$45,000</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Total Profit</p>
                      <p className="font-bold text-green-600">$55,000</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips from Successful Flippers */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tips from Successful Flippers
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                tip: 'Always get a thorough inspection before purchasing',
                author: 'Mike R.',
                role: '10+ Successful Flips',
              },
              {
                tip: 'Build strong relationships with reliable contractors',
                author: 'Lisa M.',
                role: 'Property Renovation Expert',
              },
              {
                tip: 'Research the neighborhood thoroughly before investing',
                author: 'David K.',
                role: 'Real Estate Investor',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <p className="text-gray-600 mb-6">&ldquo;{item.tip}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={`/images/${i + 4}.jpg`}
                    alt={item.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{item.author}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-600 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Join our community of successful house flippers today
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your First Flip
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
