const ListItem = ({ item, handleItemRemove, UpdateListItem }: any) => {
  return (
    <>
      <li key={item.id + 1}>
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
          <button
            className="update"
            onClick={() => {
              UpdateListItem(item.order);
              // alert("try update");
            }}
          >
            Update
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
