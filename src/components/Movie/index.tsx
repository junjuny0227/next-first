"use client";

import * as S from "./style";

import { useRouter } from "next/navigation";

interface MovieProps {
  id: number;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: MovieProps) => {
  const router = useRouter();

  return (
    <S.MovieContainer>
      <S.StyledImg
        src={poster_path}
        alt={title}
        onClick={() => router.push(`/movie/${id}`)}
      />
      <S.StyledLink href={`/movie/${id}`}>{title}</S.StyledLink>
    </S.MovieContainer>
  );
};

export default Movie;
