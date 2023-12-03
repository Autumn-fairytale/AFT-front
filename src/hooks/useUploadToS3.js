import { useState } from 'react';

import axios from 'axios';

export const useUploadToS3 = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadToS3 = async (blob, presignedUrl) => {
    setIsUploading(true);
    setError(null);

    try {
      const response = await axios.put(presignedUrl, blob, {
        headers: {
          'Content-Type': 'image/jpeg',
        },
      });

      if (response.status !== 200) {
        throw new Error('Error uploading image to S3');
      }

      console.log('Image successfully uploaded to S3');
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadToS3, isUploading, error };
};
