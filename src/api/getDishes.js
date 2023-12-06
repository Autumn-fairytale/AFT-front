import { publicInstance } from './axios';

export const getDishes = async ({
  search,
  cuisine,
  isVegan,
  category,
  spiceLevel,
}) => {
  let queryString = '';

  console.log('search:', search);

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

  const { data } = await publicInstance.get(`/dishes?${queryString}`);

  return data;
};
