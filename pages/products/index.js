import { getAllProducts } from '../../lib/api';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage({ products }) {
  // Get all unique categories
  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products by category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  // Count products per category
  const getCount = (category) => {
    if (category === 'All') return products.length;
    return products.filter(p => p.category === category).length;
  };

  return (
    <Layout title="All Products" description="Browse our full range of health and wellness supplements.">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Scientifically formulated to protect, repair, and rejuvenate your body at the cellular level.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                activeCategory === category
                  ? 'bg-green-700 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category} ({getCount(category)})
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug} className="group">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="text-gray-400 text-center">
                            <div class="text-5xl mb-2">📦</div>
                            <span class="text-sm">${product.name}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                        {product.name}
                      </h2>
                      {product.category && (
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {product.category}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.tagline}</p>
                    {product.oracValue && (
                      <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                        ⚡ ORAC {product.oracValue}
                      </span>
                    )}
                    <div className="mt-4 text-green-700 font-medium text-sm group-hover:underline inline-flex items-center gap-1">
                      Learn More
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
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