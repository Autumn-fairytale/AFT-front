import { FaCheck, FaTimes } from 'react-icons/fa';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

import PropTypes from 'prop-types';

import { passwordPattern } from '@/schemas/patterns';
const { lowerCase, upperCase, digit, specialSymbol, length } = passwordPattern;

// password validation functions
const isLowerCase = (str) => lowerCase.test(str);
const isUpperCase = (str) => upperCase.test(str);
const hasDigit = (str) => digit.test(str);
const hasSpecialChar = (str) => specialSymbol.test(str);
const isValidLength = (str) => length.test(str);

// rules container
const RulesBlockStyled = styled(Box)({
  textAlign: 'start',
  padding: '0 0.6rem',
  marginBottom: '0.3rem',
});

// each rule line
export const RulesRowStyled = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const PasswordRule = ({ isValid, text }) => (
  <RulesRowStyled variant="body2" color={isValid ? 'green' : 'red'}>
    {isValid ? <FaCheck /> : <FaTimes />} {text}
  </RulesRowStyled>
);

export const PasswordHints = ({ passwordValue, showHints }) => {
  if (!showHints) {
    return null;
  }
  return (
    <RulesBlockStyled>
      <PasswordRule
        isValid={isLowerCase(passwordValue)}
        text="one lowercase letter"
      />
      <PasswordRule
        isValid={isUpperCase(passwordValue)}
        text="one uppercase letter"
      />
      <PasswordRule isValid={hasDigit(passwordValue)} text="one digit" />
      <PasswordRule
        isValid={hasSpecialChar(passwordValue)}
        text="one special character"
      />
      <PasswordRule
        isValid={isValidLength(passwordValue)}
        text="minimum length of 8 characters"
      />
    </RulesBlockStyled>
  );
};

PasswordHints.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  showHints: PropTypes.bool.isRequired,
};

PasswordRule.propTypes = {
  isValid: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
