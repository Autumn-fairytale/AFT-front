import { useEffect, useState } from 'react';

import axios from 'axios';

import { getPresignedURL } from '@/api';

export const useS3ImageUploader = (fileName, fileType, category) => {
  const [presignedUrl, setPresignedUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loadingUrl, setLoadingUrl] = useState(false);
  const [error, setError] = useState(null);

  // Fetching presigned url
  useEffect(() => {
    const fetchURL = async () => {
      if (!fileName || !fileType || !category) return;

      setLoadingUrl(true);
      try {
        const url = await getPresignedURL(fileName, fileType, category);
        setPresignedUrl(url);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingUrl(false);
      }
    };

    fetchURL();
  }, [fileName, fileType, category]);

  // Upload
  const uploadToS3 = async (blob) => {
    if (!presignedUrl) {
      setError(new Error('No presigned URL available for upload'));
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const response = await axios.put(presignedUrl, blob, {
        headers: {
          'Content-Type': fileType || 'image/jpeg',
        },
      });

      if (response.status !== 200) {
        throw new Error('Error uploading image to S3');
      }

      console.log('Image successfully uploaded to S3');
      return response;
    } catch (uploadError) {
      setError(uploadError);
      throw uploadError;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadToS3, isUploading, loadingUrl, error };
};
