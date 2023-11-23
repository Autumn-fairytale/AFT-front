import { useCallback, useState } from 'react';

import { AppButton, AppSearchInput, AppSelect } from '@/shared';
import { HeroSearchBarFormStyled } from './HeroSearchBar.styled';

const searchType = Object.freeze({
  chef: 'Chef',
  dish: 'Dish',
});

const HeroSearchBar = () => {
  const [type, setType] = useState(searchType.dish);
  const [query, setQuery] = useState('');

  const changeTypeHandler = useCallback((evt) => {
    setType(evt.target.value);
  }, []);
  const changeQueryHandler = useCallback((evt) => {
    setQuery(evt.target.value);
  }, []);

  return (
    <HeroSearchBarFormStyled>
      <AppSelect
        options={Object.values(searchType)}
        onChange={changeTypeHandler}
        value={type}
      />
      <AppSearchInput
        value={query}
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{ style: { flexGrow: 1, backgroundColor: 'white' } }}
        onChange={changeQueryHandler}
      />
      <AppButton label="Search" sx={{ width: '400px' }} />
    </HeroSearchBarFormStyled>
  );
};

export default HeroSearchBar;
