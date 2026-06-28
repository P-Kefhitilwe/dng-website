import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Us" description="Learn about DnG Worldwide's mission, vision, and global presence.">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DnG Worldwide</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering health and opportunity across 200 countries since 1981
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-green-700">DNG Worldwide Sdn Bhd</strong>, a subsidiary of{' '}
            <strong className="text-green-700">DNG Group</strong>, was established in{' '}
            <strong>2010</strong>. Our parent company has been a trusted name since{' '}
            <strong>1981</strong> in Malaysia, building a legacy of quality and integrity.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-3">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              With unwavering integrity, we unite DnG members and partners worldwide
              to bring positive change and impact to countless lives.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-3">🌟</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To transform lives through <strong>health</strong> and{' '}
              <strong>greater entrepreneurial opportunity</strong>.
            </p>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🌍 Global Presence</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our products reach <strong>over 40 countries</strong> across the globe.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Malaysia', 'Singapore', 'United States', 'China', 'Middle East', 'Indonesia', 'Philippines', 'South Africa', 'India', 'Mexico'].map((country) => (
              <span key={country} className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium border border-green-100">
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">✅ Quality Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              All products are manufactured in <strong>cGLP, cGMP, and ISO</strong>
              certified facilities, ensuring the highest quality standards.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🔬 Science-Backed</h2>
            <p className="text-gray-700 leading-relaxed">
              Our products are formulated with clinically studied ingredients
              and backed by scientific research from leading institutions worldwide.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-10 border border-green-200 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Our Philosophy</h2>
          <p className="text-xl md:text-2xl font-bold text-green-700">
            "1 Account, 1 System, 200 Countries"
          </p>
          <p className="text-gray-600 mt-2">— connecting health and opportunity across the globe.</p>
        </div>
      </div>
    </Layout>
  );
}