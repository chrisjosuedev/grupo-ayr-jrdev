import Client from "../models/Client.js";

export const existEmail = async (req, res, next) => {
    const { email } = req.body;
    const emailExists = await Client.findOne({ where: { email } });
    if (emailExists) {
        return res.status(403).json({
            statusCode: 403,
            message: `Existe un registro con el email: ${email}.`,
        });
    }
    return next();
};

export const clientExists = async (req, res, next) => {
    const { id } = req.params;
    const isClient = await Client.findOne({ where: { id, isActive: true } });

    if (!!isClient) return next();

    return res.status(404).json({
        statusCode: 404,
        message: `Cliente con ID ${id} no existe.`,
    });
};
