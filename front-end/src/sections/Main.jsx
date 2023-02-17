import { useState } from "react";

const foodData = []
fetch('http://localhost:3000/alimentos')
    .then(resp => resp.json())
    .then(data => foodData.push(...data))

export function Main() {

    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [quantity, setQuantity] = useState(0)

    function handleOption1(e) {
        setOption1(e.target.value)
    }

    function handleOption2(e) {
        setOption2(e.target.value)
    }

    function handleQuantity(e) {
        setQuantity(e.target.value)
    }

    return (
        <main>
            <datalist id="food">
                {foodData.map(food => (<option key={food.id}>{food.nome}</option>))}
            </datalist>
            <label htmlFor="option1">Primário:</label>
            <input type="text" id="option1" list="food" value={option1} onChange={e => handleOption1(e)}/>
            <label htmlFor="qtd">Quantidade:</label>
            <input type="number" id="qtd" min={0} value={quantity} onChange={e => handleQuantity(e)} />
            <label htmlFor="option2">Objetivo:</label>
            <input type="text" id="option2" list="food" value={option2} onChange={e => handleOption2(e)} />
            <div className="display">
                <h3>Resultado</h3>
                <p></p>
            </div>
        </main>
    )
}