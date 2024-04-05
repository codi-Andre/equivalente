import { createContext, useContext, useState } from "react"
import taco from "@/assets/taco.json"

interface Food {
  id: number
  name: string
  kcal: number
  carbohydrates: number
  lipids: number
  proteins: number
  category: string
}

interface FoodContextProps {
  foodTable: Food[]
  food1: string
  quantity1: string

  food2: string
  quantity2: string

  foodData: {
    group1: string
    calories1: string
    group2: string
    calories2: string
  }

  updateFood: (name: string, position: number) => void
  updateQuantity: (quantity: string) => void
  calculate: () => void
  clearForm: () => void
}

interface FoodProviderProps {
  children: React.ReactNode
}

const FoodContext = createContext({} as FoodContextProps)

export function useFoodContext() {
  return useContext(FoodContext)
}

export function FoodProvider({ children }: FoodProviderProps) {
  const [food1, setFood1] = useState("")
  const [food2, setFood2] = useState("")
  const [quantity1, setQuantity1] = useState("")
  const [quantity2, setQuantity2] = useState("")
  const [foodData, setFoodData] = useState({
    group1: "",
    calories1: "",
    group2: "",
    calories2: ""
  })

  function updateFood(name: string, position: number) {
    if (position === 1) {
      setFood1(name)
      setFoodData((prev) => ({
        ...prev,
        calories1: "",
        calories2: "",
        group1: ""
      }))
      return
    }

    setFoodData((prev) => ({
      ...prev,
      calories1: "",
      calories2: "",
      group2: ""
    }))
    setFood2(name)
  }

  function updateQuantity(quantity: string) {
    setQuantity1(quantity)
    setFoodData((prev) => ({ ...prev, calories1: "", calories2: "" }))
  }

  function calculate() {
    const foodSet = []
    const length = taco.length
    for (let index = 0; index < length; index++) {
      if (taco[index].name === food1) {
        foodSet[0] = taco[index]
      }
      if (taco[index].name === food2) {
        foodSet[1] = taco[index]
      }
    }

    const totalCalories =
      parseFloat((foodSet[0].kcal / 100).toFixed(1)) * parseInt(quantity1)

    const food2CaloriesPerGram = parseFloat((foodSet[1].kcal / 100).toFixed(1))

    const food2Quantity = (totalCalories / food2CaloriesPerGram).toFixed(1)

    setQuantity2(`${food2Quantity} (g)`)
    setFoodData({
      calories1: totalCalories.toFixed(1) + " kcal",
      calories2: totalCalories.toFixed(1) + " kcal",
      group1: foodSet[0].category,
      group2: foodSet[1].category
    })
  }

  function clearForm() {
    setFood1("")
    setFood2("")
    setQuantity1("")
    setQuantity2("")
    setFoodData({
      group1: "",
      calories1: "",
      group2: "",
      calories2: ""
    })
  }

  return (
    <FoodContext.Provider
      value={{
        foodData,
        food1,
        food2,
        quantity1,
        quantity2,
        foodTable: taco,
        updateFood,
        updateQuantity,
        calculate,
        clearForm
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}
