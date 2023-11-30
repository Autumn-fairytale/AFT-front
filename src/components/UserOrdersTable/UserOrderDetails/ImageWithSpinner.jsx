import { useState } from 'react';

import { Box, CircularProgress } from '@mui/material';

import PropTypes from 'prop-types';

export const ImageWithSpinner = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '200px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {loaded && <CircularProgress size={48} />}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: loaded ? 'block' : 'none',
        }}
        onLoad={() => setLoaded(true)}
      />
    </Box>
  );
};

ImageWithSpinner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
