# Equivalente app

**Objetivo:** Criar um app para aferir o valor calórico equivalente de dois alimentos diferentes.

## Back-end [^1]
Os dados para a aplicação são servidos a partir do *json-server* executando o comando:
```"start": "json-server --watch db.json"``` inserido no package.json.
[^1]: Este back-end criado para o período de desenvolvimento e não foi pensando para a versão final do app.

## Front-end

**Lista de tarefas**
- [x] estrutura mínima nescessária
- [x] lógica operacional
- [ ] estilizar app
- [ ] ?

O front-end obtém os dados a partir de um `fetch`, e calcula o valor em gramas utilizando a regra de 3.

### Possíveis problemas

1. O usuário precisa digitar corretamente o nome do alimento e/ou selecionalo a partir das sugestões do `autocomplete`.
2. A lista de sugestões ficará muito grande a medida que outros alimentos sejam incorporados.
3. No mesmo raciocínio acima, há possibilidade de causar problemas de performance?
4. O aplicativo pressupõe conhecimento prévio do usuário acerca de dieta(substituir 200g de batata pelo *equivalente* de carne bovina não é uma boa ideia)