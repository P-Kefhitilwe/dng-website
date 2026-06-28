import Layout from '../components/Layout';
import Link from 'next/link';
import { getAllProducts } from '../lib/api';

export default function Home({ products }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout
      title="Home"
      description="Transform your health from the inside out. Clinically formulated at the cellular level."
    >
      {/* Hero Section - Improved */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            🌍 1 Account, 1 System, 200 Countries
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Health That Starts at the Cell.<br />
            <span className="text-green-200">Results You Can Feel.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Transform your health from the inside out. Clinically formulated at the cellular level.
            Detox. Repair. Protect. Reclaim your vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-green-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Products
            </Link>
            <Link
              href="/join"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-800 transition duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar - NEW */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-gray-600">
            <span className="flex items-center gap-2">✅ 40+ Countries</span>
            <span className="flex items-center gap-2">✅ cGMP Certified</span>
            <span className="flex items-center gap-2">✅ Since 1981</span>
            <span className="flex items-center gap-2">✅ 20+ Patented Formulas</span>
            <span className="flex items-center gap-2">✅ 100,000+ Customers</span>
          </div>
        </div>
      </section>

      {/* Why DnG Section - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-green-700">DnG</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Science-Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Formulated with clinically studied ingredients from leading research institutions worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
              <h3 className="font-bold text-gray-900 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pure, natural, and non-GMO ingredients sourced from the finest growers around the world.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💊</div>
              <h3 className="font-bold text-gray-900 mb-2">Cell-Level Action</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our formulas work at the cellular level for deep, lasting results you can feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/products" className="text-green-700 font-medium hover:underline hidden sm:inline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="text-gray-400 text-center">
                            <div class="text-4xl mb-1">📦</div>
                            <span class="text-xs">${product.name}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/products" className="text-green-700 font-medium hover:underline">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            With unwavering integrity, we unite DnG members and partners worldwide
            to bring positive change to countless lives through health and greater
            entrepreneurial opportunity.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Reach out to our team for product inquiries or distributor opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📞</span>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                </div>
                <a href="tel:+26771292128" className="block text-green-700 hover:text-green-800 font-medium">
                  +267 71 292 128
                </a>
                <a href="tel:+26772521844" className="block text-green-700 hover:text-green-800 font-medium">
                  +267 72 521 844
                </a>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✉️</span>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                </div>
                <a href="mailto:dngworldbotswana@gmail.com" className="text-blue-700 hover:text-blue-800 font-medium break-all">
                  dngworldbotswana@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/join"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-200"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = getAllProducts();
  return {
    props: {
      products,
    },
  };
}