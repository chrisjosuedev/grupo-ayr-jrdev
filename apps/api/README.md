# Gestión de Clientes RestAPI

<p style="justify-content: center">
   <img src="https://img.shields.io/badge/versión-v1.0-blue.svg" alt="version">
   <img src="https://img.shields.io/badge/status-completed-green" alt="status">
</p>

✨ Rest API desarrollado para gestión de clientes. | Prueba Técnica Grupo AyR.

## ⚡️ Descripción
Bienvenido al servidor de la API de esta prueba técnica, diseñado para gestionar operaciones fundamentales (CRUD) relacionadas con clientes y busquedas. Aquí encontrará los endpoints específicamente creados para el ingreso, actualización y eliminación de información de clientes, asi como el listado y paginación. La RestAPI utiliza MySQL como base de datos para almacenar y recuperar datos. Además de JavaScript, especificamente Node.js y Express.js, garantizamos un rendimiento robusto y una interfaz de programación de aplicaciones (API) fácil de usar. Los endpoints exploran las capacidades y simplifica la gestión de clientes.


## 👨‍💻 Documentation OpenAPI

> Colección de los endpoints disponibles para gestión de Clientes.
- [Review Documentation](https://documenter.getpostman.com/view/21748987/2s9YeAAuqh) 

## 🚀 Setup

> Configuracion de Proyecto

1. Tener instalado Nodejs (+16) y MySQL.
2. Clonar el proyecto: `git clone https://github.com/chrisjosuedev/grupo-ayr-jrdev.git` (Omitir este paso si cuenta con el .zip del proyecto)
3. Entrar a la carpeta raiz del proyecto:
   `cd jrdev-prueba-cristhian-martinez`
3. En la carpeta `scripts/init.sql` se encuentra el script sql que contiene la creación de la base de datos, asi como la tabla principal y algunos datos. Ejecute el script `init.sql` de dicha carpeta ya sea vía ``mysql -u <su_usuario> -p`` y ``source scripts/init.sql`` o mediante su GUI favorito (Ej. Workbench)
4. Si clonó el proyecto desde git, instalar los módulos de node vía `npm install` en la carpeta root del proyecto ``.../jrdev-prueba-cristhian-martinez/``.

> Para ejecutar el servidor REST, es necesario que realice las siguientes configuraciones. 
1. Cambie en archivo `env` el PORT por el deseado y disponible, DB_USER por su usuario de base de datos y DB_PASSWORD por su contraseña de base de datos.
2. Una vez realizadas las configuraciones anteriores, puede correr el servicio mediante:
    - `npm start` para modo producción.
    - `npm run dev` para desarrollo.
3. Una vez realizado, el proyecto se ejecutara y puede acceder a través del puerto que selecciono, si no aporta, se ejecuta en :9090 por default.

