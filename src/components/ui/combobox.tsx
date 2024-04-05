"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

interface ComboboxProps<T> {
  position: number
  value: string
  setValue: (name: string, position: number) => void
  list: T[]
}

export function Combobox<T extends { name: string }>({
  setValue,
  value,
  position,
  list
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[286px] justify-between"
        >
          {value || "Escolha um alimento..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[286px] p-0">
        <Command>
          <CommandInput placeholder="Procure um alimento..." />
          <CommandEmpty>Nenhum alimento encontrado.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {list.map((food) => (
                <CommandItem
                  key={food.name}
                  value={food.name}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value ? "" : currentValue,
                      position
                    )
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === food.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {food.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
