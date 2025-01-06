import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Flip Education Center</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Master the art of house flipping with our comprehensive educational
            resources, expert guidance, and practical tips.
          </p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flipping Fundamentals',
                description:
                  'Learn the basics of house flipping, from property selection to final sale.',
                lessons: 12,
                duration: '6 hours',
                level: 'Beginner',
              },
              {
                title: 'Advanced Renovation Strategies',
                description:
                  'Master advanced renovation techniques and maximize your property&apos;s value.',
                lessons: 15,
                duration: '8 hours',
                level: 'Advanced',
              },
              {
                title: 'Market Analysis Mastery',
                description:
                  'Develop skills to analyze markets and identify profitable opportunities.',
                lessons: 10,
                duration: '5 hours',
                level: 'Intermediate',
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={`/images/${i + 1}.jpg`}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{course.lessons} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Free Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Property Evaluation Checklist',
                description:
                  'A comprehensive checklist for evaluating potential flip properties.',
                icon: '📋',
              },
              {
                title: 'Renovation Cost Calculator',
                description:
                  'Estimate renovation costs accurately with our detailed calculator.',
                icon: '🧮',
              },
              {
                title: 'Contractor Interview Guide',
                description:
                  'Key questions to ask when hiring contractors for your flip.',
                icon: '👷',
              },
              {
                title: 'Market Research Template',
                description:
                  'Template for analyzing local real estate markets and trends.',
                icon: '📊',
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg flex gap-6"
              >
                <div className="text-4xl">{resource.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
                    Download Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Workshops */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Upcoming Expert Workshops
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Finding Hidden Gems in Competitive Markets',
                expert: 'Michael Roberts',
                date: 'Jan 15, 2024',
                time: '2:00 PM EST',
                image: 4,
              },
              {
                title: 'Renovation Budgeting Masterclass',
                expert: 'Sarah Thompson',
                date: 'Jan 22, 2024',
                time: '3:00 PM EST',
                image: 5,
              },
            ].map((workshop, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 h-48 md:h-auto">
                    <Image
                      src={`/images/${workshop.image}.jpg`}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={`/images/${workshop.image + 2}.jpg`}
                        alt={workshop.expert}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold">{workshop.expert}</p>
                        <p className="text-gray-500">Real Estate Expert</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-gray-600 mb-4">
                      <div>📅 {workshop.date}</div>
                      <div>⏰ {workshop.time}</div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to all our premium courses and resources
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Join Premium
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
              View Free Resources
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
