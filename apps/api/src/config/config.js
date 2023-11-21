import "dotenv/config";

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import db from "../db/connection.js";

import { clientRoutes } from "../routes/index.js";

class ServerConfig {
    constructor() {
        // Init Server
        this.app = express();
        this.port = process.env.PORT || 3000;

        // Public
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.join(this.__filename, "../../../", "../client/dist");
        
        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        // DB
        this.db();
    }

    async db() {
        try {
            await db.authenticate();
            console.log("Database connected sucessfully!");
        } catch (error) {
            throw new Error(
                `Something failed while trying to connect to db: ${error}`
            );
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(this.__dirname));
    }

    routes() {
        this.app.use("/api/clients", clientRoutes);
        this.app.use("*", (req, res) => {
            res.status(404).json({
                statusCode: 404,
                message: "Not found.",
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

export default ServerConfig;
