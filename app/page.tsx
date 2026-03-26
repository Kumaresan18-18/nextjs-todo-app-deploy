import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 Todo App
          </h1>
          <p className="text-gray-500">
            Built with Next.js & Deployed on Railway
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <TodoList />
        </div>
      </div>
    </main>
  );
}