import MovieList from "./MovieList";
import MovieStats from "./MovieStats";

export default function Main({ foundMovies, watchedMovies }) {
  return (
    <main className="box-content">
      <MovieList moviesData={foundMovies} addOpenListBtn={true} />
      <div className="box-stats">
        <MovieStats moviesData={watchedMovies} />
      </div>
    </main>
  );
}
