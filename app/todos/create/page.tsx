"use client"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function TodoCreate() {
    // declaration ta3 les variable par default
    const title = useRef<HTMLInputElement | null>(null)
    const [isCompleted, setIsCompleted] = useState(false)

    // fct li ktwjh 4adi imchi router afther chi action
    const router = useRouter()

    // fct li 4t 5dm b data
    const callback = async (e: React.FormEvent<HTMLFormElement>) => {

        // bach mankhliwch page dir refresh
        e.preventDefault()

        // nrecuperi value mn input (title)
        const titleValue = title.current?.value || ""

        // n3ayto l server b POST bach nsifto data
        const res = await fetch("http://localhost:3001/todos", {
            method: "POST",

            // bach server i3raf bli data JSON
            headers: {
                "Content-Type": "application/json",
            },

            // data li ghadi tsift (title + completed)
            body: JSON.stringify({
                id: Date.now().toString(),
                title: titleValue,
                completed: isCompleted,
            }),
        })

        // ila kolchi mzyan (res.ok) imchi l page /todos
        if (res.ok) {
            window.location.replace("/todos")
            // router.push("/todos")
        }
    }

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

                    {/* input li ghadi n9raw meno value b ref */}
                    <Input
                        ref={title}
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Enter your title"
                        className="w-full"
                        autoFocus
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="completed" className="text-sm font-medium">
                        Completed
                    </label>

                    {/* switch li mrbota b state (true / false) */}
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
                    Create
                </button>
            </form>
        </div>
    )
}