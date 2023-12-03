import { useEffect, useState } from 'react';

import { getPresignedURL } from '@/api';

export const usePresignedURL = (fileName, fileType) => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchURL = async () => {
      setLoading(true);
      try {
        const presignedUrl = await getPresignedURL(fileName, fileType);

        setUrl(presignedUrl);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (fileName && fileType) {
      fetchURL();
    }
  }, [fileName, fileType]);

  return { url, loading, error };
};
