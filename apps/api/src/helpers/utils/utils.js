export const onlyLetters = (value = "") => {
    if (isNaN(value)) return true;
    throw new Error(`Nombre solo permite letras.`);
};
