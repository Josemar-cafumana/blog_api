# Blog - REST API

<p align="center">
  <img src="https://img.shields.io/static/v1?label=api&message=rest&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nodejs-api-rest?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nodejs-api-rest?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Josemar-cafumana/blog_api?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#installation">Installation</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#author">Author</a>   
</p>

## About

Minimalistic blog system. Create, share, and interact with posts. Features include categories, tags, likes, comments, user profiles, and reading lists.

<img src="./src/assets/Captura de ecrã de 2024-02-02 10-40-48.png" />


## Requirements

  - [x] **Functional Requirements (FR):**

1. *User Authentication:*
    - [x]  User registration.
    - [x]  Login and logout.
    - [x]  Password recovery.
    - [x]  Refresh Token
2. *Post Management:*
    - [x]  Creation, editing, and deletion of posts.
    - [x]  Support for text, images, and other types of media.
    - [x]  Option to set posts as public, private, or drafts.
    - [x]  Comments on posts.
    - [x]  Allow authenticated users to edit and delete their own comments.
    - [x]  Allow users to create reading lists.
    - [x]  Like and favorite posts.
3. *Categories and Tags:*
    - [x]  Ability to categorize posts.
    - [x]  Addition of tags to facilitate search.
4. *Search:*
    - [x]  Search by title, author, category, etc.

    

  - [x] **Non-Functional Requirements (NFR):**

    - [x] <a href="#technologies">Technologies</a> 


## Installation

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/). Also, it's good to have an editor to work with the code such as [VSCode](https://code.visualstudio.com/).

### 🎲 Running the Back End (server)

```bash
# Clone this repository
$ git clone https://github.com/Josemar-cafumana/blog_api.git

# Navigate to the project's folder in the terminal/cmd
$ cd blog_api

# Install dependencies
$ npm install
# If you prefer using Yarn, execute the following command
$ yarn

# Configure environment variables
$ cp .env.example .env

# Run the application in development mode
$ npm run dev
# If you prefer using Yarn, execute the following command
$ yarn dev

# The server will start on port 4000 or on the port defined in the .env file under the PORT variable - access <http://localhost:4000>
```


## Technologies

- [Node.js](https://nodejs.org/en/): A JavaScript runtime for server-side execution.

- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds optional static typing.

- [Prisma](https://www.prisma.io/): A database ORM (Object-Relational Mapping) for Node.js and TypeScript.

- [JWT (JSON Web Tokens)](https://jwt.io/): A standard for creating JSON-based access tokens for authentication.

- [Nodemailer](https://nodemailer.com/): A module for sending emails with Node.js.

- [Cloudinary](https://cloudinary.com/): A cloud-based media management service.

- [Express.js](https://expressjs.com/): A web framework for Node.js that simplifies web application development.

- [MySQL](https://www.mysql.com/): An open-source relational database management system.


These technologies were chosen to provide an efficient development experience, facilitating the creation of a robust and modern application, including database features, authentication, email sending, and media management.

## Author

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