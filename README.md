#API-Express-NodeJs.

Desenvolvimento de uma API do zero com o framework Express para estudos da estrutura.

Foi utilizado o Insomnia para enviar as requisições.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________
-------> Iniciado o Projeto:

----------| Configurações: |-----------

- Iniciado o servidor.

- criado a primeira rota e fazer a primeira requisição utilizando o Express. 

- definir rotas, acessar requisições e respostas, e como o Express lida automaticamente com rotas inexistentes. 

----------| Params e Middleware: |-----------

- parâmetros na rota, como o ID do produto, e recuperá-los usando request.params.

- O Express facilita a extração de informações da rota, tornando o processo mais simples do que utilizando Node Puro.

- parâmetros não nomeados na rota e como utilizar parâmetros nomeados para paginação e destacado que os Query Parameters são opcionais e como recuperá-los de forma simples utilizando o Express.

- O Express permite devolver respostas em diferentes formatos, como texto e JSON.

- é possível definir o status code da resposta, como o código 201 para indicar criação.

- MiddleWares que permitem interceptar e manipular requisições, inclusive chamando a próxima requisição.

- um middleware globalmente em todas as rotas e a importância da ordem de aplicação dos middlewares.

- COm a possibilidade de inserir o middleware antes de executar uma função em uma rota específica, mostrando a diferença entre um middleware global e um local.

- um Middleware pode modificar o conteúdo de uma requisição, adicionando propriedades.


----------| Controller e Exceções de erros: |-----------

- organizar as rotas de uma aplicação em arquivos separados para melhorar a organização do código.

- Ao definir os endereços das rotas, conseguimos simplificar o código e torná-lo mais enxuto. Essa organização facilita a manutenção e escalabilidade da aplicação.

- separadas as rotas da aplicação em um arquivo específico e a criação de um controller para cada rota, assim, separa as responsabilidades de roteamento e execução de ações.

- tratar exceções para manter a API funcionando mesmo em cenários de erro, como requisições inválidas.

- lançar e capturar erros, além de como tratar exceções de forma amigável para manter a aplicação em pleno funcionamento.

- a importância de diferenciar exceções geradas pelo cliente de erros internos do servidor ao lidar com tratamento de exceções em uma aplicação.

- criação de uma classe AppError para representar esses diferentes tipos de exceções, utilizando mensagens e códigos de status HTTP.

- o uso da classe AppError para lançar erros personalizados, como no caso de um produto sem nome.

- validações para nome e preço do produto, incluindo mensagens personalizadas para cada tipo de erro.

- a importância de padronizar o código para facilitar a manutenção.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

Tecnologias: JAVASCRIPT. NODEJS.