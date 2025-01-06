'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import { motion } from 'framer-motion';
import { properties } from './data/properties';

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

export default function Home() {
  // Get the first 3 high potential properties
  const featuredProperties = properties
    .filter((property) => property.status === 'High Potential')
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transform Houses
                <motion.div
                  className="flex items-center gap-2 flex-wrap"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Into Dream Homes
                  <div className="flex -space-x-4">
                    <Image
                      src="/images/1.jpg"
                      alt="Successful Flip Project"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/images/2.jpg"
                      alt="Successful Flip Project"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/images/3.jpg"
                      alt="Successful Flip Project"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white object-cover"
                    />
                  </div>
                </motion.div>
                With Us.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Join successful house flippers earning 25-40% ROI per project.
                Start your real estate flipping journey today.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-4 rounded-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-gray-600">
                Get expert guidance on property selection, renovation planning,
                and market analysis for maximum profits.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <Link href="/properties">
                <motion.button
                  className="flex items-center space-x-2 text-gray-900"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Current Properties</span>
                  <span className="text-xl">→</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <div className="flex -space-x-2">
                <Image
                  src="/images/4.jpg"
                  alt="Successful Flip Project"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/5.jpg"
                  alt="Successful Flip Project"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/6.jpg"
                  alt="Successful Flip Project"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/7.jpg"
                  alt="Successful Flip Project"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">350+</h3>
                <p className="text-gray-600">
                  Successful flips completed by our community
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <Image
                src="/images/8.jpg"
                alt="Before Renovation"
                width={500}
                height={600}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="space-y-2 sm:space-y-4">
                <Image
                  src="/images/9.jpg"
                  alt="During Renovation"
                  width={240}
                  height={280}
                  className="rounded-2xl object-cover w-full h-[200px] sm:h-[280px]"
                />
                <Image
                  src="/images/10.jpg"
                  alt="After Renovation"
                  width={240}
                  height={280}
                  className="rounded-2xl object-cover w-full h-[200px] sm:h-[280px]"
                />
              </div>
            </div>

            <div className="mt-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Watch Success Story</h4>
                  <p className="text-sm text-gray-600">
                    See how our investors transformed a $200K property into a
                    $350K dream home in just 4 months.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Featured Flip Opportunities
            </h2>
            <p className="text-gray-600">
              Discover high-potential properties ready for transformation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {featuredProperties.map((property) => (
              <motion.div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Before & After
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {property.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{property.title}</h3>
                  <p className="text-gray-600">
                    {property.bedrooms} bed • {property.bathrooms} bath •{' '}
                    {property.sqft.toLocaleString()} sqft
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">Current Price</p>
                      <p className="text-2xl font-bold">
                        ${property.price.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">After Repair Value</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${property.afterRepairValue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/properties/${property.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Fix & Flip Works</h2>
            <p className="text-gray-600">
              Your journey to successful property flipping in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Find Properties',
                description:
                  'Access to pre-vetted properties with significant profit margins.',
                icon: '🔍',
              },
              {
                title: 'Secure Funding',
                description:
                  'Get quick financing options with competitive rates specifically designed for fix and flip projects.',
                icon: '💰',
              },
              {
                title: 'Renovation',
                description:
                  'Work with our network of trusted contractors or bring your own team to transform the property.',
                icon: '🏗️',
              },
              {
                title: 'Sell & Profit',
                description:
                  'List the renovated property with our expert agents to maximize your return on investment.',
                icon: '📈',
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Real results from our community of flippers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[4, 5].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <Image
                      src={`/images/${i}.jpg`}
                      alt={`Success Story ${i}`}
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full h-[200px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl">★★★★★</div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      &ldquo;I found an undervalued property through FixFlip and
                      completed my first successful flip with a 35% ROI in just
                      3 months!&rdquo;
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={`/images/${i + 2}.jpg`}
                        alt="Flipper"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <p className="font-bold">Sarah Johnson</p>
                        <p className="text-gray-500 text-sm">
                          First-time Flipper
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Browse our selection of high-potential properties and take the first
            step
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of successful house flippers today
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/properties">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                View Properties
              </button>
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FIXFLIP</h3>
              <p className="text-gray-600">
                Transforming properties and creating opportunities for
                investors.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/properties">Available Properties</Link>
                </li>
                <li>
                  <Link href="/success-stories">Success Stories</Link>
                </li>
                <li>
                  <Link href="/education">Flip Education</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/market-analysis">Market Analysis</Link>
                </li>
                <li>
                  <Link href="/financing">Financing Options</Link>
                </li>
                <li>
                  <Link href="/contractors">Contractor Network</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: info@fixflip.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Flip Street</li>
                <li>Suite 100, City, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© 2024 FixFlip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
