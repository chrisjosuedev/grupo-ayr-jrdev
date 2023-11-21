import { Router } from "express";

import { fieldValidator } from "../middlewares/fieldValidator.js";

import {
    fullNameValidations,
    addressValidations,
    phoneValidations,
    emailValidations,
} from "../helpers/index.js";

import {
    deleteClient,
    findAllClients,
    findClientById,
    saveClient,
    updateClient,
} from "../controllers/index.js";

import { clientExists, existEmail } from "../middlewares/db.check.js";

const router = Router();

// Get All Clients
router.get("/", findAllClients);

// Get Client By Id
router.get("/:id", clientExists, findClientById);

// Create new Client
router.post(
    "/",
    [
        ...fullNameValidations,
        ...addressValidations,
        ...phoneValidations,
        ...emailValidations,
        fieldValidator,
        existEmail,
    ],
    saveClient
);

// Update Client by Id
router.put(
    "/:id",
    [
        clientExists,
        ...fullNameValidations,
        ...addressValidations,
        ...phoneValidations,
        ...emailValidations,
        fieldValidator,
    ],
    updateClient
);

// Delete Client
router.delete("/:id", clientExists, deleteClient);

export default router;
