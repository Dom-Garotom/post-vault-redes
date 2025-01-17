# Alerta 24hrs

**Alerta 24hrs** é um site que faz monitoramento de nobreaks, fornecendo informações em tempo real sobre o status e a saúde dos dispositivos. O projeto é desenvolvido com as tecnologias React, Styled Components, Axios, Sass, e React Router DOM, e segue o Atomic Design Pattern para organizar os componentes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes usando tagged template literals.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições.
- **Sass**: Preprocessador CSS que adiciona funcionalidades como variáveis, mixins e nesting.
- **React Router DOM**: Biblioteca de roteamento para React, permitindo navegação entre diferentes páginas.
- **Atomic Design Pattern**: Metodologia de design que organiza os componentes em átomos, moléculas e organismos.

## Estrutura de Pastas

A estrutura de pastas do projeto segue o Atomic Design Pattern, que separa os componentes em diferentes níveis de complexidade:

### Explicação das Pastas

- **`/components/atoms`**: Contém os menores blocos de construção do UI, como botões, inputs e labels. São os componentes mais básicos, que não dependem de outros componentes.
- **`/components/molecules`**: Combinam múltiplos átomos para formar componentes mais complexos. Exemplo: uma barra de busca que combina um input e um botão.

- **`/components/organisms`**: São componentes maiores, compostos por átomos e moléculas, representando seções completas da interface, como um cabeçalho ou rodapé.

- **`/contexts`**: Contém os arquivos de contexto para gerenciamento de estado global usando a Context API.

- **`/models`**: Contém modelos de requisições de dados, como UserModel. Esses modelos realizam as requisições das entidades do sistema como Usuário.

- **`/pages`**: Contém os componentes que representam as páginas da aplicação, como o painel de controle e a página de monitoramento.

- **`/routes`**: Contém o arquivo de configuração de rotas da aplicação.

- **`/services`**: Contém arquivos relacionados a chamadas de API e configuração de cliente HTTP (Axios).

- **`/styles`**: Contém arquivos de estilo globais, como `global.scss`.

- **`/utils`**: Contém funções utilitárias, como helpers para manipulação de dados ou formatação.

## Configuração e Execução

1. Clone o repositório:

```bash
$ git clone https://github.com/felipealp/react-achtype-example.git
```

2. Instale as dependências:

```bash
$ cd react-achtype-example
$ npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
$ npm run dev
```
