import { publicInstance } from './axios';

export const getPresignedDeleteURL = async (fileName, category) => {
  try {
    const response = await publicInstance.get(
      `/files/s3-presigned-delete-url`,
      {
        params: { fileName, category },
      }
    );
    return response.data.url;
  } catch (error) {
    console.error('Error in getPresignedURL:', error);
    throw error;
  }
};
