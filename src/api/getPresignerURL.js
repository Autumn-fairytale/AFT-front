import { publicInstance } from './axios';

export const getPresignedURL = async (fileName, fileType) => {
  try {
    const response = await publicInstance.get(`/s3/s3-presigned-url`, {
      params: { fileName, fileType },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error in getPresignedURL:', error);
    throw error;
  }
};
