import { Scale } from "lucide-react"

import { FoodProvider } from "@/context/food-context"
import { Form } from "@/components/ui/form"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"
import { useToast } from "./components/ui/use-toast"

function App() {
  const { toast } = useToast()
  useEffect(() => {
    toast({
      title: "Bem Vindo!",
      description:
        "Escolha o alimento que deseja substituir, a quantidade consumida e o alimento alternativo."
    })
  }, [])

  return (
    <div className="mx-auto h-full max-w-96 rounded-lg bg-white p-6 shadow-2xl">
      <header>
        <h1 className="mb-6 text-2xl font-medium">
          <Scale className="mr-2 inline-block" />
          Equivalente
        </h1>
      </header>

      <main>
        <FoodProvider>
          <Form />
        </FoodProvider>
        <Toaster />
      </main>
    </div>
  )
}

export default App
