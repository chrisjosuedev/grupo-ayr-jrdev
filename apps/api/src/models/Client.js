import { DataTypes } from "sequelize";
import db from "../db/connection.js";

const Client = db.define(
    "Client",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        fullName: {
            type: DataTypes.STRING(64),
            allowNull: false,
            field: "full_name",
        },
        address: {
            type: DataTypes.STRING(155),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: "is_active",
            defaultValue: true,
        },
    },
    {
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    }
);

export default Client;
