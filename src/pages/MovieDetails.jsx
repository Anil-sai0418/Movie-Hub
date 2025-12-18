import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieDetails(id);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-300">{data.overview}</p>
      <p className="mt-2">⭐ {data.vote_average}</p>
    </div>
  );
};

export default MovieDetails;