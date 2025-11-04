import { useState } from "react";
import "../../style/to-do/add.css";
import { RiHeartAdd2Line } from "react-icons/ri";
export const AddItem = ({ list, setList }: any) => {
  const [item, setItem] = useState("");

  function addItem() {
    // make sure that input field not impaty
    if (item === "" || item === null || item === undefined) return null;

    setList((prevList: any) => {
      if (prevList.length === 0)
        return [
          {
            id: prevList.length + 1,
            content: item,
          },
        ];
      else if (prevList[0].id !== 0)
        return [
          ...prevList,
          {
            id: list.length + 1,
            content: item,
          },
        ];
      // make default item > first item
      else
        return [
          {
            id: prevList.length,
            content: item,
          },
        ];
    });
    setItem("");
  }

  return (
    <article className="add-container">
      <input
        type="text"
        className="add"
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
          addItem();
        }}
      >
        <RiHeartAdd2Line />
      </button>
    </article>
  );
};
