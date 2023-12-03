import { publicInstance } from './axios';

export const getPresignedDeleteURL = async (fileName) => {
  try {
    const response = await publicInstance.get(`/s3/s3-presigned-delete-url`, {
      params: { fileName },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error in getPresignedURL:', error);
    throw error;
  }
};
