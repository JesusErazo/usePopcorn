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
        {imdbRating !== undefined &&
        userRating !== undefined &&
        runtime !== undefined ? (
          <div className="movie-stats-details">
            <span>⭐ {userRating}</span>
            <span>🌟 {imdbRating}</span>
            <span>⌛ {runtime} min</span>
          </div>
        ) : (
          <p>📆 {releaseYear}</p>
        )}
      </div>
    </li>
  );
}
