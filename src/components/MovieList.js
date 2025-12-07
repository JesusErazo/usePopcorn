import MovieItem from "./MovieItem";
import { useState } from "react";

export default function MovieList({ moviesData, addOpenListBtn }) {
  const [openList, setOpenList] = useState(true);

  return (
    <ul className="movie-list">
      {openList &&
        moviesData.map((item) => (
          <MovieItem
            key={item.imdbID}
            posterUrl={item.Poster}
            title={item.Title}
            releaseYear={item.Year}
            userRating={item.userRating}
            imdbRating={item.imdbRating}
            runtime={item.runtime}
          />
        ))}
      {addOpenListBtn && (
        <button className="btn-list" onClick={() => setOpenList(!openList)}>
          {openList ? <>&minus;</> : <>&#43;</>}
        </button>
      )}
    </ul>
  );
}
