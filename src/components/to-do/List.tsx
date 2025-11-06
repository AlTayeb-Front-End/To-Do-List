import "../../style/to-do/list.css";
import reorderItems from "../../utils/reOrderItems";

export const List = ({ list, setList }: any) => {
  function handleItemRemove(id: number, order: number) {
    setList((prevList: any) => {
      let orderList = [];
      // use slice to remove first and last item to optimize performance
      // you don't need to loop over all items to remove first or last item
      if (order === 1) {
        orderList = prevList.slice(1);
        return reorderItems(orderList, order);
      } else if (order === prevList.length) {
        return prevList.slice(0, prevList.length - 1);
      } else {
        // first get items after removing a spacifice item from it
        orderList = prevList.filter((listItem: any) => listItem.id !== id);
        //then reorder items
        return reorderItems(orderList, order);
      }
    });
  }

  return (
    <article>
      <ol className="list">
        {/* make sure that list of items not impaty & make sure that the first item not default */}
        {list.length === 0
          ? null
          : list[0].order === 0
          ? null
          : list.map((item: any) => (
              <li key={item.id}>
                <div className="list-item">
                  <span>{item.order} :</span>
                  <p>{item.content}</p>
                </div>
                <div className="action-buttons">
                  <button
                    className="remove"
                    onClick={() => {
                      handleItemRemove(item.id, item.order);
                    }}
                  >
                    Remove
                  </button>
                  <button className="update">Update</button>
                </div>
              </li>
            ))}
      </ol>
    </article>
  );
};
