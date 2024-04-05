import { ChevronDown } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useFoodContext } from "@/context/food-context"

export function Form() {
  const {
    foodData,
    food1,
    food2,
    foodTable,
    updateFood,
    quantity1,
    updateQuantity,
    quantity2,
    calculate,
    clearForm
  } = useFoodContext()

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Atual</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Combobox
            position={1}
            setValue={updateFood}
            value={food1}
            list={foodTable}
          />

          <Input
            placeholder="Quantidade (g)"
            type="tel"
            min={0}
            value={quantity1}
            onChange={(e) => updateQuantity(e.currentTarget.value)}
            required
          />
        </CardContent>

        <CardFooter className="flex justify-between">
          <p>
            <span className="text-xs text-neutral-500">Grupo Alimentar:</span>
            <br />
            <span className="text-sm font-bold">{foodData.group1}</span>
          </p>

          <p>
            <span className="text-xs text-neutral-500">Energia:</span>
            <br />
            <span className="text-sm font-bold">{foodData.calories1}</span>
          </p>
        </CardFooter>
      </Card>

      <ChevronDown className="mx-auto h-12 w-12 text-neutral-300" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Substituto</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Combobox
            position={2}
            setValue={updateFood}
            value={food2}
            list={foodTable}
          />

          <Input className="font-bold" readOnly value={quantity2} />
        </CardContent>

        <CardFooter className="flex justify-between">
          <p>
            <span className="text-xs text-neutral-500">Grupo Alimentar:</span>
            <br />
            <span className="text-sm font-bold">{foodData.group2}</span>
          </p>

          <p>
            <span className="text-xs text-neutral-500">Energia:</span>
            <br />
            <span className="text-sm font-bold">{foodData.calories2}</span>
          </p>
        </CardFooter>
      </Card>

      <div className="mb-4 mt-6 flex gap-6">
        <Button onClick={clearForm} className="flex-1" variant="outline">
          Limpar
        </Button>

        <Button
          onClick={calculate}
          disabled={!food1 || !food2 || !quantity1}
          className="flex-1"
          variant="default"
        >
          Calcular
        </Button>
      </div>
    </div>
  )
}
