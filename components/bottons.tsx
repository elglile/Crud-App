import { Button } from "@/components/ui/button"

export function ButtonDefault() {
  return <Button className="bg-green-400 text-white">Add</Button>
}



export function ButtonDestructive() {
  return <Button variant="destructive" className="bg-red-400 text-white">Delete</Button>
}
