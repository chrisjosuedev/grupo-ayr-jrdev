import { Sequelize } from "sequelize";

const db = new Sequelize(
    "clientsdb",
    process.env.DB_USER ?? "root",
    process.env.DB_PASSWORD ?? "admin",
    {
        host: "localhost",
        dialect: "mysql",
        logging: false
    }
);

export default db;
