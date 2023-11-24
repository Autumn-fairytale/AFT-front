import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { route } from '@/constants';
import { AppSearchInput, AppSelect } from '@/shared';
import {
  HeroSearchBarFormStyled,
  HeroSearchButtonStyles,
} from './HeroSearchBar.styled';

const searchType = Object.freeze({
  CHEF: 'Chef',
  DISH: 'Dish',
});

const HeroSearchBar = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(searchType.DISH);
  const [query, setQuery] = useState('');

  const changeTypeHandler = useCallback((evt) => {
    setType(evt.target.value);
  }, []);
  const changeQueryHandler = useCallback((evt) => {
    setQuery(evt.target.value);
  }, []);
  const submitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      const searchQuery = query.trim();

      navigate(
        `${
          type === searchType.CHEF ? route.CHEFS : route.DISHES
        }?search=${searchQuery}`
      );
    },
    [navigate, query, type]
  );

  return (
    <HeroSearchBarFormStyled onSubmit={submitHandler}>
      <AppSelect
        options={Object.values(searchType)}
        onChange={changeTypeHandler}
        value={type}
        wrapperStyle={{ width: '150px' }}
      />
      <AppSearchInput
        label=""
        value={query}
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{ style: { width: '300px' } }}
        onChange={changeQueryHandler}
      />
      <HeroSearchButtonStyles type="submit" label="Search" />
    </HeroSearchBarFormStyled>
  );
};

export default HeroSearchBar;
