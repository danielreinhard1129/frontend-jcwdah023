"use client";

import Navbar from "@/components/Navbar";
import TodosBody from "@/components/TodosBody";
import TodosHeader from "@/components/TodosHeader";
import { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([
    { todo: "makan", isDone: false },
    { todo: "minum", isDone: true },
    { todo: "tidur", isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "pending" | "complete">("all");

  const handleDelete = (index: number) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const handleDone = (index: number, value: boolean) => {
    const temp = [...todos];
    temp[index].isDone = value;
    setTodos(temp);
  };

  const handleCreate = () => {
    const temp = [...todos];
    temp.push({ todo: newTodo, isDone: false });
    setTodos(temp);
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "pending") return !t.isDone;
    if (filter === "complete") return t.isDone;
    return true;
  });

  return (
    <div>
      <Navbar />
      <TodosHeader
        filter={filter}
        setFilter={setFilter}
        handleCreate={handleCreate}
        setNewTodo={setNewTodo}
      />
      <TodosBody
        filteredTodos={filteredTodos}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
    </div>
  );
}

export default Home;
