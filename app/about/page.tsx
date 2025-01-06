'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import {
  fadeIn,
  staggerContainer,
  slideIn,
  buttonHover,
  cardHover,
  heroText,
} from '../components/animations';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <Image
          src="/images/2.jpg"
          alt="About Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative max-w-7xl mx-auto px-6"
        >
          <motion.h1 variants={heroText} className="text-5xl font-bold mb-6">
            About FixFlip
          </motion.h1>
          <motion.p
            variants={heroText}
            className="text-xl text-gray-300 max-w-2xl"
          >
            We&apos;re on a mission to make property flipping accessible,
            profitable, and transformative for communities across the nation.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '350+', label: 'Successful Flips' },
              { number: '35%', label: 'Average ROI' },
              { number: '1200+', label: 'Happy Investors' },
              { number: '50+', label: 'Cities Served' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={slideIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Story
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="space-y-6">
              <p className="text-lg text-gray-600">
                Founded in 2020, FixFlip emerged from a simple observation: the
                real estate flipping market needed more transparency, education,
                and community support.
              </p>
              <p className="text-lg text-gray-600">
                Our team of real estate professionals, market analysts, and
                experienced flippers came together to create a platform that
                would make property flipping more accessible while maintaining
                high standards of quality and profitability.
              </p>
              <p className="text-lg text-gray-600">
                Today, we&apos;re proud to have helped hundreds of investors
                achieve their financial goals while contributing to the
                revitalization of communities across the country.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="relative h-[400px]">
              <Image
                src="/images/3.jpg"
                alt="Our Story"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={slideIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description:
                  'We believe in complete honesty about property conditions, costs, and potential returns.',
                icon: '🔍',
              },
              {
                title: 'Education',
                description:
                  'We empower our community with knowledge and tools to make informed investment decisions.',
                icon: '📚',
              },
              {
                title: 'Community',
                description:
                  'We focus on transformations that benefit both investors and neighborhoods.',
                icon: '🏘️',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={{
                  ...fadeIn,
                  hover: cardHover.hover,
                }}
                whileHover="hover"
                className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={slideIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Founder & CEO',
                image: '/images/4.jpg',
              },
              {
                name: 'Sarah Johnson',
                role: 'Head of Acquisitions',
                image: '/images/5.jpg',
              },
              {
                name: 'Michael Brown',
                role: 'Market Analyst',
                image: '/images/6.jpg',
              },
              {
                name: 'Emily Davis',
                role: 'Investment Advisor',
                image: '/images/7.jpg',
              },
            ].map((member, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2 variants={heroText} className="text-4xl font-bold mb-6">
            Join Our Community
          </motion.h2>
          <motion.p
            variants={heroText}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Start your property flipping journey with a team that cares about
            your success.
          </motion.p>
          <motion.button
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            <Link href="/properties">
              <button>View Properties</button>
            </Link>
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
