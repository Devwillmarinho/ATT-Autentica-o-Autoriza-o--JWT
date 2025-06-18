# API JWT - Autenticação e Autorização com Node.js e Express

API simples para gerenciamento de produtos com autenticação e autorização usando JWT (JSON Web Token).

## Usuários Simulados

| Username | Password   | Role  |
| -------- | ---------- | ----- |
| admin    | admin123   | admin |
| joao     | 123456     | user  |

## Rotas

### POST /login

Autentica o usuário e retorna um token JWT válido.

- **Request body:**

```json
{
  "username": "admin",
  "password": "admin123"
}
Response:

json


{
  "token": "seu_token_jwt_aqui"
}
GET /products
Retorna a lista de produtos. Requer token JWT no header Authorization.

Header:

makefile



Authorization: Bearer <token>
POST /products
Adiciona um novo produto (apenas para usuários com papel admin).

Header:

makefile




Authorization: Bearer <token>
Request body:

json


{
  "name": "Produto X",
  "price": 100
}
DELETE /products/:id
Remove um produto pelo ID (apenas para usuários com papel admin).

Header:

makefile




Authorization: Bearer <token>
Rodando localmente
Clone o repositório

bash



git clone https://github.com/Devwillmarinho/ATT-Autentica-o-Autoriza-o--JWT.git
cd ATT-Autentica-o-Autoriza-o--JWT
Instale as dependências

bash

npm install
Crie o arquivo .env na raiz do projeto (veja abaixo).

Rode a aplicação

bash


node index.js
A API estará rodando no endereço: http://localhost:3000

Variáveis de ambiente (.env)
Crie um arquivo .env com o conteúdo:

env


JWT_SECRET=secreto123
PORT=3000
Você pode mudar o JWT_SECRET para qualquer string aleatória e segura.

Testando a API
Use Postman, Insomnia ou outra ferramenta HTTP para:

Fazer login em /login e obter o token JWT.

Usar o token no header Authorization: Bearer <token> para acessar as rotas protegidas.

Lembre-se que só o usuário admin pode adicionar e remover produtos.

Tecnologias usadas
Node.js

Express.js

JSON Web Token (jsonwebtoken)

Autor
Willian Marinho 👨🏻‍💻
