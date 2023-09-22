export const isStringLessThenMaxLength = (
  tags: string[],
  maxLength: number
) => {
  const invalidTag = tags.find((tag) => tag.length > maxLength);
  if (invalidTag) {
    return {
      isValid: false,
      reason: `Tag exceeds the maximum length of ${maxLength} characters`,
    };
  }
  return { isValid: true };
};

export const isStringMatchesRegex = (tags: string[], regExp: RegExp) => {
  const invalidTag = tags.find((tag) => {
    const tagWithoutHash = tag.replace(/^#/, "");
    return tagWithoutHash === "" || !regExp.test(tagWithoutHash);
  });

  if (invalidTag) {
    return {
      isValid: false,
      reason: `Tag can only contain Latin characters and cannot contain special symbols.`,
    };
  }
  return { isValid: true };
};

export interface IValidationResult {
  isValid: boolean;
  reason?: string;
}

export const isAllStringValid = (
  tags: string[],
  maxLength: number,
  regExp: RegExp
): IValidationResult => {
  const lengthValidation = isStringLessThenMaxLength(tags, maxLength);
  if (!lengthValidation.isValid) {
    return lengthValidation;
  }

  const regexValidation = isStringMatchesRegex(tags, regExp);
  if (!regexValidation.isValid) {
    return regexValidation;
  }

  return { isValid: true };
};
