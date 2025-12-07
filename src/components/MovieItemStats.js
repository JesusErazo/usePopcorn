export default function MovieItemStats({ userRating, imdbRating, runtime }) {
  return (
    <div className="movie-stats-details">
      <span>⭐ {userRating}</span>
      <span>🌟 {imdbRating}</span>
      <span>⌛ {runtime} min</span>
    </div>
  );
}
