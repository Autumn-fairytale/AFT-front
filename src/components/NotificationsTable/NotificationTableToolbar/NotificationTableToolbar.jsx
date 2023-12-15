import { useState } from 'react';
import { useSelector } from 'react-redux';

import { FormControlLabel, MenuItem, Select, Switch } from '@mui/material';
import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';

import { selectRoles } from '@/redux/auth/selectors';
import { NotificationTableToolbarProps } from './NotificationTableToolbar.props';

export const NotificationTableToolbar = ({ onFilterChange }) => {
  const roles = useSelector(selectRoles);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    onFilterChange('role', event.target.value);
  };

  const allRoles = {
    user: 'User',
    chef: 'Chef',
    courier: 'Courier',
  };

  const roleMenuItems = Object.entries(allRoles)
    .filter(([key]) => roles.includes(key))
    .map(([key, name]) => (
      <MenuItem key={key} value={key}>
        {name}
      </MenuItem>
    ));

  return (
    <GridToolbarContainer
      sx={{
        justifyContent: 'space-between',
      }}
    >
      <Select
        value={selectedRole}
        onChange={handleRoleChange}
        displayEmpty
        sx={{ width: 150 }}
      >
        <MenuItem value="">All roles</MenuItem>
        {roleMenuItems}
      </Select>
      <FormControlLabel
        control={
          <Switch onChange={(e) => onFilterChange('read', e.target.checked)} />
        }
        label="Show read"
        sx={{ flexGrow: 1 }}
      />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};

NotificationTableToolbar.propTypes = NotificationTableToolbarProps;
