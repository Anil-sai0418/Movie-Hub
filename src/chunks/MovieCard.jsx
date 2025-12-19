
console.log(data)
import { data, Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="block focus:outline-none focus:ring-2 focus:ring-red-500 rounded-2xl"
      aria-label={`View details for ${movie.title}`}
    >
      <div
        className="
          group relative overflow-hidden rounded-2xl
          bg-[#020617]/90 border border-white/5
          shadow-md hover:shadow-2xl
          transition-all duration-300 ease-in-out
        "
      >
        {/* Poster - Added lazy loading and better alt text */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          loading="lazy"
          className="
            w-full
            h-[220px] xs:h-[260px] sm:h-[300px] md:h-[340px]
            object-cover
            transition-transform duration-500 ease-in-out
            group-hover:scale-105 group-focus:scale-105
          "
        />
        {/* Overlay (always semi-visible on mobile, full hover on desktop) */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/95 via-black/50 to-transparent
            opacity-70 xs:opacity-100 sm:opacity-0 
            sm:group-hover:opacity-100 sm:group-focus:opacity-100
            transition-opacity duration-300 ease-in-out
          "
        />
        {/* Info */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            p-2 xs:p-3 sm:p-4
            translate-y-4 xs:translate-y-0 sm:translate-y-6 
            sm:group-hover:translate-y-0 sm:group-focus:translate-y-0
            transition-transform duration-300 ease-in-out
          "
        >
          <h3
            className="
              text-xs xs:text-sm sm:text-base md:text-lg
              font-semibold text-white
              leading-snug line-clamp-2
            "
          >
            {movie.title}
          </h3>

          <div
            className="
              flex items-center justify-between mt-1 sm:mt-2
              opacity-100 xs:opacity-100
              sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100
              transition-opacity duration-300 ease-in-out
            "
          >
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            <span className="text-gray-300 text-xs sm:text-sm">
              {movie.release_date?.split("-")[0]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;