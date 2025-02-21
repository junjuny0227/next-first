"use client";

import * as S from "./style";

import { useEffect, useState } from "react";

import axios from "axios";

interface MovieVideosProps {
  id: string;
}

interface MovieVideos {
  id: string;
  key: string;
  name: string;
}

const MovieVideos = ({ id }: MovieVideosProps) => {
  const [movieVideos, setMovieVideos] = useState<MovieVideos[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      const { data } = await axios.get<MovieVideos[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies/${id}/videos`
      );
      setMovieVideos(data);
    };

    getVideos();
  }, [id]);

  if (!movieVideos) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      {movieVideos.map((video) => (
        <S.Iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></S.Iframe>
      ))}
    </S.Container>
  );
};

export default MovieVideos;
