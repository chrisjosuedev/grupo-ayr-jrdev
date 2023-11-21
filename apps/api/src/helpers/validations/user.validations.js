import { check } from "express-validator";

import { onlyLetters } from "../../helpers/index.js";

export const fullNameValidations = [
    check("fullName", "Nombre completo es obligatorio.").not().isEmpty(),
    check("fullName").custom(onlyLetters),
    check("fullName", "Tamaño maximo del nombre es de 64 caracteres.").isLength(
        { max: 64 }
    ),
];

export const addressValidations = [
    check("address", "Dirección es obligatorio.").not().isEmpty(),
    check(
        "address",
        "Tamaño maximo de la dirección es de 64 caracteres."
    ).isLength({ max: 155 }),
];

export const phoneValidations = [
    check("phone", "Formato de Teléfono inválido.").isNumeric(),
    check(
        "phone",
        "Tamaño minimo y máximo del teléfono es de 8 y 15 respectivamente."
    ).isLength({ max: 15 }),
];

export const emailValidations = [
    check("email", "Email es inválido.").isEmail()
];
