'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { properties } from '../data/properties';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PriceRange,
  PropertyType,
  BedroomCount,
  SortOption,
} from '../types/property';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PropertiesPage() {
  // Filter states
  const [priceRange, setPriceRange] = useState<PriceRange>('Any');
  const [propertyType, setPropertyType] = useState<PropertyType | 'All Types'>(
    'All Types'
  );
  const [bedrooms, setBedrooms] = useState<BedroomCount>('Any');
  const [sortBy, setSortBy] = useState<SortOption>('Potential ROI');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Filter by price range
    if (priceRange !== 'Any') {
      const [min, max] = priceRange
        .replace(/[^0-9-]/g, '')
        .split('-')
        .map((num) => (num ? parseInt(num) * 1000 : null));

      filtered = filtered.filter((property) => {
        if (priceRange === '$300k+') {
          return property.price >= 300000;
        }
        return (
          property.price >= (min || 0) && property.price <= (max || Infinity)
        );
      });
    }

    // Filter by property type
    if (propertyType !== 'All Types') {
      filtered = filtered.filter((property) => property.type === propertyType);
    }

    // Filter by bedrooms
    if (bedrooms !== 'Any') {
      const minBedrooms = parseInt(bedrooms);
      filtered = filtered.filter(
        (property) => property.bedrooms >= minBedrooms
      );
    }

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Potential ROI':
          return b.estimatedROI - a.estimatedROI;
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Recently Added':
          return (
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [priceRange, propertyType, bedrooms, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

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
            Available Properties
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Browse our curated selection of high-potential properties ready for
            transformation.
          </motion.p>
        </div>
      </motion.section>

      {/* Filters Section */}
      <motion.section
        className="border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-gray-600">Price Range:</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as PriceRange)}
              >
                <option>Any</option>
                <option>$100k - $200k</option>
                <option>$200k - $300k</option>
                <option>$300k+</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-600">Property Type:</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value as PropertyType | 'All Types')
                }
              >
                <option>All Types</option>
                <option>Single Family</option>
                <option>Multi Family</option>
                <option>Townhouse</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-600">Bedrooms:</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value as BedroomCount)}
              >
                <option>Any</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-600">Sort By:</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option>Potential ROI</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Recently Added</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Properties Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + sortBy + priceRange + propertyType + bedrooms}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {paginatedProperties.map((property) => (
                <motion.div
                  key={property.id}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {property.status}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {property.bedrooms} bed • {property.bathrooms} bath •{' '}
                      {property.sqft.toLocaleString()} sqft
                    </p>
                    <div className="flex justify-between items-center mb-4">
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
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5"
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
                        <span>{property.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Estimated ROI: {property.estimatedROI}%</span>
                      </div>
                    </div>
                    <Link
                      href={`/properties/${property.id}`}
                      className="block w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pagination */}
      <motion.section
        className="py-8 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-50'
            }`}
          >
            Previous
          </motion.button>

          {getPageNumbers().map((pageNum) => (
            <motion.button
              key={pageNum}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === pageNum
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-50'
            }`}
          >
            Next
          </motion.button>
        </div>
        <div className="text-center mt-4 text-gray-600">
          Showing {(currentPage - 1) * propertiesPerPage + 1} to{' '}
          {Math.min(currentPage * propertiesPerPage, filteredProperties.length)}{' '}
          of {filteredProperties.length} properties
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gray-900 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Not Finding What You&apos;re Looking For?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let us know your criteria and we&apos;ll notify you when matching
            properties become available.
          </motion.p>
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Set Property Alerts
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
