import { useState } from "react";
import "../../style/to-do/add.css";
import { RiHeartAdd2Line } from "react-icons/ri";
export const AddItem = ({ list, setList }: any) => {
  const [item, setItem] = useState("");
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
          // make sure that input field not impaty
          item === "" || item === null || item === undefined
            ? null
            : setList(() => {
                // if first item is default item with id = 0 , content = null here
                // i handle it by adding the first item from user insted of the default item
                // else add the next item correct
                return list[0].id !== 0
                  ? [
                      ...list,
                      {
                        id: list.length + 1,
                        content: item,
                      },
                    ]
                  : // make default item > first item
                    [
                      {
                        id: list.length,
                        content: item,
                      },
                    ];
              });
          setItem("");
        }}
      >
        <RiHeartAdd2Line />
      </button>
    </article>
  );
};
