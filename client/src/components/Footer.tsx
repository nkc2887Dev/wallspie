import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">WellPie</h3>
            <p className="text-gray-400">
              Free 4K wallpapers and HD backgrounds for your desktop and mobile devices.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
              <li><Link href="/search" className="text-gray-400 hover:text-white">Search</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Featured</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Trending</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-white">Sign Up</Link></li>
              <li><Link href="/favorites" className="text-gray-400 hover:text-white">Favorites</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WellPie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
