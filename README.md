<p align="center">
  <img src="https://user-images.githubusercontent.com/48105879/77805210-1fbef100-7060-11ea-9871-03c125017fcb.png" width="175" title="Be The Hero" />
</p>

# BE THE HERO

## Sobre o Projeto
Neste projeto foi criado a aplicação **The The Hero**, com o intuito de disponibilizar uma plataforma para que ONGs possam divulgar casos que necessitam de ajuda, fazendo com que mais pessoas tenham acesso a ele aumentando assim a chance de suporte. O projeto conta com um back-end desenvolvido em Node.JS, uma interface front-end desenvolvida em React.JS e um aplicativo mobile desenvolvido em React Native. 

Projeto desenvolvido na Semana OmniStack 11.0 realizada pela [Rocketseat](https://rocketseat.com.br/) em março de 2020.


### BACK-END
O back-end do projeto foi desenvolvido utilizando Node.JS, SQLite e Jest para realização dos testes em TDD. O back-end pode ser utilizado separadamente, para mais informações das tecnologias utilizadas para desenvolvê-lo e como utilizá-lo veja o README na pasta `backend`.

### FRONT-END
O front-end do projeto foi desenvolvido utilizando React.JS e Styled-Components para criar as estilizações da interface. Para poder acessar todas as funcionalidades do front-end é necessário que o back-end e o aplicativo mobile estejam sendo executados. Para mais informações das tecnologias utilizadas para desenvolvê-lo e como utilizá-lo veja o README na pasta `frontend`.

### MOBILE
O aplicativo mobile do projeto foi desenvolvido em React Native utilizando o Expo para a criação da base do aplicativo e Styled-Components para criar as estilizações da interface. Para poder acessar todas das funcionalidades do aplicativo é necessario que o back-end e o front-end estejam sendo executados. Para mais informações das tecnologias utilizadas para desenvolvê-lo e como utilizá-lo veja o README na pasta `mobile`.

## Como executar
O back-end e o front-end do projeto estam configurados para que possam ser executados em containers Docker, assim facilitando a instalação e execução dos mesmos. Siga os passos abaixo para utilizá-los.

> A aplicação mobile necessita ser executada em um smartphone ou emulador, para saber como utilizá-la veja o README na pasta `mobile`.

### Pré-requisitos
O projeto será executado em containers, para isso é necessário que você tenha o Node.JS, Docker e o Docker Compose instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse a [documentação oficial do Docker](https://docs.docker.com/install/) e o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto
1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse as pasta `backend` e `frontend` através de um terminal e, em cada uma delas, faça a instalação das dependências usando o comando:
```sh
npm install
```

3. Volte para a pasta raiz local do projeto e execute o comando:
```sh
docker-compose up
```

Este comando é o responsável por gerar os dois constainers que estão especificados no arquivo `docker-compose.yml`. A API fica localizada em [http://localhost:3333](http://localhost:3000) e o front-end em [http://localhost:3000](http://localhost:3000) .

Com isso o back-end e o front-end estarão prontos para serem utilizados, acesse o README na pasta `mobile` para o passo a passo de como utilizar o aplicativo.

#### NA PASTA DE CADA PARTE DO PROJETO EXISTE UM README COM MAIS INFORMAÇÕES.

<p align="center">
💙
</p>

