import next from "next/types"
import { JsxElement } from "typescript"

export default function Header()  {
  return (
    <div className="grid grid-cols-6 gap-4 bg-cyan-400">
    <div className="col-start-2 col-span-4">
        <div className="bg-cyan-300 flex justify-center p-3">Header <span className="">Home</span></div>
    </div>
    </div>
  )
}
