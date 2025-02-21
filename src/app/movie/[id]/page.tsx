import { MovieDetailPage } from "@/pageContainer";

interface MovieDetailProps {
  params: Promise<{ id: string }>;
}

const MovieDetail = async ({ params }: MovieDetailProps) => {
  const { id } = await params;

  return <MovieDetailPage id={id} />;
};

export default MovieDetail;
