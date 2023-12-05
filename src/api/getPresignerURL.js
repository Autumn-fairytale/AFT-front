import { publicInstance } from './axios';

export const getPresignedURL = async (fileName, fileType, category) => {
  try {
    const response = await publicInstance.get(`/files/s3-presigned-url`, {
      params: { fileName, fileType, category },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error in getPresignedURL:', error);
    throw error;
  }
};
