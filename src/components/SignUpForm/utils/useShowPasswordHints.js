import { useEffect, useState } from 'react';

export const useShowPasswordHints = (errors) => {
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  useEffect(() => {
    setShowPasswordHints(!!errors?.password);
  }, [errors?.password]);

  return showPasswordHints;
};
