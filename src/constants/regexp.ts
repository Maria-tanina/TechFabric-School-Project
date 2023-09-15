export const NAME_REGEX = /^(?!.*\s)[A-Z][a-z]*(?<!\s)$/;

export const PASSWORD_REGEX =
    /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}(?<!\s)$/;
