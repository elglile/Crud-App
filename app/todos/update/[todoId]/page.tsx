"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TodoUpdate() {
  // nجيب id mn url
  const params = useParams();
  const todoId = params.todoId as string;

  // state dyal form
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  // router
  const router = useRouter();

  // nجيب data l9dima mn API
useEffect(() => {
  const getTodo = async () => {
    const res = await fetch(`http://localhost:3001/todos/${todoId}`);
    const data = await res.json();

    setTitle(data.title || "");
    setIsCompleted(data.completed ?? false);
  };

  getTodo();
}, [todoId]);

  // submit dyal update
  const callback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title,
    completed: isCompleted,
  }),
});

    if (res.ok) {
      router.push("/todos");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black p-6 font-sans">
      <form
        onSubmit={callback}
        className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-xl shadow space-y-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            title
          </label>

          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Enter your title"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="completed" className="text-sm font-medium">
            Completed
          </label>

          <Switch
            id="completed"
            checked={isCompleted}
            onCheckedChange={setIsCompleted}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-md hover:opacity-90 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}