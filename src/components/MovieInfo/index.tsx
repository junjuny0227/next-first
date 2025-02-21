"use client";

import * as S from "./style";

import { useEffect, useState } from "react";

import axios from "axios";

interface MovieInfoProps {
  id: string;
}

interface MovieInfo {
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  homepage: string;
}

const MovieInfo = ({ id }: MovieInfoProps) => {
  const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);

  useEffect(() => {
    const getMovieInfo = async () => {
      const { data } = await axios.get<MovieInfo>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies/${id}`
      );
      setMovieInfo(data);
    };

    getMovieInfo();
  }, [id]);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.StyledImg src={movieInfo.poster_path} alt={movieInfo.title} />
      <S.MovieInfo>
        <S.MovieTitle>{movieInfo.title}</S.MovieTitle>
        <h3>⭐ {movieInfo.vote_average.toFixed(1)}</h3>
        <p>{movieInfo.overview}</p>
        <a href={movieInfo.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </S.MovieInfo>
    </S.Container>
  );
};

export default MovieInfo;
