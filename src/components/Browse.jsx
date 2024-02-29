import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constant";
import BrowseHeader from "./BrowseHeader";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <section>
      <BrowseHeader />
    </section>
  );
};

export default Browse;
