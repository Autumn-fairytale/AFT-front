import { useState } from 'react';

import Rating from '@mui/material/Rating';

export const ReviewForm = () => {
  const [value, setValue] = useState(0);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Rrewiev submit');
  };

  return (
    <form onSubmit={handleFeedbackSubmit}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
