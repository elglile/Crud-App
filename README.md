This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project CRUD NextJs

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

