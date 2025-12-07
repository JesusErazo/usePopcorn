import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export default function NavBar({ foundMovies }) {
  const moviesAmount = foundMovies?.length ?? 0;
  return (
    <nav className="main-header">
      <Logo>🍿usePopcorn</Logo>
      <Search placeholder="Search movies..." htmlName="Search movies" />
      <NumResults num={moviesAmount} />
    </nav>
  );
}
