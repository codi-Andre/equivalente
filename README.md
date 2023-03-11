# Equivalente app

**Objetivo:** Web app para aferir o valor calórico equivalente de dois alimentos diferentes.

1. Escolha o alimento que deseja substituir
2. Escolha a quantidade
3. Escolha o alimento substituto

## Back-end [^1]
Os dados para a aplicação são servidos a partir do *json-server* executando o comando:
```"start": "json-server --watch db.json"``` inserido no package.json.
[^1]: Este back-end foi utilizado para o período de desenvolvimento e não foi pensando para a versão final do app.

## Front-end

O front-end é iniciado usando o comando:
`"npm run dev`

O front-end obtém os dados a partir de um de uma requisição `GET`, e calcula o valor em gramas utilizando a regra de 3, a partir das calorias dos alimentos.