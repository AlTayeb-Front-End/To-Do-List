import "../../style/to-do/list.css";
import reorderItems from "../../utils/reOrderItems";
import ListItem from "./ListItem";
import { UpdateItem } from "./UpdateItem";

export const List = ({ list, setList }: any) => {
  function handleItemRemove(id: number, order: number) {
    window.confirm(
      `Are you sure to delete : (${
        list[order - 1].content
      }) in position [${order}]`
    )
      ? setList((prevList: any) => {
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
        })
      : null;
  }

  function updateSingleItem(itemsList: any) {
    // check if there is an item in updating state & if there is no item's ignore impaty array
    return itemsList.filter((item: any) => item.canUpdate === true).length > 0
      ? true
      : false;
  }

  function UpdateListItem(order: number) {
    // update only single item
    if (!updateSingleItem(list)) {
      const updatedItem = list.map((prev: any) =>
        prev.order === order ? { ...prev, canUpdate: true } : prev
      );
      setList(() => {
        return updatedItem;
      });
    }
  }

  function listItems() {
    return (
      <>
        {list.map((item: any) =>
          item.canUpdate === true ? (
            <UpdateItem key={item.id + 1} list={list} setList={setList} />
          ) : (
            <ListItem
              key={item.id}
              item={item}
              handleItemRemove={handleItemRemove}
              UpdateListItem={UpdateListItem}
            />
          )
        )}
      </>
    );
  }
  return (
    <article>
      <ol className="list">
        {/* make sure that list of items not impaty & make sure that the first item not default */}
        {list.length === 0 ? null : list[0].order === 0 ? null : listItems()}
      </ol>
    </article>
  );
};
