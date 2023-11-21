import { Sequelize } from "sequelize";

const root = process.env.DB_USER ?? "root";
const password = process.env.DB_PASSWORD ?? "admin";

const db = new Sequelize("clientsdb", root, password, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

export default db;
