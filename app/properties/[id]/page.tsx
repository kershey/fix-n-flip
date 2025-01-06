import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// This is a mock data function - in a real app, this would fetch from an API
function getPropertyData(id: string) {
  return {
    id,
    title: 'Vintage Charm Revival',
    status: 'High Potential',
    address: '123 Flip Street, City, State',
    details: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      lotSize: '0.25 acres',
      yearBuilt: 1965,
      propertyType: 'Single Family',
    },
    pricing: {
      currentPrice: 180000,
      estimatedRepairCost: 45000,
      afterRepairValue: 280000,
      potentialProfit: 55000,
      estimatedROI: '35%',
    },
    description:
      'This charming vintage property presents an exceptional opportunity for renovation. With its solid foundation and prime location, this home is perfect for a value-adding transformation. The property features original hardwood floors throughout, a spacious layout, and tremendous potential for modern updates.',
    renovationPlan: [
      'Complete kitchen remodel with modern appliances',
      'Bathroom updates with luxury fixtures',
      'New HVAC system installation',
      'Roof replacement',
      'Interior and exterior painting',
      'Landscaping improvements',
    ],
    images: [1, 2, 3, 4].map((num) => `/images/${num}.jpg`),
    neighborhood: {
      schoolRating: '8/10',
      crimeRate: 'Low',
      walkScore: 75,
      medianHomeValue: '$250,000',
      marketTrend: 'Appreciating',
    },
  };
}

// Add proper type for page props
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Update the component signature
export default function PropertyDetails({ params }: Props) {
  const property = getPropertyData(params.id);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/properties" className="text-gray-400 hover:text-white">
              ← Back to Properties
            </Link>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
              <p className="text-xl text-gray-300">{property.address}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Current Price</p>
              <p className="text-3xl font-bold">
                ${property.pricing.currentPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[500px]">
              <Image
                src={property.images[0]}
                alt="Main Property View"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1).map((image, i) => (
                <div key={i} className="relative h-[240px]">
                  <Image
                    src={image}
                    alt={`Property View ${i + 2}`}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Property Overview</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(property.details).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Renovation Plan</h2>
                <ul className="space-y-2">
                  {property.renovationPlan.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Investment Details */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Investment Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500">Purchase Price</p>
                    <p className="text-2xl font-bold">
                      ${property.pricing.currentPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Renovation Cost</p>
                    <p className="text-2xl font-bold">
                      ${property.pricing.estimatedRepairCost.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">After Repair Value</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${property.pricing.afterRepairValue.toLocaleString()}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-gray-500">Potential Profit</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${property.pricing.potentialProfit.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Estimated ROI</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {property.pricing.estimatedROI}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">
                  Neighborhood Analysis
                </h3>
                <div className="space-y-4">
                  {Object.entries(property.neighborhood).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Schedule Viewing
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Download Analysis Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
