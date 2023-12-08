import { publicInstance } from './axios';

export const getDishes = async ({
  search = '',
  cuisine = 'All',
  isVegan = 'All',
  category = 'All',
  spiceLevel = 'null',
  pageParam = 1,
  limit = 10,
}) => {
  let queryString = '';

  if (search !== undefined && search !== '') {
    queryString += `name=${search}&`;
  }

  if (cuisine !== undefined && cuisine !== 'All') {
    queryString += `cuisine=${cuisine}&`;
  }

  if (isVegan !== undefined && isVegan !== 'All') {
    queryString += `isVegan=${isVegan}&`;
  }

  if (category !== undefined && category !== 'All') {
    queryString += `category=${category}&`;
  }

  if (spiceLevel !== undefined && spiceLevel !== 'null') {
    queryString += `spiceLevel=${spiceLevel}&`;
  }

  queryString = queryString.replace(/&$/, '');

  const { data } = await publicInstance.get(
    `/dishes?page=${pageParam}&limit=${limit}&${queryString}`
  );

  return data;
};
