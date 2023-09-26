export const NAME_REGEX = /^(?!.*\s)[A-Z][a-z]*(?<!\s)$/;

export const PASSWORD_REGEX =
  /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}(?<!\s)$/;

export const EMAIL_REGEX =
  /^(?!.*\.{2,})(?!.*[-_%+]{2,})(?!^[^A-Za-z0-9]+)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(?:\.[A-Za-z-]+)+$/;

export const TAG_REGEX = /^#?[A-Za-z0-9]*$/;
