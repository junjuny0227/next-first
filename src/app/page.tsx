import axios from "axios";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const { data } = await axios.get(URL);
  return data;
};

const Main = async () => {
  const movies = await getMovies();

  return (
    <div>
      <h1>next first</h1>
      {JSON.stringify(movies)}
    </div>
  );
};

export default Main;
