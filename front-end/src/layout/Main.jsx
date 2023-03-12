import { useState, useEffect } from "react";

import { FoodInput } from "../components/FoodInput";
import { GoogleIcons } from "../components/GoogleIcons";
import { NutritionalTable } from '../components/NutritionalTable';

const foodData = []
fetch('http://localhost:3000/alimentos')
    .then(resp => resp.json())
    .then(data => foodData.push(...data))

export function Main() {

    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [quantity, setQuantity] = useState('')
    const [result, setResult] = useState([{}, {}])

    useEffect(() => {
        if(option1 && option2 && quantity) operation()
    }, [option1, option2, quantity])

    function handleOption1(e) {
        setOption1(e.target.value)
    }

    function handleOption2(e) {
        setOption2(e.target.value)
    }

    function handleQuantity(e) {
        setQuantity(e.target.value)
    }

    function operation() {
        let [meal1, meal2] = [{}, {}]

        for (const food of foodData) {
            if (food.nome === option1) meal1 = {...food}
            if (food.nome === option2) meal2 = {...food}
        }

        if (option1 === meal1.nome && quantity) {
            meal1.quantidade = quantity
            meal1.calorias = ((meal1.calorias / 100) * quantity).toFixed(1)
            meal1.carboidratos = ((meal1.carboidratos / 100) * quantity).toFixed(1)
            meal1.proteinas = ((meal1.proteinas / 100) * quantity).toFixed(1)
            meal1.gorduras = ((meal1.gorduras / 100) * quantity).toFixed(1)
        }

        if (option1 === meal1.nome && option2 === meal2.nome) {
            meal2.quantidade = (meal1.calorias / (meal2.calorias / 100)).toFixed(1)
            meal2.calorias = ((meal2.calorias / 100) * meal2.quantidade).toFixed(1)
            meal2.carboidratos = ((meal2.carboidratos / 100) * meal2.quantidade).toFixed(1)
            meal2.proteinas = ((meal2.proteinas / 100) * meal2.quantidade).toFixed(1)
            meal2.gorduras = ((meal2.gorduras / 100) * meal2.quantidade).toFixed(1)
        }

        setResult([{...meal1}, {...meal2}])
    }

    return (
        <main>
            <datalist id="food">
                {foodData.map(food => (<option key={food.id}>{food.nome}</option>))}
            </datalist>
            <label htmlFor="option1">Primário:</label>
            <FoodInput 
                type="text" 
                placeholder="Ex: carne de peixe" 
                id="option1" 
                list="food" 
                value={option1} 
                onChange={handleOption1} 
                help=""
                icon={<GoogleIcons name="set_meal" />} 
            />
            <label htmlFor="qtd">Quantidade:</label>
            <FoodInput 
                type="number" 
                placeholder="Ex: 100" 
                id="qtd" 
                value={quantity} 
                onChange={handleQuantity} 
                help="gramas(g)" 
            />
            <label htmlFor="option2">Objetivo:</label>
            <FoodInput 
                type="text" 
                placeholder="Ex: ovo" 
                id="option2" list="food" 
                value={option2} 
                onChange={handleOption2} 
                help=""
                icon={<GoogleIcons name="egg" />}
            />
            <div className="display">
                <h3>Resultado <GoogleIcons name="restaurant" /></h3>
                <NutritionalTable option1={result[0]} option2={result[1]} />
            </div>
        </main>
    )
}