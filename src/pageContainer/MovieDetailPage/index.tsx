import { MovieInfo, MovieVideos } from "@/components";

import { Suspense } from "react";

interface MovieDetailPageProps {
  id: string;
}

const MovieDetailPage = async ({ id }: MovieDetailPageProps) => {
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

export default MovieDetailPage;
