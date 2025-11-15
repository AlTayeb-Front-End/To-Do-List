import "../../style/to-do/form-inputs.css";
import { RiSearchEyeLine } from "react-icons/ri";
export const Search = () => {
  return (
    <article className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Enter Text To Search"
      />
      <button style={{ fontSize: "18px" }}>
        <RiSearchEyeLine />
      </button>
    </article>
  );
};
