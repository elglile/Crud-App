This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project CRUD NextJs
https://www.youtube.com/watch?v=7WQqhW_Wt1o
00:00 Introduction & json server install & ui design
04:23 Getting and displaying todos
06:18 Delete todo
11:00 Create todo
23:12 Add Dialog to confirm todo delete
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## to run the server 
npx json-server --watch db.json --port 3001

## DELETE FCT
    bach kn 9ad delete kndir folder ta3 delete fih folder ta3 sug [] li 4adi ib9a iji l id mn loraha page.tsx li 4tkon fih fct ta3 delet 
    3ayt 3la param li 4ayjib l id, stocke l id f wa7d variable m3a aweit bach itsena l id  
    const { todoId } = await params;
     and aficher l id
    jib fct ta3 fetch li 4adi dir DELETE mais 4a b id o delete 4at7at ka metode
    
    mn loraha if ta3 redirect la page after delete t5dm sinon 4adi imchi l retern ta3 message+ id

    نعم، الـ résumé ديالك **قريب بزاف للصحيح**، غير نرتبوه ونصححو شوية التفاصيل باش يكون واضح ومضبوط 👇


## ✅ DELETE Function – Résumé واضح ومرتب

### 1 Structure
app/todos/delete/[todoId]/page.tsx

* `[todoId]` → كيجبد **id** من الرابط



### 2 جلب الـ id
```ts
const { todoId } = await params;
```

* خاص **await** حيث `params` async
* كنحصلو على `todoId` صحيح


### 3 إرسال طلب الحذف

```ts
const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
  method: "DELETE",
  cache: "no-store",
});
```
* كنستعملو **DELETE**
* مع **id**

### 4 النتيجة

#### ✔ إذا نجح
```ts
redirect("/todos");
```
* كيرجع لصفحة todos
#### ❌ إذا فشل
```ts
return <div>Failed to delete todo {todoId}</div>;
```
* كيبان message + id


## 🔑 الخلاصة

* route فيها `[todoId]`
* كنستخرجو id بـ `await params`
* كنستعملو `fetch` مع `"DELETE"`
* ✔ نجاح → redirect
* ❌ فشل → message


## 💡 version أفضل (clean)
```ts
if (!res.ok) {
  throw new Error(`Failed to delete todo ${todoId}`);
}
redirect("/todos");
```

function delete
```ts
import { redirect } from "next/navigation"; // كنستوردو redirect باش من بعد نرجعو لصفحة /todos

// هادي Server Action ديال delete
// formData كتجي من الفورم ملي المستخدم كيكليك على Delete
async function deleteTodo(formData: FormData) {
  "use server"; // هاد السطر كيقول ل Next.js بلي هاد function خاصها تخدم فالسيرفر

  // كنجيبو id من input hidden اللي داخل الفورم
  // formData.get("id") كترجع القيمة المرتبطة بالاسم "id"
  const id = formData.get("id");

  // كنصيفطو request ل json-server باش نحذفو todo بالـ id
  // method: "DELETE" معناها طلب حذف
  // cache: "no-store" باش كل request يكون جديد وما يستعملش cache
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  // إلا request ما نجحاتش (مثلا 404 أو 500)
  // كنرمو error باش Next.js يعرف بلي كاين مشكل
  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }

  // إلا الحذف نجح
  // كنرجعو المستخدم لصفحة todos
  redirect("/todos");
}
```
## ✅ CREATE Function – Résumé واضح ومرتب

```ts
"use client"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useRef } from "react";


export default  function TodoCreate() {
    // declaration ta3 les variable par default
    const title = useRef("")
    const isCompleted = useRef(false)
    const Router = useRouter()
    // fct li 4t 5dm b data
    const callback = async (e) =>{
        e.preventDefault()
        // recupe data 
        const titleValue = title.current.value
        const isCompletedValue = isCompleted.current.value === 'on'
        const res = await fetch(`http://localhost:3001/todos/`, {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({title : titleValue, completed : isCompletedValue})
        
    })
      if (res.ok) {
        Router.push('/todos')
    }

    }
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black p-6 font-sans">
            <form  onSubmit={callback} className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-xl shadow space-y-6">
                
                {/* Email */}
                <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium">
                    title
                </label>
                <Input
                    ref={title}
                    id={"title"}
                    type="text"
                    name={"title"}
                    placeholder="Enter your title"
                    className="w-full"
                    autoFocus
                />
                </div>

                {/* Switch */}
                <div className="flex items-center justify-between">
                <label htmlFor="completed" className="text-sm font-medium">
                    Completed
                </label>
                <Switch ref={isCompleted} id="completed" />
                </div>

                {/* Button */}
                <button
                type="submit"
                // call ta3 l fcy f la button
                // onClick={callback}
                className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-md hover:opacity-90 transition"
                >
                Create
                </button>

            </form>
            </div>
        </>
    );
}

