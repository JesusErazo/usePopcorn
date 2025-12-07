import { useState } from "react";
import MovieList from "./MovieList";
export default function MovieStats({ moviesData }) {
  const [openStats, setOpenStats] = useState(true);
  const moviesAmount = moviesData?.length ?? 0;
  const avgUserRating = average(moviesData.map((movie) => movie.userRating));
  const avgImdbRating = average(moviesData.map((movie) => movie.imdbRating));
  const avgRuntime = average(moviesData.map((movie) => movie.runtime));

  function average(valuesList) {
    if (!valuesList) return;

    const sumValues = valuesList.reduce((acc, item) => acc + item, 0);
    return sumValues / moviesAmount;
  }

  return (
    <div className="stats-content">
      <button className="btn-stats" onClick={() => setOpenStats(!openStats)}>
        {openStats ? <>&minus;</> : <>&#43;</>}
      </button>
      {openStats && (
        <>
          <div className="movie-stats">
            <p className="stats-title">movies you watched</p>
            <div className="stats-detail">
              <span>#️⃣ {moviesAmount} movies</span>
              <span>⭐ {avgUserRating}</span>
              <span>🌟 {avgImdbRating}</span>
              <span>⌛ {avgRuntime} min</span>
            </div>
          </div>

          <MovieList moviesData={moviesData} addOpenListBtn={false} />
        </>
      )}
    </div>
  );
}
