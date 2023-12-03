export const validateFile = (file, { maxSize, validTypes }) => {
  if (maxSize && file.size > maxSize) {
    return { isValid: false, error: 'The file is too big' };
  }
  if (validTypes && !validTypes.some((type) => file.type.startsWith(type))) {
    return { isValid: false, error: 'Bad file format' };
  }
  return { isValid: true };
};
