import Client from "../models/Client.js";

export const findAllClients = async (req, res) => {
    const { limit, from } = req.query;
    try {
        let query = {
            where: { isActive: true },
        };

        if (from && !isNaN(from)) query.offset = Number(from);
        if (limit && !isNaN(limit)) query.limit = Number(limit);

        const findAll = await Client.findAll(query);

        res.status(200).json({
            statusCode: 200,
            message: "Listado de Clientes.",
            data: {
                count: findAll.length,
                clients: findAll,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed: ${error}`,
        });
    }
};

export const findClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const findClient = await Client.findOne({ where: { id } });
        res.status(200).json({
            statusCode: 200,
            message: "Cliente encontrado satisfactoriamente.",
            data: findClient,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed: ${error}`,
        });
    }
};

export const saveClient = async (req, res) => {
    const { fullName, address, phone, email } = req.body;
    try {
        const newClient = await Client.create({
            fullName,
            address,
            phone,
            email,
        });

        res.status(201).json({
            statusCode: 201,
            message: "Cliente creado satisfactoriamente.",
            data: newClient,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed: ${error}`,
        });
    }
};

export const updateClient = async (req, res) => {
    const { fullName, address, phone, email } = req.body;
    const { id } = req.params;
    try {
        // Check if its user email
        const isUserEmail = await Client.findOne({ where: { email, id } });
        if (isUserEmail) {
            await Client.update(
                { fullName, address, phone },
                {
                    where: { id },
                }
            );
            const clientUpdated = await Client.findOne({ where: { id } });

            return res.status(200).json({
                statusCode: 200,
                message: "Cliente actualizado satisfactoriamente.",
                data: clientUpdated,
            });
        }

        // Not user Email, check Availability
        const emailExists = await Client.findOne({ where: { email } });

        if (emailExists) {
            return res.status(403).json({
                statusCode: 403,
                message: `Existe un registro con el email: ${email}.`,
            });
        }

        await Client.update(
            { fullName, address, phone, email },
            {
                where: { id },
            }
        );

        const clientUpdated = await Client.findOne({ where: { id } });
        res.status(200).json({
            statusCode: 200,
            message: "Cliente actualizado satisfactoriamente.",
            data: clientUpdated,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed: ${error}`,
        });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await Client.update(
            { isActive: false },
            {
                where: { id },
            }
        );
        res.status(200).json({
            statusCode: 200,
            message: "Cliente eliminado satisfactoriamente.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: `Something failed: ${error}`,
        });
    }
};
