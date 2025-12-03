export default function NavBar() {
  return (
    <nav className="main-header">
      <h3 className="brand">🍿usePopcorn</h3>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        name="Search movies"
      ></input>
      <p className="found-results">
        Found <span>3</span> results
      </p>
    </nav>
  );
}
