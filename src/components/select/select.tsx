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

interface ISelectItem {
  value: string | null,
  label: string
}

interface ISelect {
  lista: ISelectItem[],
  onChange: any,
  label: string,
  value: string,
  placeholder: string
}
 
export function Select({
  lista = [],
  onChange,
  label = '',
  value,
  placeholder
}: ISelect) {
  return (<div className="flex flex-col w-full max-w-[410px]">
    {label &&
      <div>
        {label}
      </div>
    }
    <SelectUi value={value} onValueChange={(value)=>onChange(value === 'undefined' ? null : value, label)} >
      <SelectTrigger className="w-full max-w-[410px]">
        <SelectValue placeholder={placeholder || "Please select"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {lista.map((item, index)=>(
            <SelectItem key={index} value={item.value?.toUpperCase() || 'undefined'}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectUi>
  </div>
  )
}