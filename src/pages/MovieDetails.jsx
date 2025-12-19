import { useParams, useNavigate } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import Footer from "../chunks/Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useMovieDetails(id);
  // Log the fetched movie data for debugging
  console.log('Movie Details Data:', data);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-pulse text-xl tracking-widest">Loading movie...</div>
      </div>
    );

  if (!data) return <p className="text-center mt-10 text-red-400">Movie not found.</p>;

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      
      {/* Background Blur Layer */}
      {data.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 pb-24">
        <button
          onClick={() => navigate("/")}
          className="mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-sm font-semibold transition"
        >
          ← Back to Home
        </button>
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          
          {/* Poster */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            {data.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="w-72 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-72 h-[420px] bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          {/* Movie Info */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {data.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold">
                ⭐ {data.vote_average?.toFixed(1)}
              </span>
              <span>{data.release_date}</span>
              {data.runtime && <span>{data.runtime} min</span>}
            </div>

            {data.genres && (
              <div className="flex flex-wrap gap-3">
                {data.genres.map((g) => (
                  <span
                    key={g.id}
                    className="px-4 py-1 bg-white/10 backdrop-blur rounded-full text-xs tracking-wide"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            <p className="max-w-3xl text-gray-200 leading-relaxed text-lg">
              {data.overview}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {data.homepage && (
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 font-semibold transition"
                >
                  Official Website
                </a>
              )}

              <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur font-semibold transition">
                ▶ Watch Trailer
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
            <h3 className="text-xl font-bold">Rating</h3>
            <p className="text-3xl mt-2 text-yellow-400">
              {data.vote_average?.toFixed(1)}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
            <h3 className="text-xl font-bold">Release</h3>
            <p className="text-2xl mt-2">{data.release_date}</p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
            <h3 className="text-xl font-bold">Runtime</h3>
            <p className="text-2xl mt-2">{data.runtime || "N/A"} min</p>
          </div>
        </div>
        
      </div>

      {/* Footer Section */}
      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;