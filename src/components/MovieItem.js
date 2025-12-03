export default function MovieItem({ posterUrl, title, releaseYear }) {
  return (
    <li className="movie-item">
      <img className="poster" src={posterUrl} alt="poster of the movie" />
      <div className="movie-item-desc">
        <span>{title}</span>
        <p>📆 {releaseYear}</p>
      </div>
    </li>
  );
}
