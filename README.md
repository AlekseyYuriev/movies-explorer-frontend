# Дипломный проект: "Movies Explorer" (frontend)

<h2>1. Описание проекта</h2>
Дипломный проект "Movies Explorer" - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре <a href="https://beatfilmfestival.ru/">"Beat Film Festival"</a>. Выполнен в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a> и представляет собой отзывчиво-адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Express" (часть backend).

<b>Ссылки на проект:</b>
* IP: 158.160.136.7
* Frontend (деплой): https://alexmovies.nomoredomainsmonster.ru
* Backend: https://api.alexmovies.nomoredomainsmonster.ru

<i>* - проект прошел код-ревью</i>

<h2>2. Стек технологий</h2>
<span>
<img src="https://img.shields.io/badge/JavaScript-FFCD00?style=for-the-badge&logo=javascript&logoColor=black" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
<img src="https://img.shields.io/badge/React-087DA4?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка 'React'">
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка 'СSS'">
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка 'HTML'">
</span>

<h2>3. Установка и запуск приложения в локальном репозитории, эксплуатация</h2>
1. `git clone https://github.com/AlekseyYuriev/movies-explorer-frontend` - клонировать репозиторий на свое устройство (HTTPS)
<br>
2. `npm i` - установить зависимости
<br>
3. `npm run start` - запустить приложение
<br></br>
  <b>NB!</b> Для корректной работы в локальном репозитории следует также клонировать <a href="https://github.com/AlekseyYuriev/movies-explorer-api">backend</a> и запустить в первую очередь его командой `npm run dev` (после установки зависимостей)

<h2>4. Функционал</h2>
- Регистрация и авторизация пользователей с редактированием личных данных<br>
- Поиск фильмов с фильтрацией и рандомной генерацией вывода карточек, добавлением в избранные и удалением<br>
- Валидация личных данных