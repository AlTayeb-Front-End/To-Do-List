import { useState } from "react";
import "../../style/to-do/form-inputs.css";
import { RiHeartAdd2Line } from "react-icons/ri";
import randomNumber from "../../utils/randomNumber";
export const AddItem = ({ list, setList }: any) => {
  const [item, setItem] = useState("");

  function addItem() {
    // make sure that input field not impaty
    if (item === "" || item === null || item === undefined) return null;

    setList((prevList: any) => {
      if (prevList.length === 0)
        return [
          {
            canUpdate: false,
            id: randomNumber(),
            order: prevList.length + 1,
            content: item,
          },
        ];
      else if (prevList[0].order !== 0)
        return [
          ...prevList,
          {
            canUpdate: false,
            id: randomNumber(),
            order: list.length + 1,
            content: item,
          },
        ];
      // make default item > first item
      else
        return [
          {
            canUpdate: false,
            id: randomNumber(),
            order: prevList.length,
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
