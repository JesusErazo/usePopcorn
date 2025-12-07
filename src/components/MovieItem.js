import MovieItemStats from "./MovieItemStats";
export default function MovieItem({
  posterUrl,
  title,
  releaseYear,
  userRating,
  imdbRating,
  runtime,
}) {
  return (
    <li className="movie-item">
      <img className="poster" src={posterUrl} alt="poster of the movie" />
      <div className="movie-item-desc">
        <span className="movie-title">{title}</span>
        {userRating !== undefined &&
        imdbRating !== undefined &&
        runtime !== undefined ? (
          <MovieItemStats
            userRating={userRating}
            imdbRating={imdbRating}
            runtime={runtime}
          />
        ) : (
          <p>📆 {releaseYear}</p>
        )}
      </div>
    </li>
  );
}
