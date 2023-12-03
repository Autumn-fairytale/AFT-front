import { useEffect, useState } from 'react';

import axios from 'axios';

import { getPresignedDeleteURL } from '@/api/getPresignedDeleteUrl';

export const usePresignedDeleteURL = (fileName) => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchDeleteURL = async () => {
      if (!fileName) return;

      setLoading(true);
      try {
        const presignedUrl = await getPresignedDeleteURL(fileName);

        setUrl(presignedUrl);
        setDeleted(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeleteURL();
  }, [fileName]);

  const deleteFile = async () => {
    if (!url) return;

    setLoading(true);
    try {
      await axios.delete(url);

      setDeleted(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteFile, loading, error, deleted };
};
