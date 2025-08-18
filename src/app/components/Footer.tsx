export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-second mb-2">SZ Online Store</h2>
          <p className="text-md text-red-600">Your one-stop shop for fashion, household & kids items — since 2019.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg text-second font-semibold mb-2">📞 Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>📱 WhatsApp: <a href="https://wa.me/923323319007" className="text-green-700 hover:underline" target="_blank">+92 332 3319007</a></li>
            <li>📞 Phone: <a href="tel:+923323319007" className="text-green-700 hover:underline">+92 332 3319007</a></li>
            <li>🌐 Facebook: <a href="https://www.facebook.com/share/18dvp1Z1iF/" target="_blank" className="text-blue-700 hover:underline">Saba Zain</a></li>
          </ul>
        </div>

        {/* Quick Links (Optional) */}
        <div>
          <h3 className="text-lg text-red-600 font-semibold mb-2">🔗 Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/ExploreAllProducts" className="hover:underline">Explore All Products</a></li>
            <li><a href="/About" className="hover:underline">About Us</a></li>
            <li><a href="/Contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-white text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SZ Online Store. All rights reserved.
      </div>
    </footer>
  );
}
