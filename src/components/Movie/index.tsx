"use client";

import * as S from "./style";

interface MovieProps {
  id: number;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: MovieProps) => {
  return (
    <S.MovieContainer>
      <S.StyledImage src={poster_path} alt={title} width={400} height={500} />
      <S.StyledLink href={`/movie/${id}`}>{title}</S.StyledLink>
    </S.MovieContainer>
  );
};

export default Movie;
