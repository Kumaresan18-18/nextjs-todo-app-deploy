"use client";

import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white 
                    rounded-lg shadow-sm border border-gray-200 
                    hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 cursor-pointer accent-blue-600"
        />
        <span
          className={`text-lg ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-red-500 hover:bg-red-50 
                   rounded-md transition-colors font-medium cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}