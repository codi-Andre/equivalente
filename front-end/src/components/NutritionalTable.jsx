

export function NutritionalTable({option1, option2}) {
    
    return (
        <table>
            <caption>
                Tabela Nutricional
            </caption>
            <thead>
                <tr>
                    <td></td>
                    <th scope="col">{option1.nome ? option1.nome : ''}</th>
                    <th scope="col">{option2.nome ? option2.nome : ''}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Quantidade (g):</th>
                    <td>{option1.quantidade ? option1.quantidade : ''}</td>
                    <td>{option2.quantidade ? option2.quantidade : ''}</td>
                </tr>
                <tr>
                    <th scope="row">Calorias (kcal):</th>
                    <td>{option1.calorias ? option1.calorias : ''}</td>
                    <td>{option2.calorias ? option2.calorias : ''}</td>
                </tr>
                <tr>
                    <th scope="row">Carboidratos (g):</th>
                    <td>{option1.carboidratos ? option1.carboidratos : ''}</td>
                    <td>{option2.carboidratos ? option2.carboidratos : ''}</td>
                </tr>
                <tr>
                    <th scope="row">Proteínas (g):</th>
                    <td>{option1.proteinas ? option1.proteinas : ''}</td>
                    <td>{option2.proteinas ? option2.proteinas : ''}</td>
                </tr>
                <tr>
                    <th scope="row">Gorduras (g):</th>
                    <td>{option1.gorduras ? option1.gorduras : ''}</td>
                    <td>{option2.gorduras ? option2.gorduras : ''}</td>
                </tr>
                <tr>
                    <th scope="row">Categoria:</th>
                    <td>{option1.categoria ? option1.categoria : ''}</td>
                    <td>{option2.categoria ? option2.categoria : ''}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Comparação entre alimentos</td>
                </tr>
            </tfoot>
        </table>
    )
}