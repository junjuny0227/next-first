interface MovieDetailProps {
  params: {
    id: string;
  };
}

const MovieDetail = async ({ params }: MovieDetailProps) => {
  const { id } = await params;

  return <h1>Movie Detail: {id}</h1>;
};

export default MovieDetail;
