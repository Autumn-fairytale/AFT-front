export const getError = (errorMessage) => {
  const containsWord = (targetWord) => {
    const pattern = new RegExp(`\\b${targetWord}\\b`, 'i');
    return pattern.test(errorMessage);
  };

  if (containsWord('invalid') || containsWord('validation')) {
    return 'Invalid email or password';
  } else if (containsWord('blocked')) {
    return 'This account is blocked';
  } else if (containsWord('exists')) {
    return 'User with this email already exists';
  } else {
    return 'An error occurred';
  }
};
