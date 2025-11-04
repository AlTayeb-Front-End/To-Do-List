import "../../style/to-do/search.css";
import { RiSearchEyeLine } from "react-icons/ri";
export const Search = () => {
  return (
    <article>
      <input
        type="text"
        className="search"
        placeholder="Enter Text To Search"
      />
      <button style={{ fontSize: "18px" }}>
        <RiSearchEyeLine />
      </button>
      <hr />
    </article>
  );
};
