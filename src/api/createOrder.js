import { publicInstance } from './axios';

export const createOrder = async (order) => {
  const { data } = await publicInstance.post('/orders', order, {
    // TODO: Delete mock data
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQ0NTc0YzY2OGEzMzQ2OGYwMDkwOSIsImlhdCI6MTcwMTA3MDg1MX0.xrFoszfqHDv_amb3Ec6kDvjsXztxkr7RpPJczn_x6Ss',
    },
  });

  return data;
};
