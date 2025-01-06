'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  fadeIn,
  staggerContainer,
  slideIn,
  scaleIn,
  buttonHover,
  cardHover,
  heroText,
} from '../components/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 text-white py-32">
        <Image
          src="/images/1.jpg"
          alt="Contact Hero Background"
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
            Contact Us
          </motion.h1>
          <motion.p
            variants={heroText}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Have questions about a property or interested in working with us?
            We&apos;re here to help you with your fix and flip journey.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="relative py-12 px-6 bg-gradient-to-b from-gray-900 to-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={{
                ...fadeIn,
                hover: cardHover.hover,
              }}
              whileHover="hover"
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
            </motion.div>

            <motion.div
              variants={{
                ...fadeIn,
                hover: cardHover.hover,
              }}
              whileHover="hover"
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@fixflip.com</p>
              <p className="text-gray-600">support@fixflip.com</p>
            </motion.div>

            <motion.div
              variants={{
                ...fadeIn,
                hover: cardHover.hover,
              }}
              whileHover="hover"
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
              >
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-gray-600">123 Business Avenue</p>
              <p className="text-gray-600">Suite 100</p>
              <p className="text-gray-600">City, State 12345</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
          >
            <motion.h2 variants={slideIn} className="text-3xl font-bold mb-6">
              Send us a Message
            </motion.h2>
            <motion.form
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>General Inquiry</option>
                    <option>Property Question</option>
                    <option>Investment Opportunity</option>
                    <option>Partnership Request</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
