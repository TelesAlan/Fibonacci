
# Projeto  de  Fibonacci  em  React  com  TypeScript

Este é um  projeto  simples  que  gera  a  sequência  de  Fibonacci  usando  React  e  TypeScript. A  sequência  de  Fibonacci é uma  série  de  números  em  que  cada  número é a  soma  dos  dois  números  anteriores.

## Pré-requisitos

Antes  de  executar  o  projeto, verifique  se  você possui  os  seguintes  requisitos:

-  Node.js  instalado  em  seu  sistema. 
- npm (ou yarn) instalado  em  seu  sistema.

## Como usar

Siga  as  etapas  abaixo  para  usar  o  projeto:

1. Clone este repositório em sua máquina local:
`https://github.com/TelesAlan/Fibonacci.git`
2. Navegue até o diretório do projeto:
`cd Fibonacci`
3.  Instale as dependências do projeto:
`npm i` ou `yarn`  
4.  Inicie o servidor de desenvolvimento:
`npm start` ou `yarn start`
5. Abra o navegador e acesse `http://localhost:3000` para ver o aplicativo em funcionamento.
6.  Digite um número no campo "Número de elementos" e clique no botão "Gerar Sequência" para ver a sequência de Fibonacci gerada.

## Implementação

O projeto consiste em um componente chamado `App`, que gera a sequência de Fibonacci com base no número fornecido pelo usuário. O código-fonte do componente está localizado no arquivo `src/App.tsx`.

O componente `App` possui um estado para controlar o número de elementos a serem gerados na sequência e outro estado para armazenar a sequência de Fibonacci gerada. Quando o usuário clica no botão "Gerar Sequência", a função `handleGenerate` é chamada, que chama a função `generateSequence` para calcular a sequência com base no número fornecido.

## Suporte
Se você tiver algum problema ou dúvida, sinta-se à vontade para abrir uma **issue** neste repositório.

## Contribuição
Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch: "**git checkout -b minha-branch**".
3. Faça suas modificações e commit: "**git commit -m 'Minhas alterações'**".
4. Envie para o repositório remoto: "**git push origin minha-branch**".
5. Abra uma **pull request** explicando suas alterações.
## Licença
Este projeto está licenciado sob a MIT License. Sinta-se livre para usá-lo da maneira que preferir.
