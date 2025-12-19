import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MovieCard from "../chunks/MovieCard";
import Nav from "../chunks/Nav";
import React, { useState } from "react";

const Home = () => {
  const { data, isLoading, error } = useTrendingMovies();
  const [search, setSearch] = useState("");

  // Define how many skeleton cards to show (e.g., 10)
  const skeletonArray = Array.from({ length: 10 });

  // Filter movies by search
  const filteredMovies = data?.filter((movie) => {
    if (!search.trim()) return true;
    const title = movie.title || movie.name || "";
    return title.toLowerCase().includes(search.toLowerCase());
  });

  if (error)
    return (
      <div className="text-center mt-20 text-red-400 text-lg">
        <p>Error fetching movies. Please try refreshing.</p>
        <pre className="text-xs text-red-300 mt-2">{error.message || JSON.stringify(error)}</pre>
      </div>
    );

  return (
    <>
      <Nav search={search} onSearch={setSearch} />
      <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-10 bg-gray-900">
        {/* Page Title */}
        <div className="flex justify-center items-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
            Trending Movies
          </h1>
        </div>
        {/* Background Glow - Made more subtle and responsive */}
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-3xl opacity-50 sm:opacity-100"></div>
          {/* Movie Grid */}
          <div className="relative grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {isLoading ? (
              // Render Skeleton Loaders while loading
              skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl bg-[#020617]/90 border border-white/5 shadow-md"
                >
                  {/* Poster Skeleton */}
                  <div className="w-full h-[260px] sm:h-[300px] md:h-[340px] bg-gray-800 animate-pulse" />

                  {/* Info Skeleton */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="h-4 sm:h-5 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-700 rounded w-1/4 animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : filteredMovies?.length > 0 ? (
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-base sm:text-lg py-10">
                No movies found. Try a different search or check trending!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;