import { BASE_URL } from "@/app/page";
import axios from "axios";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

const getMovie = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/movies/${id}`);
  return data;
};

const getVideos = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/movies/${id}/videos`);
  return data;
};

const MovieDetail = async ({ params }: MovieDetailProps) => {
  const { id } = await params;
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
};

export default MovieDetail;
