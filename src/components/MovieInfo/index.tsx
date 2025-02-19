import axios from "axios";

interface MovieInfoProps {
  id: string;
}

const getMovie = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies/${id}`
  );
  return data;
};

const MovieInfo = async ({ id }: MovieInfoProps) => {
  const movie = await getMovie(id);

  return <h6>{JSON.stringify(movie)}</h6>;
};

export default MovieInfo;
