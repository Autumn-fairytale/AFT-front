export const getError = (statusCode, type = 'auth') => {
  const isAuthForm = type === 'auth';
  switch (statusCode) {
    case 400:
      return 'Invalid data entered';
    case 401:
      return isAuthForm
        ? 'Invalid email or password'
        : 'Invalid current password';
    case 403:
      return 'This account is blocked';
    case 409:
      return 'User with this email already exists';
    default:
      return 'An error occurred';
  }
};
