export default function Contact() {
  return (
    
      <div className="max-w-4xl mx-auto bg-amber-200 rounded-lg shadow-lg p-8 text-gray-800">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-red-600">📞 Contact Us / Place Your Order</h1>

        <p className="text-lg mb-4 text-black font-serif">
          Have questions or want to place an order? We are here to help! You can reach out to us directly via WhatsApp, phone, or Facebook. Just send us the following details:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 text-lg font-serif text-black">
          <li>🛍️ What you want to order (e.g. kitchen items,clothes,shoes,kids items...)</li>
          <li>🏠 Your full shipping address</li>
          <li>📱 Your contact number</li>
        </ul>

        {/* 🔔 New Line for Price/Product Info */}
        <p className="text-md font-semibold text-red-700 mb-6 text-center">
          📌 For price and product details, feel free to message us on WhatsApp or Facebook!
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923323319007"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-red-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 mb-4"
        >
          👉 Chat with us on WhatsApp
        </a>
        

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/share/18dvp1Z1iF/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 mb-8"
        >
          👉 Message us on Facebook (Saba Zain)
        </a>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-900">🕒 Customer Support Hours:</h3>
          <p className="text-lg font-serif text-black">
            We accept orders <span className="font-semibold text-indigo-800">24/7</span> — anytime, any day!
          </p>
          <p className="text-lg font-serif text-black mt-2">
            We strive to respond as quickly as possible and ensure your shopping experience is smooth and enjoyable!
          </p>
        </div>

        <p className="mt-8 italic text-md font-bold text-green-900 font-serif text-center">
          Note: For faster service, please send your order details clearly. Thank you for shopping with SZ Online Store! 💙
        </p>
      </div>
    
  );
}
