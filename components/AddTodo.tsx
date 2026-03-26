"use client";

import { useState } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg 
                   focus:outline-none focus:border-blue-500 text-gray-800
                   text-lg"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                   hover:bg-blue-700 transition-colors font-semibold
                   text-lg cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}