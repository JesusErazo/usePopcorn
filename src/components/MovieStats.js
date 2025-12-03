import { useState } from "react";
import MovieList from "./MovieList";
export default function MovieStats({ moviesData }) {
  const [openStats, setOpenStats] = useState(true);
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
              <span>#️⃣ 2 movies</span>
              <span>⭐ 8.65</span>
              <span>🌟 9.5</span>
              <span>⌛ 132 min</span>
            </div>
          </div>

          <MovieList moviesData={moviesData} addOpenListBtn={false} />
        </>
      )}
    </div>
  );
}
