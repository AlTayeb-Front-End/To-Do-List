import { useState } from "react";
import "../../style/to-do/form-inputs.css";
import { RiSearchEyeLine } from "react-icons/ri";
export const Search = ({ list, setSearchList, setIsSearch }: any) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch() {
    // check if user searhc by ID || order
    if (Number.isInteger(+searchInput) && +searchInput <= list.length) {
      setIsSearch(true);
      setSearchList(() =>
        list.filter((listItem: any) => listItem.order === +searchInput)
      );
    } else {
      setIsSearch(true);
      setSearchList(() =>
        list.filter((listItem: any) => listItem.content.includes(searchInput))
      );
    }
  }
  return (
    <article className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Enter Text To Search"
        onChange={(event) => {
          event.target.value.length !== 0
            ? setSearchInput(event.target.value)
            : setIsSearch(false);
        }}
      />
      <button style={{ fontSize: "18px" }} onClick={() => handleSearch()}>
        <RiSearchEyeLine />
      </button>
    </article>
  );
};
