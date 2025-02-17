import { MovieInfo, MovieVideos } from "@/components";
import { Suspense } from "react";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

const MovieDetail = async ({ params }: MovieDetailProps) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h2>Loading movie info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie video...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
