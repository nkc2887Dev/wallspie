'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAdmin, user, logout, isLoading } = useAuth();

  useEffect(() => {
    // Only redirect if loading is complete and user is not an admin
    if (!isLoading && !isAdmin) {
      // Store the current path to redirect back after login
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
      }
      router.push('/login');
    }
  }, [isAdmin, isLoading, router]);

  // Show loading state while authentication is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render admin content if not an admin
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-2xl font-bold">
                WallsPie Admin
              </Link>
              <nav className="ml-10 flex space-x-4">
                <Link
                  href="/admin"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/wallpapers"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Wallpapers
                </Link>
                <Link
                  href="/admin/categories"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Categories
                </Link>
                <Link
                  href="/admin/analytics"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm hover:text-gray-300 transition">
                View Site
              </Link>
              <span className="text-sm text-gray-400">{user?.name}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
