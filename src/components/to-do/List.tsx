import "../../style/to-do/list.css";

export const List = ({ list, setList }: any) => {
  return (
    <article>
      <ol className="list">
        {list.map((item: any) => (
          <li key={item.id}>
            <div className="list-item">
              <span>{item.id} :</span>
              <p>{item.content}</p>
            </div>
            <div className="action-buttons">
              <button className="remove">Remove</button>
              <button className="update">Update</button>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
};
