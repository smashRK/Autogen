import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center mb-6">
              Empower Your Learning Journey
            </h1>
            <p className="text-xl text-center mb-8 max-w-2xl">
              Access world-class education from anywhere. Learn at your own pace with our comprehensive online learning platform.
            </p>
            <div className="space-x-4">
              <Link 
                href="/login" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get Started
              </Link>
              <Link 
                href="#features" 
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from industry professionals and experienced educators.",
                icon: "👨‍🏫"
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with 24/7 access to course materials.",
                icon: "⏰"
              },
              {
                title: "Interactive Content",
                description: "Engage with dynamic content and real-world projects.",
                icon: "💡"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their careers through our platform.
          </p>
          <Link 
            href="/login" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Join Now
          </Link>
        </div>
      </section>
    </main>
  )
}
