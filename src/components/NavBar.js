import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export default function NavBar() {
  return (
    <nav className="main-header">
      <Logo>🍿usePopcorn</Logo>
      <Search placeholder="Search movies..." htmlName="Search movies" />
      <NumResults num={3} />
    </nav>
  );
}
