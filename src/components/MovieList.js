import MovieItem from "./MovieItem";
export default function MovieList({ moviesData }) {
  return (
    <ul className="movie-list">
      {moviesData.map((item) => (
        <MovieItem
          key={item.imdbID}
          posterUrl={item.Poster}
          title={item.Title}
          releaseYear={item.Year}
        />
      ))}
    </ul>
  );
}
