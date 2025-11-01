'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { USER_TYPE } from '@/constants';

export default function Header() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const isGuest = user?.user_type === USER_TYPE.GUEST;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-600">WallsPie</span>
            </Link>

            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/categories" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Categories
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Search
              </Link>
              {(isAuthenticated && !isGuest) && (
                <Link href="/favorites" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                  Favorites
                </Link>
              )}
              {isAdmin && (
                <Link href="/admin" className="text-purple-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated && !isGuest ? (
              <>
                <span className="text-sm text-gray-600">{user?.name}</span>
                <button
                  onClick={logout}
                  className="text-black bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
                <Link href="/register" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-3 pt-2">
            <Link href="/categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
              Categories
            </Link>
            <Link href="/search" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
              Search
            </Link>
            {isAuthenticated && !isGuest && (
              <Link href="/favorites" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">
                Favorites
              </Link>
            )}
            {isAdmin && (
              <Link href="/admin" className="block px-3 py-2 text-base font-medium text-purple-600 hover:text-blue-800">
                Admin
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
