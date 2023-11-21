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
- [Review Documentation](https://documenter.getpostman.com/view/21748987/2s93m354Jn) 

## 🚀 Setup
> Para ejecutar el servidor REST, es necesario que realice las siguientes configuraciones. 

1. Clone this project: `git clone https://github.com/chrisjosuedev/grocery-rest-api.git`
2. Go to the project folder:
   `cd grocery-rest-api`
3. Run `init.sql` script from init folder via mysql.
4. Do some configuration:
   > Configure a [Twilio Account](https://documentation.onesignal.com/docs/twilio-setup) and get your SID and TOKEN
   > and create or use an Outlook account that will serve as the email server sender for the generated emails (If you want
   > use other email service, check NOTES below.

   Once your Twilio Account and Email is ready, create the follow environment variables:
    - OUTLOOK_EMAIL: YOUR_EMAIL
    - OUTLOOK_PASSWORD: YOUR_EMAIL_PASSWORD
    - TWILIO_ACCOUNT_SID: YOUR_TWILIO_SID
    - TWILIO_AUTH_TOKEN: YOUR_TWILIO_TOKEN

## 🛠 Run

1. Once the dependencies are installed, you can run via IDE or Maven.
2. Test Endpoints via Postman (or your preferred API tester) on port 9090: `http://localhost:9090/api/v1/...`
   > Please check the documentation (Postman/Swagger) above to see the available endpoints and change `Dev Env`

## 🔗 Notas Importantes
> If you want to use other Mail Service, please check [Spring Email](https://www.baeldung.com/spring-email) and change
> `host: your_service`, `username` and `password` from `application.yml` with new data.

Remember change env local variable `env: MAIL: ${YOUR_ENV_NAME}` in `application.yml`.
