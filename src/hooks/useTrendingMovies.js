import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../api/Movieapi";



export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,

  });
  
};