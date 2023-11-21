# Prueba Desarrollador Grupo AyR

<p style="justify-content: center">
   <img src="https://img.shields.io/badge/versión-v1.0-blue.svg" alt="version">
   <img src="https://img.shields.io/badge/status-completed-green" alt="status">
</p>

✨ Gestión de Información de Clientes.

## ⚡️ Descripción
El siguiente proyecto es una prueba para la oferta de desarrollador en Grupo AyR. Consiste basicamente en la gestión de la información de los clientes. El proyecto fue desarrollado en JavaScript (Nodejs) tanto en el backend, usando Expressjs y el servicio del frontend Reactjs, con MySQL como gestor de base de datos.


## 📌 Estructura del Proyecto
> El proyecto tiene la siguiente estructura:

```bash
├── node_modules
├── apps
│   ├── api
│   ├── client
├── scripts
│   ├── init.sql
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── turbo.json
```

La carpeta ``apps`` contiene los servicios backend en la carpeta ``api`` y frontend ``client``. Si desea más información de cada uno, estos cuentan con su `README.md` con más información.

## 🚀 Setup
Para ejecutar la aplicación es necesario que realize unas configuraciones previas:

> Configuracion de Proyecto

1. Tener instalado Nodejs (+16) y MySQL.
2. Clonar el proyecto: `git clone https://github.com/chrisjosuedev/grupo-ayr-jrdev.git` (Omitir este paso si cuenta con el .zip del proyecto)
3. Entrar a la carpeta raiz del proyecto:
   `cd jrdev-prueba-cristhian-martinez`
3. En la carpeta `scripts/init.sql` se encuentra el script sql que contiene la creación de la base de datos, asi como la tabla principal y algunos datos. Ejecute el script `init.sql` de dicha carpeta ya sea vía ``mysql -u <su_usuario> -p`` y ``source scripts/init.sql`` o mediante su GUI favorito (Ej. Workbench)
4. Si clonó el proyecto desde git, instalar los módulos de node vía `npm install` en la carpeta root del proyecto ``.../jrdev-prueba-cristhian-martinez/``.

> Configuración de credenciales de la base de datos:
1. Acceda a la carpeta `db` que se encuentra en ``/apps/api/src/db/connection.js``, cambie "root" por su usuario y "admin" por su contraseña de mysql.

![DB Config](https://github.com/chrisjosuedev/my-assets/blob/main/readms/db-config.PNG?raw=true)

> 🛠 Ejecutar
1. Una vez realizadas las configuraciones anteriores, puede correr el proyecto en modo de desarrollo o de produccion (en root del proyecto ``.../jrdev-prueba-cristhian-martinez/``):
    - `npm start` para modo producción.
    - `npm run dev` para modo desarrollo.

## 🔗 Notas Importantes
> Para más detalle sobre cada servicio, revisar README.md disponibles en cada proyecto.
