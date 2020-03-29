# BE THE HERO - Front-end

## Sobre o Projeto
Neste projeto em React.JS foi criado o front-end da aplicação **Be The Hero**, com o intuito de disponibilizar uma plataforma para que ONGs possam divulgar casos que necessitam de ajuda.

### Feito Com
Abaixo segue o que foi utilizado na criação deste projeto:

- [Axios](https://github.com/axios/axios) - É um client HTTP baseado em promise que possibilita a realização de requests a partir do navegador e do Node.JS.
- [Styled-components](https://styled-components.com/) - É uma biblioteca que permite escrever CSS em JS.
- [React-icons](https://react-icons.netlify.com/#/) - É uma biblioteca que permite a inclusão de ícones em projetos React.
- [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - É responsável pela navegação entre componetes que vão funcionar como se fossem páginas.

## Como executar com Docker
Para conseguir utilizar o projeto siga os passos abaixo.

### Pré-requisitos
O projeto será executado em container, para isso é necessário que você tenha o Node.JS, Docker e o Docker Compose instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse a [documentação oficial do Docker](https://docs.docker.com/install/) e o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto
1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta `frontend` local do projeto através de um terminal e faça a instalação das dependências usando o comando:
```sh
npm install
```

3. Ainda com o terminal na pasta `frontend` local do projeto execute o comando:
```sh
docker-compose up
```

Este comando é o responsável por gerar o container que está especificado no arquivo `docker-compose.yml`. O front-end fica localizado em [http://localhost:3000](http://localhost:3001) .

#### PARA PODER ACESSAR TODAS AS FUNCIONALIDADES DO FRONT-END É NECESSÁRIO QUE O BACK-END E O APLICATIVO MOBILE ESTEJAM SENDO EXECUTADOS. PARA MAIS INFORMAÇÕES VEJA O README NA PASTA RAIZ OU O README ESPECÍFICO NAS PASTAS `backend` e `mobile`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/48105879/77837170-7b5eac80-713c-11ea-861d-ddc2ede170c9.gif" width="100%" alt="Imagem 1"/>
</p>

<p align="center">💙</p>

