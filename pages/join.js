import Layout from '../components/Layout';
import { useState } from 'react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setModalType('success');
        setModalMessage('🎉 Thank you! Your inquiry has been sent successfully. We will contact you within 24-48 hours.');
        setShowModal(true);
        setFormData({ name: '', email: '', phone: '', country: '', message: '' });
      } else {
        setModalType('error');
        setModalMessage(`❌ ${data.message || 'Something went wrong. Please try again or contact us directly.'}`);
        setShowModal(true);
      }
    } catch (error) {
      setModalType('error');
      setModalMessage('❌ Network error. Please check your internet connection and try again.');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Join DnG" description="Become a DnG distributor and join the 1 Account, 1 System network.">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join DnG</h1>
          <p className="text-lg md:text-xl opacity-90">
            Become part of the <strong>1 Account, 1 System</strong> network spanning 200 countries.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-gray-600 mb-8 text-center">
            Fill in your details and our team will reach out to you.
          </p>

          {!showModal && status.message && (
            <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                placeholder="Enter your country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                placeholder="Tell us why you're interested in joining DnG..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
            >
              {isLoading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Our team will review your inquiry within 24-48 hours.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                You'll receive information about the DnG opportunity.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Start your journey with 1 Account, 1 System, 200 Countries.
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
            <h3 className="font-bold text-gray-900 mb-3">📞 Or Contact Us Directly</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+26771292128" className="text-green-700 hover:text-green-800 font-medium">
                  +267 71 292 128
                </a>{' '}
                /{' '}
                <a href="tel:+26772521844" className="text-green-700 hover:text-green-800 font-medium">
                  +267 72 521 844
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:dngworldbotswana@gmail.com" className="text-green-700 hover:text-green-800 font-medium break-all">
                  dngworldbotswana@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center transform transition-all">
            <div className="text-6xl mb-4">
              {modalType === 'success' ? '🎉' : '⚠️'}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {modalType === 'success' ? 'Success!' : 'Oops!'}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-sm hover:shadow"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Layout>
  );
}