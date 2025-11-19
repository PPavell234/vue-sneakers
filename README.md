<div align="center">

  <h1>Vue Sneakers</h1>
  <p>Мини‑проект — SPA магазин кроссовок: фронтенд на Vue, простой backend на Node/Express и MongoDB (MEVN‑подход).</p>

  <!-- Badges -->
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)
  ![GitHub last commit](https://img.shields.io/github/last-commit/PPavell234/vue-sneakers)
  ![Repo size](https://img.shields.io/github/repo-size/PPavell234/vue-sneakers)
  ![Language](https://img.shields.io/github/languages/top/PPavell234/vue-sneakers)

</div>

---

## О проекте

Vue Sneakers — учебный/демонстрационный проект интернет‑магазина кроссовок. Показывает простую архитектуру с разделёнными frontend и backend частями, CRUD‑операциями и подключением к MongoDB.

Цель: демонстрация работы с Vue (SPA), взаимодействия с REST API и базовой структуры full‑stack приложения.

---

## Что внутри

- Клиент: Vue (SPA)
- Сервер: Node.js + Express (REST API)
- База данных: MongoDB
- Основные возможности: просмотр товаров, добавление/редактирование (CRUD) через API, простая корзина/интерфейс магазина

---

## Структура проекта (примерно)

```text
vue-sneakers/
├── client/      # Vue.js frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/      # Node.js + Express backend
│   ├── routes/
│   ├── models/
│   └── package.json
└── README.md
```

(Если структура в репозитории отличается — подправлю по реальному содержимому.)

---

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/PPavell234/vue-sneakers.git
cd vue-sneakers
```

2. Запуск backend (если есть папка server):
```bash
cd server
npm install
# создать файл .env (пример ниже)
npm run dev
```
По умолчанию сервер обычно слушает порт 5000 (http://localhost:5000).

3. Запуск frontend (если есть папка client):
```bash
cd ../client
npm install
npm run dev
```
Клиент обычно доступен по адресу http://localhost:8080 (или как указано в конфигурации).

---

## Переменные окружения (пример)

В директории server создайте файл `.env` со значениями, примерно такими:
```env
DB_URL=mongodb://localhost:27017/vue-sneakers
PORT=5000
```

Если фронтенд ожидает адрес API, добавьте в client:
```env
VUE_APP_API_URL=http://localhost:5000/api
```

---

## Полезные команды

- Установить зависимости (server/client): npm install
- Запустить в режиме разработки: npm run dev
- Собрать фронтенд для продакшна: npm run build (в директории client)

---

## Фичи / Todo (идеи для улучшения)

- Аутентификация пользователей (JWT)
- Управление заказами и пользователями
- Улучшение стилей и адаптивности
- Покрытие тестами (unit / e2e)
- Docker‑окружение для локального запуска (Mongo + сервер + клиент)

---

## Вклад

Если хотите, выставляйте issues или открывайте pull requests. Подсказки:

- Описывайте баг/фичу кратко и с шагами для воспроизведения.
- Прежде чем менять крупные участки кода — обсудите в issue.

---

## Лицензия

MIT © PPavell234

---

Сделано с ❤️
```
