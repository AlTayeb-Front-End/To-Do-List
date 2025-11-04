import { useState } from "react";
import "../../style/to-do/search.css";
import { RiHeartAdd2Line } from "react-icons/ri";
export const AddItem = ({ list, setList }: any) => {
  const [item, setItem] = useState("");
  return (
    <article>
      <input
        type="text"
        className="search"
        id="item"
        placeholder="Enter List Item"
        value={item}
        onChange={(event) => {
          setItem(event?.target.value);
        }}
      />
      <button
        style={{ fontSize: "18px", color: "lawngreen" }}
        onClick={() => {
          setList([
            ...list,
            {
              id: list.length + 1,
              content: item,
            },
          ]);
        }}
      >
        <RiHeartAdd2Line />
      </button>
      <hr />
    </article>
  );
};
