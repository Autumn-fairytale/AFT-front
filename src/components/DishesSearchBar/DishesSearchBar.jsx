import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import PepperIcon from '@mui/icons-material/Whatshot';
import TextField from '@mui/material/TextField';

import { CATEGORIES, CUISINES } from '@/constants';
import { AppSelect } from '@/shared';
import { AppSpiceLevelStyled } from '@/shared/AppSpiceLevel/AppSpiceLevelStyled';
import { useTheme } from '@emotion/react';
import { SearchWrapper, SpiceLevelWrapper } from './DishesSearchBar.styled';

export const DishesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();

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
      <AppSelect
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
      />
      <SpiceLevelWrapper>
        <AppSpiceLevelStyled
          name="spiceLevel"
          value={Number(params.spiceLevel)}
          precision={1}
          max={3}
          color={theme.palette.primary.main}
          icon={<PepperIcon />}
          emptyIcon={<PepperIcon />}
          onChange={(event, newValue) => {
            console.log('newValue:', newValue);
            console.log('event:', event.target.name);
            setSearchParams({
              ...params,
              [event.target.name]: newValue,
            });
          }}
        />
        <p>Spice level</p>
      </SpiceLevelWrapper>
    </SearchWrapper>
  );
};
