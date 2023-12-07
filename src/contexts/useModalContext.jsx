import { createContext, useContext } from 'react';

import PropTypes from 'prop-types';
const ModalContext = createContext();

export const ModalProvider = ({ children, closeModal }) => {
  return (
    <ModalContext.Provider value={{ closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};
