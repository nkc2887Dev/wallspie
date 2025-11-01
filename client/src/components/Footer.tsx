'use client';

import { USER_TYPE } from '@/constants';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const { user, isAuthenticated } = useAuth();
    const isGuest = user?.user_type === USER_TYPE.GUEST;
    const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 animate-gradient-x"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section with brand and links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Image
                src="/logo-horizontal.svg"
                alt="WallsPie - Free 4K Wallpapers"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Discover stunning 4K wallpapers and HD backgrounds. Transform your screens with our curated collection of high-quality images for desktop and mobile.
            </p>
            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div> */}
          </div>

          {/* Links Sections */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Browse</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/categories" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="/search?featured=1" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Featured
                  </Link>
                </li>
                <li>
                  <Link href="/search?sort=trending" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Trending
                  </Link>
                </li>
              </ul>
            </div>

            {(isAuthenticated && !isGuest) && (
              <div>
                <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Account</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/favorites" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Info</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-pink-500 transition-colors"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">WallsPie</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {/* <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">RSS Feed</a>
              <span className="text-gray-700">•</span> */}
              <span className="flex items-center">
                Made with
                <svg className="w-4 h-4 mx-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                for wallpaper lovers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
