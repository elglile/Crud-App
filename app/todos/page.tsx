import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const users = [
    {
        id: 1,
        name: "Neil Sims",
        email: "neil.sims@flowbite.com",
        position: "React Developer",
        status: "Online",
        image: "/images/profile-1.jpg",
    },
    {
        id: 2,
        name: "Bonnie Green",
        email: "bonnie@flowbite.com",
        position: "Designer",
        status: "Online",
        image: "/images/profile-2.jpg",
    },
    {
        id: 3,
        name: "Jese Leos",
        email: "jese@flowbite.com",
        position: "Vue JS Developer",
        status: "Online",
        image: "/images/profile-3.jpg",
    },
    {
        id: 4,
        name: "Thomas Lean",
        email: "thames@flowbite.com",
        position: "UI/UX Engineer",
        status: "Online",
        image: "/images/profile-4.jpg",
    },
    {
        id: 5,
        name: "Leslie Livingston",
        email: "leslie@flowbite.com",
        position: "SEO Specialist",
        status: "Offline",
        image: "/images/profile-5.jpg",
    },
];

// const todos = [
//     {
//         id: 1,
//         title: "Todo 1",
//         completed: false,
//     },
//     {
//         id: 2,
//         title: "Todo 2",
//         completed: true,
//     }
// ];
export default async function Todos() {
    const res = await fetch("http://localhost:3001/todos", {
        cache: "no-store",
    })
    const todos = await res.json();
    return (<>
        {/* <User/> */}
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6 space-y-10">

            <h1 className="text-2xl font-bold mb-6">Todos</h1>

            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border-2 border-gray-300 rounded-lg border-default w-full max-w-6xl">



                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-medium border-b-2 border-gray-200 rounded-full">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                title
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                completed
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.map((todo) => (
                            <tr
                                key={todo.id}
                                className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                            >


                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-heading whitespace-nowrap"
                                >
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{todo.title}</div>
                                    </div>
                                </th>



                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div
                                            className={`h-2.5 w-2.5 rounded-full me-2 ${todo.completed === true ? "bg-green-500" : "bg-red-500"
                                                }`}
                                        />
                                        {todo.completed ? "Completed" : "Not Completed"}
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <Button className="bg-green-400 text-white"><Link href={`/todos/update/${todo.id}`}>Update</Link></Button>
                                    
                                    <Button variant="destructive" className="bg-red-400 text-white"><Link href={`/todos/delete/${todo.id}`}>Delete</Link></Button>
                                    {/* <Button asChild variant="destructive"><Link href={`/todos/delete/${todo.id}`}>Delete</Link></Button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div></>
    );
}


function User() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6 space-y-10">
            <h1 className="text-2xl font-bold mb-6">User</h1>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border-2 border-gray-300 rounded-lg border-default w-full max-w-6xl">
                <table className="w-full text-sm text-left rtl:text-right text-body ">
                    <thead className="text-sm text-body bg-neutral-secondary-medium border-b-2 border-gray-200 rounded-full">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                            >


                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-heading whitespace-nowrap"
                                >
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{user.name}</div>
                                        <div className="font-normal text-body">{user.email}</div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">{user.position}</td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div
                                            className={`h-2.5 w-2.5 rounded-full me-2 ${user.status === "Online" ? "bg-green-500" : "bg-red-500"
                                                }`}
                                        />
                                        {user.status}
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <ButtonDefault />
                                    <ButtonDestructive />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}