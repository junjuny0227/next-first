interface MovieDetailProps {
  params: {
    id: string;
  };
}

const MovieDetail = async ({ params: { id } }: MovieDetailProps) => {
  return <h1>Movie Detail: {id}</h1>;
};

export default MovieDetail;
