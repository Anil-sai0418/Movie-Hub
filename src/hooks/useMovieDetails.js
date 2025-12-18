import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/Movieapi";

export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
  });
};