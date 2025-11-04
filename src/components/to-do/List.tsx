import "../../style/to-do/list.css";

export const List = ({ list, setList }: any) => {
  function handleItemRemove(id: number) {
    setList(list.filter((listItem: any) => listItem.id !== id));
  }

  return (
    <article>
      <ol className="list">
        {/* make sure that list of items not impaty & make sure that the first item not default */}
        {list.length === 0
          ? null
          : list[0].id === 0
          ? null
          : list.map((item: any) => (
              <li key={item.id}>
                <div className="list-item">
                  <span>{item.id} :</span>
                  <p>{item.content}</p>
                </div>
                <div className="action-buttons">
                  <button
                    className="remove"
                    onClick={() => {
                      handleItemRemove(item.id);
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
