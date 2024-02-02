# Blog - REST API

<p align="center">
  <img src="https://img.shields.io/static/v1?label=api&message=rest&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nodejs-api-rest?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nodejs-api-rest?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Josemar-cafumana/blog_api?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#requisitos">Requisitos</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Sistema de blog minimalista. Crie, compartilhe e interaja com postagens. Recursos incluem categorias, tags, curtidas, comentários, perfis de usuário e listas de leitura.

<img src="./src/assets/Captura de ecrã de 2024-02-02 10-40-48.png" />


## Requisitos

  - [x] **Requisitos Funcionais (RF):**

1. *Autenticação de Usuários:*
    - [x]  Registro de usuários.
    - [x]  Login e logout.
    - [x]  Recuperação de senha.
    - [x]  Refresh Token
2. *Gerenciamento de Posts:*
    - [x]  Criação, edição e exclusão de postagens.
    - [x]  Suporte a texto, imagens e outros tipos de mídia.
    - [x]  Opção para definir postagens como públicas, privadas ou rascunhos.
    - [x]  Comentários em postagens.
    - [x]  Permita que usuários autenticados editem e excluam seus próprios comentários
    - [x]  Permitir que usuários criiem listas de leitura
    - [x]  Curtir e favoritar posts
3. *Categorias e Tags:*
    - [x]  Possibilidade de categorizar posts.
    - [x]  Adição de tags para facilitar a busca.
4. *Busca:*
    - [x]  Pesquisa por título, autor, categoria, etc.

    

  - [x] **Regras Não Funcionais (RNF):**

    - [x] <a href="#tecnologias">Tecnologias</a> 

  - [x] **Regras de Negócios (RN):**
    - [x] O usuário só pode visualizar transações que ele criou.
    - [x] Deve ser possível identificar o usuário entre as requisições.
    - [x] A transação pode do tipo crédito que somará ao valor total ou débito que será subtraído.


## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/Josemar-cafumana/blog_api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd blog_api

# Configure as variaveis de ambiente
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Configure as variaveis de ambiente
$ cp .env.example .env

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor iniciará na porta 4000 ou na porta definida no arquivo .env na variável PORT - acesse <http://localhost:4000>
```


## Tecnologias

- [Node.js](https://nodejs.org/en/): Um ambiente de execução JavaScript do lado do servidor.

- [TypeScript](https://www.typescriptlang.org/): Um superset do JavaScript que adiciona tipos estáticos opcionais.

- [Prisma](https://www.prisma.io/): Um banco de dados ORM (Object-Relational Mapping) para Node.js e TypeScript.

- [JWT (JSON Web Tokens)](https://jwt.io/): Um padrão para criação de tokens de acesso baseados em JSON para autenticação.

- [Nodemailer](https://nodemailer.com/): Um módulo para envio de e-mails com Node.js.

- [Cloudinary](https://cloudinary.com/): Um serviço de gerenciamento de mídia em nuvem.

- [Express.js](https://expressjs.com/): Um framework web para Node.js que simplifica o desenvolvimento de aplicativos web. 

- [MySQL](https://www.mysql.com/): Um sistema de gerenciamento de banco de dados relacional de código aberto.


Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento eficiente, facilitando a criação de um aplicativo robusto e moderno, incluindo recursos de banco de dados, autenticação, envio de e-mails e gerenciamento de mídia.

## Autor

<div align="center">
<img src="https://github.com/Josemar-cafumana.png" style="width: 100px; border-radius: 50%" />
<h1>Josemar Cafumana</h1>
<strong>Backend Developer</strong>
<br/>
<br/>
<div  style="display: flex; align-items: center: justify-content: center; text-align: center">

<a href="https://www.linkedin.com/in/josemar-cafumana-web-developer/" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/Josemar-cafumana" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:rjosemar-cafumana@hotmail.com" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://wa.link/65562r" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

</a>
</div>

<br/>
<br/>
</div>
