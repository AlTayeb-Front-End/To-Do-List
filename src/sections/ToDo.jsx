import { Actions } from "../components/to-do/Actions";
import { AddItem } from "../components/to-do/AddItem";
import { List } from "../components/to-do/List";
import { Search } from "../components/to-do/Search";
import { UpdateItem } from "../components/to-do/UpdateItem";
import "../style/to-do/to-do.css";
import { useState } from "react";
export default function ToDoList() {
  const [list, setList] = useState([
    { id: 0, order: 0, content: null, canUpdate: false },
  ]);
  const [searchList, setSearchList] = useState([{}]);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <section className="to-do-container">
      <h2>To Do List ❤️</h2>
      <section className="to-do">
        <section className="add-search-fields">
          <AddItem list={list} setList={setList} />
          <hr />
          <Search
            list={list}
            setSearchList={setSearchList}
            setIsSearch={setIsSearch}
          />
        </section>
        <hr />
        {isSearch ? (
          <List list={searchList} />
        ) : (
          <List list={list} setList={setList} />
        )}
        <Actions list={list} setList={setList} />
      </section>
    </section>
  );
}
