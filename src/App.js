import logo from "./logo.svg";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState();

  return (
    <main>
      <h1>Much Todo</h1>
      <Header setLoading={setLoading} setItemList={setItemList} />
      <TodoList
        loading={loading}
        itemList={itemList}
        setItemList={setItemList}
        setLoading={setLoading}
      />
    </main>
  );
}

export default App;
