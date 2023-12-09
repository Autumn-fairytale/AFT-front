import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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
      <FormControl>
        <FormLabel id="radio-buttons-group-label">Status</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          name="status"
          onChange={handleInputChange}
          value={params.status || 'all'}
        >
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel
            value="non-active"
            control={<Radio />}
            label="Non active"
          />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
    </SearchWrapper>
  );
};
