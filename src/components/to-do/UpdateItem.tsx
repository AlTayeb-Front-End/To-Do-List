import { useState } from "react";
import "../../style/to-do/form-inputs.css";
import { RiHeartAdd2Line } from "react-icons/ri";
export const UpdateItem = ({ list, setList }: any) => {
  const itemToUpdate = list.filter(
    (listItem: any) => listItem.canUpdate === true
  )[0];
  const [item, setItem] = useState(itemToUpdate.content);
  function confirmUpdate() {
    // make sure that input field not impaty
    if (item === "" || item === null || item === undefined) return null;

    setList((prevList: any) => {
      const updatedList = [...prevList];
      // get index of selected item and update it's value in array
      updatedList[
        updatedList.findIndex((listItem) => listItem.id === itemToUpdate.id)
      ] = {
        ...itemToUpdate,
        content: item,
        canUpdate: false,
      };
      return updatedList;
    });
  }

  function cancelUpdate() {
    window.confirm("Are you sure for cancle item update ?")
      ? setList((prevList: any) => {
          const updatedList = [...prevList];
          // get index of selected item and update it's value in array
          updatedList[
            updatedList.findIndex((listItem) => listItem.id === itemToUpdate.id)
          ] = {
            ...itemToUpdate,
            canUpdate: false,
          };
          return updatedList;
        })
      : null;
  }

  return (
    <article className="update-container">
      <input
        type="text"
        className="update"
        id="update-item"
        placeholder="Update Your Data"
        value={item}
        onChange={(event) => {
          setItem(event?.target.value);
        }}
      />
      <div className="update-actions">
        <button
          style={{ fontSize: "18px", color: "green" }}
          onClick={confirmUpdate}
        >
          <RiHeartAdd2Line />
        </button>
        <button
          style={{ fontSize: "18px", color: "red" }}
          onClick={cancelUpdate}
        >
          <RiHeartAdd2Line />
        </button>
      </div>
    </article>
  );
};
