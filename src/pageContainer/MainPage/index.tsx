"use client";

import * as S from "./style";

import { useEffect, useState } from "react";

import Movie from "@/components/Movie";
import axios from "axios";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get<Movie[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies`
      );
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <S.Container>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </S.Container>
  );
};

export default MainPage;
