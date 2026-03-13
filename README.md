# Inventory Management App — Inventory Dashboard

## About

Inventory Management is a versatile web application for tracking various types of items and equipment, including electronics, furniture, clothing, documents, and more.

## Features

- [x] User registration and authentication
- [x] Displaying a list of the most popular and recently created inventories
- [x] View details of your own and other users' inventories
- [x] Create an inventory with a description, category selection, and status (private or public)
- [x] Clean UI using Bootstrap
- [x] Clear separation of logic, UI components, hooks, utils and helpers

## Project Structure

```
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── client.js
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── helpers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── config/
│   │   ├── data/
│   │   ├── helpers/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── sections/
│   │   └── utils/
│   │
│   ├── App.jsx
│   └── main.jsx

```

## Stack

### Frontend

- **React 19** - library for building interactive user interfaces
- **React Router 7** - routing and navigation
- **Bootstrap 5** - responsive layout, UI components
- **Bootstrap Icons** - icon set used across the UI
- **Vite** - fast build tool and development server
- **React Hook Form** - form handling
- **React Markdown / EasyMDE** - for text and markdown fields

### Backend

- **Node.js** - JavaScript runtime environment
- **Express 5** - backend HTTP server and REST API
- **CORS** - handling cross-origin HTTP requests
- **Prisma ORM** - database management

### Database & Auth

- **Clerk Auth** - user authentication
- **Postgres (via Prisma)** - relational database

### Tooling

- **ESLint** - code quality and consistency
- **concurrently** - run frontend and backend together in development

## Live Demo

https://inventory-management-dgxh.onrender.com
