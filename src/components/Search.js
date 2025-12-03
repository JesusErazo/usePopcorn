export default function Search({ placeholder, htmlName }) {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      name={htmlName}
    ></input>
  );
}
