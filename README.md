# Projeto Carrinho de Compras

Neste projeto, foi desenvolvida uma aplicação que oferece uma experiência de compras online completa. Você encontrará funcionalidades que incluem a busca e exibição de produtos da API do Mercado Livre, adição e remoção de produtos do carrinho de compras, cálculo do valor total da compra e uma indicação de carregamento durante as requisições à API. Este projeto demonstra a aplicação de habilidades em desenvolvimento web, incluindo testes de unidade, manipulação de dados de API e criação de uma interface de usuário interativa.

## O que foi desenvolvido

Neste projeto, foram implementadas as seguintes funcionalidades e desenvolvidas as seguintes implementações:

- Desenvolvimento de testes de unidade para a função `fetchProducts`, visando atingir no mínimo 25% de cobertura total e 100% da própria função.
- Criação de uma listagem de produtos utilizando a função `fetchProducts` para obter dados da API do Mercado Livre. Os produtos são exibidos na página HTML e são adicionados como elementos `<section class="item">`.
- Desenvolvimento de testes de unidade para a função `fetchItem`, visando no mínimo 50% de cobertura total e 100% da própria função.
- Adição de produtos ao carrinho de compras ao clicar no botão "Adicionar ao carrinho". Isso envolve uma requisição à API para obter os detalhes do produto.
- Remoção de itens do carrinho de compras ao clicar neles.
- Implementação de testes de unidade para a função `saveCartItems` para atingir no mínimo 75% de cobertura total e 100% da própria função.
- Implementação de testes de unidade para a função `getSavedCartItems` para atingir 100% de cobertura total e 100% da própria função.
- Carregamento do carrinho de compras ao iniciar a página, garantindo que os itens adicionados anteriormente sejam recuperados do LocalStorage.
- Cálculo do valor total dos itens do carrinho de compras, exibido dinamicamente na página.
- Adição de um botão "Esvaziar carrinho" para limpar todos os itens do carrinho de compras.
- Adição de um indicador de carregamento durante as requisições à API, exibindo o texto "Carregando..." para informar os usuários sobre o processo em andamento.

Com essas funcionalidades implementadas, o projeto oferece uma experiência completa de compras online.

## Como usar

Este projeto é uma aplicação web que pode ser acessada diretamente pelo navegador. Para utilizá-lo, basta clonar o repositório para o seu computador, navegar até o diretório do projeto e abrir o arquivo `index.html` em seu navegador para iniciar a aplicação.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML5: Utilizado para estruturar a página web.
- CSS3: Utilizado para estilizar a página e torná-la visualmente atraente.
- JavaScript: Utilizado para implementar a lógica da aplicação, interagir com a API e realizar operações dinâmicas na página.
- Jest: Utilizado para escrever testes de unidade e garantir a qualidade do código.
- LocalStorage: Utilizado para armazenar temporariamente os itens do carrinho de compras no navegador do usuário.

Essas tecnologias foram combinadas para criar uma aplicação web interativa e funcional.

## Contato

- [Pedro Henrique] - [pedrohalmeidamendonca@gmail.com]
- [LinkedIn](https://www.linkedin.com/in/pedrohxiv/)
- [GitHub](https://github.com/pedrohxiv)

---

**Nota:** Este projeto foi desenvolvido como parte do curso da Trybe e tem como objetivo demonstrar habilidades em HTML, CSS, JavaScript e testes unitários. Sinta-se à vontade para explorar e entre em contato se tiver alguma pergunta ou feedback!
