# HappyPaws Web II 🐾

Aplicación web para la gestión integral de una clínica/fundación veterinaria.  
Este proyecto se desarrolla como parte de la asignatura **Electiva Disciplinar II – Desarrollo de Aplicaciones Web** de la **Corporación Universitaria Iberoamericana**.

HappyPaws Web II integra tecnologías **front-end** y **back-end** para demostrar el uso de:
- Arquitectura **REST**
- Documentación de API (Swagger – pendiente de integración)
- **Node.js + Express** en el backend
- **ReactJS** con Hooks y Context API en el frontend
- **Axios** para las peticiones HTTP
- **React Router** para gestión de rutas
- Preparación para despliegue en plataformas como Vercel / Netlify / Render

---

## 🎯 Objetivo del proyecto

Diseñar e implementar una aplicación web que permita gestionar información de mascotas, clientes y procesos básicos (como adopciones), usando tecnologías modernas de desarrollo web.

---

## 🧱 Estructura del proyecto

Backend

    server.js: archivo principal del servidor Express.
    
    routes/mascotas.routes.js: rutas REST para manejar las mascotas.
    
    data/mascotas.js: datos de ejemplo (mock) para pruebas.
    
    .env.example: ejemplo de variables de entorno.

Frontend

    src/main.jsx: punto de entrada de React.
    
    src/App.jsx: componente raíz de la aplicación.
    
    src/routes/AppRouter.jsx: configuración de rutas con React Router.
    
    src/pages/Home.jsx: página principal.
    
    src/pages/Mascotas.jsx: listado de mascotas consumiendo el backend.
    
    src/components/Navbar.jsx: barra de navegación.
    
    src/context/AppContext.jsx: Context API para estado global.
    
    src/services/api.js: configuración base de Axios.

🚀 Tecnologías utilizadas
    Backend
    Node.js
    Express


Frontend
    ReactJS
    Vite
    React Router DOM
    Axios

⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
  git clone https://github.com/DevWillA/happypaws-web
  cd happypaws-web

2️⃣ Backend
  cd backend
  npm install
  npm run dev   # o: node server.js


Por defecto el backend correrá en:

  http://localhost:3000

3️⃣ Frontend

En otra terminal:

  cd frontend
  npm install
  npm run dev


Por defecto el frontend correrá en:

  http://localhost:5173

🔗 Comunicación Frontend – Backend

El frontend se comunica con el backend mediante Axios, a través del endpoint:

    GET http://localhost:3000/api/mascotas


La respuesta es un arreglo JSON de mascotas, por ejemplo:

    [
      { "id": 1, "nombre": "Luna", "especie": "Perro", "estado": "En adopción" },
      { "id": 2, "nombre": "Max", "especie": "Gato", "estado": "Adoptado" }
    ]

🧪 Endpoints principales

    GET /api/mascotas → Lista todas las mascotas.
    (Escalable) POST /api/mascotas, PUT /api/mascotas/:id, DELETE /api/mascotas/:id.

📦 Despliegue
Frontend
  Netlify 
  Vercel

Backend
  Render
  Railway
  Render/AWS/Heroku (según recursos del curso)

👨‍💻 Autor

Estudiante: William Javier Amaya Castaño
Proyecto académico: HappyPaws Web II
Institución: Corporación Universitaria Iberoamericana
