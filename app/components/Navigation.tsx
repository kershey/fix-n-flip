'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItemHover, buttonHover } from './animations';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl font-bold text-blue-600">
              FIXFLIP
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.div variants={navItemHover} whileHover="hover">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </motion.div>
            <motion.div variants={navItemHover} whileHover="hover">
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </motion.div>
            <motion.div variants={navItemHover} whileHover="hover">
              <Link
                href="/properties"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Properties
              </Link>
            </motion.div>
            <motion.div variants={navItemHover} whileHover="hover">
              <Link
                href="/success-stories"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Success Stories
              </Link>
            </motion.div>
            <motion.div variants={navItemHover} whileHover="hover">
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/properties"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Start Flipping
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
