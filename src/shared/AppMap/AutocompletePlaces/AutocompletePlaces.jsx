import useOnclickOutside from 'react-cool-onclickoutside';

import { List, ListItem, TextField } from '@mui/material';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { theme } from '@/theme';
import { css } from '@emotion/css';
import { AutocompletePlacesPropTypes } from './AutocompletePlaced.props';

const AutocompletePlaces = ({ autocompletePlacesProps, onSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: true,
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });
  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => onSelect({ lat, lng }))
        .catch((error) => {
          console.log(error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ListItem
          key={place_id}
          onClick={handleSelect(suggestion)}
          className={css`
            gap: 5px;
          `}
        >
          <h4>{main_text}</h4>
          <h5>{secondary_text}</h5>
        </ListItem>
      );
    });
  return (
    <>
      <div
        ref={ref}
        className={css`
          position: relative;
        `}
      >
        <TextField
          label="Address"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          style={{ width: autocompletePlacesProps.width, margin: '5px 0px' }}
        />
        {status === 'OK' && (
          <List
            className={css`
              position: absolute;
              z-index: 1000;
              background: ${theme.palette.background.paper};
              width: ${autocompletePlacesProps.width};
            `}
          >
            {renderSuggestions()}
          </List>
        )}
      </div>
    </>
  );
};

AutocompletePlaces.propTypes = AutocompletePlacesPropTypes;

export default AutocompletePlaces;
