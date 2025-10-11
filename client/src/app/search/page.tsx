'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { api } from '@/lib/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WallpaperGrid from '@/components/WallpaperGrid';
import { LoadingGrid } from '@/components/Loading';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [wallpapers, setWallpapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery, 1);
    }
  }, [initialQuery]);

  const performSearch = async (searchQuery: string, pageNum: number = 1) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await api.searchWallpapers(searchQuery, pageNum, 12);

      if (pageNum === 1) {
        setWallpapers(response.data || []);
      } else {
        setWallpapers([...wallpapers, ...(response.data || [])]);
      }

      setTotalResults(response.pagination?.total || 0);
      setHasMore((response.pagination?.page || 0) < (response.pagination?.totalPages || 0));
      setPage(pageNum);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query, 1);
      // Update URL without page reload
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(query)}`);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      performSearch(query, page + 1);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Search Section */}
        <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Search Wallpapers</h1>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for wallpapers..."
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Results Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {initialQuery && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {loading && page === 1 ? 'Searching...' : `Search Results for "${initialQuery}"`}
              </h2>
              {!loading && totalResults > 0 && (
                <p className="text-gray-600">
                  Found {totalResults} {totalResults === 1 ? 'wallpaper' : 'wallpapers'}
                </p>
              )}
            </div>
          )}

          {loading && page === 1 ? (
            <LoadingGrid count={12} />
          ) : wallpapers.length > 0 ? (
            <>
              <WallpaperGrid wallpapers={wallpapers} />

              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Loading...' : 'Load More'}
                  </button>
                </div>
              )}
            </>
          ) : initialQuery ? (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600">Try different keywords or browse our categories.</p>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Searching</h3>
              <p className="text-gray-600">Enter keywords above to find your perfect wallpaper.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main className="min-h-screen bg-gray-50">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <LoadingGrid count={12} />
          </div>
        </main>
        <Footer />
      </>
    }>
      <SearchContent />
    </Suspense>
  );
}
