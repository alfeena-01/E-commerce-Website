
export default function Subscribe() {
  return (
    <div className="bg-gray-100 py-8">
        <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto mt-8">
  <h2 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h2>
  <p className="text-sm text-gray-600 mb-4">
    Get the latest updates, offers, and new arrivals from LUXBAE.
  </p>
  <form className="flex">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
    />
    <button
      type="submit"
      className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition"
    >
      Subscribe
    </button>
  </form>
</div>
</div>
  );
}