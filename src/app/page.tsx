"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get(
          "https://nomad-movies.nomadcoders.workers.dev/movies"
        );
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, []);

  return (
    <div>
      <h1>next first</h1>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
  );
};

export default Main;
