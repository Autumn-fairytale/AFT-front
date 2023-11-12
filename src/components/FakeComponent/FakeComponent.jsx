import { useState } from 'react';

import ModalWindow from '../Modal/Modal';
import { ReviewForm } from '../ReviewForm/RewievForm';

export const FakeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      FakeComponent
      <button type="button" onClick={handleOpen}>
        LeaveFeedback
      </button>
      {isModalOpen && (
        <ModalWindow
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={isModalOpen}
        >
          <ReviewForm />
        </ModalWindow>
      )}
    </div>
  );
};
