import { Scale } from "lucide-react"

import { FoodProvider } from "@/context/food-context"
import { Form } from "@/components/ui/form"
import { Toaster } from "@/components/ui/toaster"

function App() {
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
