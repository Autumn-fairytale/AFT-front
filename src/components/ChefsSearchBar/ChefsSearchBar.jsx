import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import { SearchWrapper } from './ChefsSearchBar.styled';

export const ChefsSearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleInputChange = (e) => {
    setSearchParams({ ...params, [e.target.name]: e.target.value });
  };

  return (
    <SearchWrapper>
      <TextField
        label="Name"
        value={params.search || ''}
        name="search"
        onChange={handleInputChange}
      />
      {/* <AppSelect
        options={[...CATEGORIES, 'All']}
        label={'Category'}
        name="category"
        onChange={handleInputChange}
        value={params.category || ''}
      />
      <AppSelect
        options={[...CUISINES, 'All']}
        label={'Cuisine'}
        name="cuisine"
        onChange={handleInputChange}
        value={params.cuisine || ''}
      />
      <AppSelect
        options={['Vegan', 'Not vegan', 'All']}
        label={'Vegan type'}
        name="type"
        onChange={handleInputChange}
        value={params.type || ''}
      /> */}
    </SearchWrapper>
  );
};
