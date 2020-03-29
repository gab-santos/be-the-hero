# BE THE HERO - Back-end

## Sobre o projeto

Neste projeto em Node.JS foi criado o back-end da aplicação **Be The Hero**.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Nodemon](https://github.com/remy/nodemon) - É uma ferramensta que auxilia no desenvolvimento de aplicações baseadas em Node.JS reiniciando automaticamente a aplicação quando são detectadas alteraçoes nos arquivos.
- [Cors](https://github.com/expressjs/cors) - É uma ferramenta que permite controlar o acesso de terceiros a recursos do servidor.
- [Express](https://github.com/expressjs/express) - É um framework para aplicativos Node.js que fornece um conjunto robusto de recursos para aplicativos web e mobile.
- [Knex](https://github.com/knex/knex) - É um construtor de consultas SQL para Postgres , MSSQL , MySQL , MariaDB , SQLite3 , Oracle e Amazon Redshift, projetado para ser flexível, portátil e divertido de usar.
- [SQLite3](https://github.com/mapbox/node-sqlite3) - É um driver para NodeJS para utilização do SQLite que é um banco de dados relacional simples, de arquivo único.

## Como executar em container Docker

Para conseguir utilizar o projeto usando container Docker siga os passos abaixo.

### Pré-requisitos

O projeto será executado em containers, para isso é necessário que você tenha o Node.JS, Docker e o Docker Compose instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse a [documentação oficial do Docker](https://docs.docker.com/install/) e o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto

1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta `backend` local do projeto através de um terminal e faça a instalação das dependências usando o comando:

```sh
npm install
```

3. Ainda na pasta `backend` local do projeto execute o comando:

```sh
docker-compose up
```

Este comando é o responsável por gerar o constainer que está especificado no arquivo `docker-compose.yml`. A API fica localizada em `http://localhost:3333`.

Faça uma requisição através do navegador para rota `http://localhost:3000/hw`, caso a resposta da requisição foi o JSON abaixo a API foi iniciada corretamente e está pronta para uso.

```json
{
  "success": "Hello World :)"
}
```

## Rotas

Esta API contem as seguintes rotas:

- `POST /session`: rota responsável por logar uma ONG no sistema
- `POST /ongs`: rota responsável pelo cadastro uma ONG no sistema
- `GET /ongs`: rota responsável pela listagem das ONGs disponíveis
- `POST /incidents` rota responsável pelo cadastro um caso no sistema
- `GET /incidents`: rota responsável pela listagem dos casos disponíveis
- `DELETE /incidents/:id`: rota responsável pela exclução de um caso do sistema
- `GET /profile`: rota responsável pela listagem dos casos disponíveis de uma ONG específica

## Exemplos

#### POST /session

Requisição:

```json
// POST /session
// Content-Type: application/json
{
  "id": "d150109c"
}
```

Resposta:

```json
// Status: 200 OK
{
  "name": "ONG 1"
}
```

#### POST /ongs

Requisição:

```json
// POST /ongs
// Content-Type: application/json
{
  "name": "ONG 1",
  "email": "contato@ong1.com.br",
  "whatsapp": "16991223344",
  "city": "Dobrada",
  "uf": "SP"
}
```

Resposta:

```json
// Status: 201 Created
{
  "id": "d150109c"
}
```

#### GET /ongs

Requisição:

```json
// GET /ongs
```

Responsta:

```json
// Status: 200 OK
[
  {
    "id": "d150109c",
    "name": "ONG 1",
    "email": "contato@ong1.com.br",
    "whatsapp": "16991223344",
    "city": "Dobrada",
    "uf": "SP"
  }
]
```

#### POST /incidents

Requisição:

```json
// POST /incidents
// Content-Type: application/json
// Authorization: d150109c
{
  "title": "Caso 1",
  "description": "Description Caso 1",
  "value": 120
}
```

Resposta:

```json
// Status: 201 Created
{
  "id": 1
}
```

#### GET /incidents

Requisição:

```json
// GET /incidents
```

Resposta:

```json
// Status: 200 OK
// X-Total-Count: 1 (Quantidade total de casos disponíveis)
[
  {
    "id": 1,
    "title": "Caso 1",
    "description": "Description Caso 1",
    "value": 120,
    "ong_id": "d150109c",
    "name": "ONG 1",
    "email": "contato@ong1.com.br",
    "whatsapp": "16991223344",
    "city": "Dobrada",
    "uf": "SP"
  }
]
```

#### DELETE /incidents/:id

Requisição:

```json
// DELETE /incidents/1
// Authorization: d150109c
```

Resposta:

```json
// Status: 204 No Content
```

#### GET /profile

Requisição:

```json
// GET /profile
// Authorization: d150109c
```

Resposta:

```json
// Status: 200 OK
[
  {
    "id": 2,
    "title": "Caso 1",
    "description": "Description Caso 1",
    "value": 120,
    "ong_id": "d150109c"
  }
]
```

<p align="center">
💙
</p>
