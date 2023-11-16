import { useState } from 'react';

/* Hook for managing password visibility state */
export const usePasswordShow = () => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};
