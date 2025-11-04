import { Actions } from "../components/to-do/Actions";
import { AddItem } from "../components/to-do/AddItem";
import { List } from "../components/to-do/List";
import { Search } from "../components/to-do/Search";
import "../style/to-do/to-do.css";
import { useState } from "react";
export default function ToDoList() {
  const [list, setList] = useState([
    { id: 1, content: "item1" },
    { id: 2, content: "item2" },
  ]);

  return (
    <section className="to-do-container">
      <h2>To Do List ❤️</h2>
      <section className="to-do">
        <Search list={list} setList={setList} />
        <AddItem list={list} setList={setList} />
        <List list={list} setList={setList} />
        <Actions list={list} setList={setList} />
      </section>
    </section>
  );
}
