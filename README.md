# Support Tickets API

Este projeto é uma API simples para gerenciamento de tickets de suporte, desenvolvida em Node.js, sem frameworks externos como Express. O objetivo é praticar conceitos fundamentais de rotas, middlewares e manipulação de dados em arquivos.

## Funcionalidades

- Criar tickets de suporte
- Listar todos os tickets
- Atualizar dados de um ticket
- Fechar um ticket (adicionar solução)
- Remover um ticket

## Estrutura do Projeto

```text
src/
  controllers/
    tickets/
      create.js        # Criação de tickets
      index.js         # Listagem de tickets
      update.js        # Atualização de dados do ticket
      updateStatus.js  # Fechamento do ticket
      remove.js        # Remoção de ticket
  database/
    database.js        # Lógica de acesso ao banco (arquivo JSON)
    db.json            # Base de dados dos tickets
  middlewares/
    jsonHandler.js     # Middleware para tratar JSON
    routeHandler.js    # Middleware de rotas
  routes/
    index.js           # Rotas principais
    tickets.js         # Rotas de tickets
  utils/
    extractQueryParams.js # Utilitário para query params
    parseRoutePath.js     # Utilitário para rotas dinâmicas
  server.js            # Inicialização do servidor
```

## Como rodar o projeto

1. Clone o repositório:

   ```sh
   git clone <url-do-repo>
   cd support-tickets
   ```

2. Instale as dependências (se houver):

   ```sh
   npm install
   ```

3. Inicie o servidor:

   ```sh
   node src/server.js
   ```

O servidor irá rodar por padrão em `http://localhost:3333`.

## Exemplos de uso dos controllers

### Criar um ticket (`create.js`)

```http
POST /tickets
Content-Type: application/json

{
  "equipment": "Notebook Dell",
  "description": "Tela azul ao iniciar.",
  "user_name": "João"
}
```

### Listar tickets (`index.js`)

```http
GET /tickets
```

Com filtro de status:

```http
GET /tickets?status=open
```

### Atualizar dados de um ticket (`update.js`)

```http
PUT /tickets/:id
Content-Type: application/json

{
  "equipment": "Notebook Dell",
  "description": "Erro persiste após reiniciar."
}
```

### Fechar um ticket/adicionar solução (`updateStatus.js`)

```http
PUT /tickets/:id/close
Content-Type: application/json

{
  "solution": "Atualização de driver realizada."
}
```

### Remover um ticket (`remove.js`)

```http
DELETE /tickets/:id
```

## Observações

- Os dados são salvos em `src/database/db.json`.
- O projeto não utiliza Express ou frameworks externos.

---
