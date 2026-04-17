import { redirect } from "next/navigation";


export default async function TodoDelete({params}) {
    // const todoId = params.todoId  // that err 7itach 5asso await bach itssena l id
    const { todoId } = await params;

    const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
        cache: "no-store",
        method: "DELETE"
    })
    // const todo = await res.json();
    if(res.ok){
        redirect('/todos?deletedTodo='+ todoId)
    }
    return (<>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6 space-y-10">
            Failed to delete todo {todoId}
        </div></>
    );
}






// import DeleteButton from "@/components/DeleteButton";
// import { redirect } from "next/navigation";

// async function deleteTodo(formData: FormData) {
//   "use server";

//   const id = formData.get("id");

//   const res = await fetch(`http://localhost:3001/todos/${id}`, {
//     method: "DELETE",
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to delete todo");
//   }

//   redirect("/todos");
// }

// export default async function TodoDelete({
//   params,
// }: {
//   params: Promise<{ todoId: string }>;
// }) {
//   const { todoId } = await params;

//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black p-6 space-y-10">
//       <h1 className="text-xl font-semibold">Delete Todo {todoId}</h1>

//       <form action={deleteTodo}>
//         <input type="hidden" name="id" value={todoId} />
//         <DeleteButton />
//       </form>
//     </div>
//   );
// }










// export default async function TodoDelete({
//   params,
// }: {
//   params: Promise<{ todoId: string }>;
// })  {
//   const { todoId } = await params;

//   const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
//     method: "DELETE",
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to delete todo with id: ${todoId}`);
//   }

//   redirect("/todos");
// }




// async function deleteTodo(formData: FormData) {
//   "use server";

//   const id = formData.get("id");

//   const res = await fetch(`http://localhost:3001/todos/${id}`, {
//     method: "DELETE",
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to delete todo");
//   }

//   redirect("/todos");
// }

// export default async function TodoDelete({ params }) {
//   const { todoId } = await params;

//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6 space-y-10">
//       <h1>Delete Todo {todoId}</h1>

//       <form action={deleteTodo}>
//         <input type="hidden" name="id" value={todoId} />
//         <button className="bg-red-500 text-white px-4 py-2 rounded">
//           Confirm Delete
//         </button>
//       </form>
//     </div>
//   );
// }
