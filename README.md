Back-end Pets

- Instalar dependências 
$ yarn install

- Executar localhost:3333
$ yarn start

Sobre o projeto

Back-end construído utilizando Node JS. A aplicação possui uma rota com o método post, responsável por receber uma requisição do front-end, com os dados, data, qtd pets grandes e qtd pets pequenos e retornar o petshop com o menor valor para o serviço.

Método post:
Requisição - Recebe através do body os dados contendo os parâmetros inseridos pelo usuário no front-end, utilizado a desestruturação para obter os dados.

dataDiaDaSemana – Função recebe como parâmetro a data, obtida através do body e retorna o dia da semana e um boolean “isWeekend” para informar se é um fim de semana.

If Else- Utilizado para testar se o dia é um fim de semana, caso não seja o if executa os cálculos com base nos valores de dias úteis e retorna o petshop mais barato. Caso seja um fim de semana o else executa os cálculos com base nos valores de fins de semana e retorna o petshop mais barato.

Const valorMeuCanino, valorVaiRex, valorChowChawgas – Executa e armazena o resultado do cálculo do serviço com base na tabela de valores.

Const petShops – Recebe um array com os dados e valores de cada petshop.

Const menorValor – Utilizado um map no array “petShops” para extrair o valor do serviço, feito um spread para espalhar os valores do novo array e utilizado o Math.min para identificar o valor de serviço mais barato.

Const menoresValores – Realizado um filter no array petShops , utilizando o valor encontrado na constante anterior “menorValor”, dessa forma obtenho um novo array apenas com os petshops com o valor de serviço mais barato.

Const menorDistancia - Utilizado um map no array “menoresValores” para extrair a distância dos petshops, feito um spread para espalhar os valores do novo array e utilizado o Math.min para a menor distância.

Const petShopMaisBarato - Realizado um filter no array menoresValores , utilizando a distância encontrada na constante anterior “menorDistancia”, dessa forma obtenho um novo array apenas com os petshops com o valor de serviço mais barato e a menor distância.

Retorno – Retornado os dados da constante “petShopMaisBarato” e o dia da semana.
