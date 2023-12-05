import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { CATEGORIES, CUISINES } from '@/constants';
import { AppSelect } from '@/shared';
import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';
import { useTheme } from '@emotion/react';

export const DishesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams:', searchParams);

  const theme = useTheme();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleInputChange = (e) => {
    setSearchParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setSearchParams({
      ...params,
      [e.target.name]: !JSON.parse(params?.isVegan || 'false'),
    });
  };

  return (
    <div>
      <h5>DishesFilter</h5>
      <div style={{ display: 'flex', gap: '15px' }}>
        <AppSelect
          options={CATEGORIES}
          label={'Category'}
          name="categories"
          onChange={handleInputChange}
          value={params.categories || ''}
        />
        <AppSelect
          options={CUISINES}
          label={'Cuisine'}
          name="cuisines"
          onChange={handleInputChange}
          value={params.cuisines || ''}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={JSON.parse(params?.isVegan || false)}
              onChange={handleCheckboxChange}
              name="isVegan"
              sx={{
                color: theme.palette.primary.main,
                '&.Mui-checked': {
                  color: theme.palette.primary.main,
                },
              }}
            />
          }
          label="Vegan"
        />
        <div style={{ border: '1px solid red' }}>
          <AppSpiceLevel />
          <p>Spice level</p>
        </div>
      </div>
    </div>
  );
};
