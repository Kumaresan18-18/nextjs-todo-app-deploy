"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Next.js", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Deploy on Railway", completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div>
      <AddTodo onAdd={addTodo} />

      <div className="mb-4 text-gray-500 text-sm">
        {completedCount} of {todos.length} tasks completed
      </div>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-lg">
            No todos yet. Add one above! 🚀
          </p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}