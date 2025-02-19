import Link from "next/link";
import axios from "axios";

export const BASE_URL = "https://nomad-movies.nomadcoders.workers.dev";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const getMovies = async () => {
  const { data } = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return data;
};

const MainPage = async () => {
  const movies = await getMovies();

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default MainPage;
