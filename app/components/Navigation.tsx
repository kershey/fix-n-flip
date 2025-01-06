'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItemHover, buttonHover } from './animations';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b relative"
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
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

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? 'border-t' : ''
          }`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/properties"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/success-stories"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/properties"
              className="block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Flipping
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
