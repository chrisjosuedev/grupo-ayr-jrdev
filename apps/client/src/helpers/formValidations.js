export const fullNameValidations = {
    required: {
        value: true,
        message: "Nombre Completo es requerido.",
    },
    minLength: {
        value: 2,
        message: "Nombre debe contener al menos 2 caracteres.",
    },
    maxLength: {
        value: 64,
        message: "Nombre debe contener menos de 64 caracteres.",
    },
    pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Nombre inválido.",
    },
};

export const emailValidations = {
    required: {
        value: true,
        message: "Email es requerido.",
    },
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Formato de Email inválido.",
    },
};

export const phoneValidations = {
    required: {
        value: true,
        message: "Teléfono es requerido."
    },
    maxLength: {
        value: 15,
        message: "Teléfonos válidos constan de menos de 15 caracteres.",
    },
    pattern: {
        value: /^\d+$/,
        message: "Formato de Teléfono inválido."
    }
};

export const addressValidations = {
    required: {
        value: true,
        message: "Dirección es requerida.",
    },
    minLength: {
        value: 2,
        message: "Dirección debe contener al menos 2 caracteres.",
    },
    maxLength: {
        value: 64,
        message: "Dirección debe contener menos de 155 caracteres.",
    }
};
