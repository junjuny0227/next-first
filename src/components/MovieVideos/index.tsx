import axios from "axios";

interface MovieVideosProps {
  id: string;
}

const getVideos = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies/${id}/videos`
  );
  return data;
};

const MovieVideos = async ({ id }: MovieVideosProps) => {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
