import { getAllProductSlugs, getProductBySlug } from '../../lib/api';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProductPage({ product }) {
  if (!product) return (
    <Layout title="Product Not Found">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/products" className="text-green-700 font-medium hover:underline">
          ← Back to Products
        </Link>
      </div>
    </Layout>
  );

  return (
    <Layout title={product.name} description={product.tagline}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-green-700 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-green-700 transition">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Column - BIGGER */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden flex items-center justify-center p-6 min-h-[400px] relative border border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[320px] object-contain drop-shadow-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="text-gray-400 text-center">
                    <div class="text-6xl mb-4">📦</div>
                    <p class="font-medium text-gray-600">${product.name}</p>
                    <p class="text-sm text-gray-400">Image coming soon</p>
                  </div>
                `;
              }}
            />
          </div>

          {/* Content Column */}
          <div>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              DnG Health
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl text-green-700 font-medium mb-4">{product.tagline}</p>

            {product.oracValue && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r">
                <p className="text-amber-800 font-bold">
                  ⚡ {product.oracValue} ORAC – Highest Antioxidant Value in the Market
                </p>
              </div>
            )}

            <div className="prose prose-green max-w-none mb-6">
              <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
            </div>

            {product.scientificHighlight && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm italic">🔬 {product.scientificHighlight}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h2>
              <ul className="grid grid-cols-1 gap-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 font-bold text-lg leading-none mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl mb-6">
              <h3 className="font-semibold text-gray-900 mb-1">📋 How to Use</h3>
              <p className="text-gray-600">{product.usage}</p>
            </div>

            {/* Lead Generation CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-gray-900">
                Become a DnG Distributor
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Join the 1 Account, 1 System network spanning 200 countries.
              </p>
              <Link
                href="/join"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 transform hover:scale-105"
              >
                I'm Interested →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllProductSlugs();
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  return {
    props: {
      product,
    },
  };
}