# 🔍 GitHub Profile Finder (React)

Este projeto é um **buscador de perfil no GitHub**, desenvolvido utilizando **React**, **HTML** e **CSS**. 
O objetivo é permitir que o usuário pesquise pelo nome de um usuário do GitHub e visualize a foto, o nome (clicável) e a bio do usuário. Caso o usuário não seja encontrado, uma mensagem de erro é exibida.

---

## ⚠️ Observações

Durante a preparação do projeto para publicação, identifiquei que o **CSS não foi corretamente referenciado no build gerado** (`/dist`).  
Esse problema ocorreu porque o projeto foi inicialmente configurado para buscar o CSS via caminho relativo, o que funcionava normalmente durante o desenvolvimento local, mas não foi compatível com o ambiente de produção.

**Não realizei a correção após a data limite**, a fim de preservar a integridade da entrega e evitar alterações muito posteriores ao prazo estipulado pelo processo seletivo.

---

## 🛠️ Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Descrição do Projeto
- Buscador de perfil no GitHub utilizando a GitHub API.
- Funcionalidades principais:
  - Buscar e exibir:
    - Foto do perfil
    - Nome do usuário (com link para o perfil oficial no GitHub)
    - Bio do usuário
  - Caso o usuário não seja encontrado, exibir uma mensagem de erro amigável.
- O nome do usuário é clicável e redireciona diretamente para o seu perfil no GitHub.
