/* eslint-disable react/prop-types */
import { Tab, Tabs } from '@mui/material';

export const DishOrderCardTabs = ({ tabValue, handleTabChange }) => {
  return (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      centered
      sx={{
        '.MuiTab-root': {
          minHeight: '36px',
          padding: 1,
          margin: '0px',
          textTransform: 'none',
        },

        '.MuiTabs-indicator': {
          top: 32,
          bottom: 0,
          height: '3px',
          position: 'absolute',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
        },
      }}
    >
      <Tab label="Description" />
      <Tab label="Main ingredients" />
    </Tabs>
  );
};
