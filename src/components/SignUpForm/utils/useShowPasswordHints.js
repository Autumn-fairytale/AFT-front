import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const useShowPasswordHints = (errors, fieldName) => {
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  useEffect(() => {
    setShowPasswordHints(!!errors?.[fieldName]);
  }, [errors?.[fieldName]]);

  return showPasswordHints;
};

useShowPasswordHints.defaultProps = {
  fieldName: 'password',
};

useShowPasswordHints.propTypes = {
  errors: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
};
