import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const useShowPasswordHints = (errors, fieldName = 'password') => {
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  useEffect(() => {
    setShowPasswordHints(!!errors?.[fieldName]);
  }, [errors?.[fieldName]]);

  return showPasswordHints;
};

useShowPasswordHints.propTypes = {
  errors: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
};
