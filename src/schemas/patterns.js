// password
export const passwordPattern = {
  full: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*_+|~\-={}:;'"<>,.?!])[A-Za-z\d@#$%^&*_+|~\-={}:;'"<>,.?!]{8,}$/,
  lowerCase: /[a-z]/,
  upperCase: /[A-Z]/,
  digit: /[0-9]/,
  specialSymbol: /[@#$%^&*_+|~\-={}:;'"<>,.?!]/,
  length: /^.{8,}$/,
};
