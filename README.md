# Todo List API

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
API REST para gerenciamento de tarefas desenvolvida com Node.js, TypeScript, Fastify, Prisma e PostgreSQL.

---

## Objetivo

Este projeto foi desenvolvido para praticar conceitos de Backend Development, APIs REST, TypeScript, Prisma ORM e PostgreSQL.

---

## Tecnologias

### Backend

* Node.js
* TypeScript
* Fastify

### Banco de Dados

* PostgreSQL
* Prisma ORM

### Validação

* Zod

### Ferramentas

* ESLint
* PNPM

---

## Funcionalidades

* Criar tarefa
* Listar tarefas
* Buscar tarefa por ID
* Atualizar tarefa
* Remover tarefa
* Marcar tarefa como concluída

---

## Estrutura do Projeto

```text
src/
├── controllers/
├── services/
├── repositories/
├── schemas/
├── routes/
├── lib/
└── server.ts
```

---

## Modelagem

### Task

| Campo       | Tipo     |
| ----------- | -------- |
| id          | UUID     |
| title       | String   |
| description | String   |
| completed   | Boolean  |
| createdAt   | DateTime |
| updatedAt   | DateTime |

---

## Instalação

### Clonar repositório

```bash
git clone URL_DO_REPOSITORIO
```

### Entrar na pasta

```bash
cd todo-list-api
```

### Instalar dependências

```bash
pnpm install
```

### Configurar variáveis de ambiente

Criar o arquivo `.env`:

```env
DATABASE_URL=""
```

---

## Banco de Dados

### Gerar Prisma Client

```bash
pnpm exec prisma generate
```

### Executar migrations

```bash
pnpm exec prisma migrate dev
```

### Abrir Prisma Studio

```bash
pnpm exec prisma studio
```

---

## Executar Projeto

### Desenvolvimento

```bash
pnpm dev
```

### Produção

```bash
pnpm build
pnpm start
```

---

## Rotas

### Criar Tarefa

**POST** `/tasks`

#### Request

```json
{
  "title": "Estudar Prisma",
  "description": "Criar primeira migration"
}
```

#### Response

```json
{
  "id": "uuid",
  "title": "Estudar Prisma",
  "description": "Criar primeira migration",
  "completed": false,
  "createdAt": "2026-06-04T00:00:00.000Z",
  "updatedAt": "2026-06-04T00:00:00.000Z"
}
```

---

### Listar Tarefas

**GET** `/tasks`

#### Response

```json
[
  {
    "id": "uuid",
    "title": "Estudar Prisma",
    "completed": false
  }
]
```

---

### Buscar Tarefa

**GET** `/tasks/:id`

#### Response

```json
{
  "id": "uuid",
  "title": "Estudar Prisma",
  "completed": false
}
```

---

### Atualizar Tarefa

**PATCH** `/tasks/:id`

#### Request

```json
{
  "title": "Novo título",
  "completed": true
}
```

#### Response

```json
{
  "id": "uuid",
  "title": "Novo título",
  "completed": true
}
```

---

### Remover Tarefa

**DELETE** `/tasks/:id`

#### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

## Validações

### Criar tarefa

* title obrigatório
* title mínimo de caracteres

### Atualizar tarefa

* campos opcionais
* validação de tipos

---

## Aprendizados

* TypeScript
* Fastify
* Prisma ORM
* PostgreSQL
* Arquitetura em Camadas
* Validação com Zod
* CRUD
* APIs REST

---

## Melhorias Futuras

* Paginação
* Filtros
* Ordenação
* Autenticação JWT
* Testes Automatizados
* Docker
* Deploy

---

## Autor

**Nicholas Silva**

GitHub: https://github.com/Nick909

LinkedIn: https://www.linkedin.com/
