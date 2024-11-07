/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
 
import {
  Select as SelectUi,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ISelect {
  lista: string[],
  onChange: any,
  label: string
}
 
export function Select({
  lista = [],
  onChange,
  label = ''
}: ISelect) {
  return (<div className="flex flex-col">
    {label &&
      <div>
        {label}
      </div>
    }
    <SelectUi onValueChange={(value)=>onChange(value, label)} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Please select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {lista.map((item, index)=>(
            <SelectItem key={index} value={item}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectUi>
  </div>
  )
}