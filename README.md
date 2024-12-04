<<<<<<< HEAD
# VictorMilu4NABookstore
=======
# API para Livraria *BookStoreStar* - TypeScript

## **Descrição**

Esta é uma API desenvolvida para gerenciar uma livraria. Com ela, os usuários podem cadastrar livros fornecendo os seguintes campos:

- **Título**
- **Imagem** (URL)
- **Preço**

---

## **Recursos da API**

### **1. Listar todos os livros**

### **2. Cadastrar um novo livro**


## **Como Rodar o Projeto**

### **1. Pré-requisitos**

Certifique-se de ter instalado:

- Node.js (versão mais recente recomendada)
- Banco de dados PostgreSQL

### **2. Configuração**

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados:

   - Crie uma tabela chamada `books` com as colunas `id`, `name`, `image` e `price`.
   - Use o seguinte script SQL como exemplo:
     ```sql
     CREATE TABLE books (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       image VARCHAR(255) NOT NULL,
       price NUMERIC(10, 2) NOT NULL
     );
     ```
### **3. Rodando o projeto**

Para iniciar o servidor:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

---

## **Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **PostgreSQL**
- **TypeScript**
---

## **Contribuindo**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorar o projeto.

---

Projeto feito por Victor Milu

>>>>>>> e147bf2 (feat: adiciona back end ao git)
