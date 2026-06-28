import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title, description }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const siteTitle = title ? `${title} | DnG Health` : 'DnG Health – 1 Account, 1 System, 200 Countries';
  const siteDescription = description || 'Premium health supplements and wellness products. Join the global DnG network.';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#15803d" />
      </Head>

      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-800 hover:text-green-700 transition-colors duration-200">
            DnG<span className="text-green-600"> Health</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors duration-200">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors duration-200">About</Link>
            <Link href="/join" className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition-colors duration-200 shadow-sm hover:shadow">
              Join Now
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-green-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href="/join"
                className="bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-800 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">DnG Worldwide</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                1 Account, 1 System, 200 Countries.<br />
                A people-helping business since 1981.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="text-sm space-y-2.5">
                <li><Link href="/products/dregen" className="text-gray-400 hover:text-green-400 transition-colors">D'Regen</Link></li>
                <li><Link href="/products/djeune" className="text-gray-400 hover:text-green-400 transition-colors">D'Jeune</Link></li>
                <li><Link href="/products/ibright" className="text-gray-400 hover:text-green-400 transition-colors">I-Bright</Link></li>
                <li><Link href="/products/cordyceps" className="text-gray-400 hover:text-green-400 transition-colors">Cordyceps</Link></li>
                <li><Link href="/products/spirulina" className="text-gray-400 hover:text-green-400 transition-colors">Spirulina</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="text-sm space-y-2.5">
                <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link href="/join" className="text-gray-400 hover:text-green-400 transition-colors">Become a Distributor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="text-sm space-y-2.5">
                <li className="text-gray-400">
                  <a href="tel:+26771292128" className="hover:text-green-400 transition-colors">+267 71 292 128</a>
                </li>
                <li className="text-gray-400">
                  <a href="tel:+26772521844" className="hover:text-green-400 transition-colors">+267 72 521 844</a>
                </li>
                <li className="text-gray-400 break-all">
                  <a href="mailto:dngworldbotswana@gmail.com" className="hover:text-green-400 transition-colors">
                    dngworldbotswana@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} DnG Worldwide. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Add the animation keyframes globally */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}