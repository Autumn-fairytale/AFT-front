export const getError = (statusCode) => {
  switch (statusCode) {
    case 400:
      return 'Validation failed';
    case 401:
      return 'Invalid email or password';
    case 403:
      return 'This account is blocked';
    case 409:
      return 'User with this email already exists';
    default:
      return 'An error occurred';
  }
};
