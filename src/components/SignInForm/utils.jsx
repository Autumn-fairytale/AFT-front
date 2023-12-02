import { useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import PropTypes from 'prop-types';

export const getError = (errorMessage) => {
  const containsWord = (targetWord) => {
    const pattern = new RegExp(`\\b${targetWord}\\b`, 'i');
    return pattern.test(errorMessage);
  };
  if (containsWord('invalid') || containsWord('validation')) {
    return 'Invalid email or password';
  } else if (containsWord('blocked')) {
    return 'This account is blocked';
  } else {
    return 'An error occurred';
  }
};

export const useIsSameData = () => {
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const isSameData = (newSubmittedData) => {
    const lastData = JSON.stringify(lastSubmittedData);
    const newData = JSON.stringify(newSubmittedData);
    const isSame = lastData === newData;
    if (!isSame) {
      setLastSubmittedData(newSubmittedData);
    }
    return isSame;
  };

  return isSameData;
};

export const LabelOrLoader = ({ isLoading, labelText }) => {
  let styles = { color: 'white', padding: '0.3em' };
  return isLoading ? <CircularProgress sx={{ ...styles }} /> : labelText;
};

LabelOrLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
};

LabelOrLoader.defaultProps = {
  labelText: 'Submit',
};
