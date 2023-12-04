import { IconButton, List, ListItem } from '@mui/material';

import styled from '@emotion/styled';

export const ListStyled = styled(List)`
  display: flex;
  gap: 8px;
`;

export const ListItemStyled = styled(ListItem)`
  margin: 0;
  padding: 0;
`;

export const IconButtonStyled = styled(IconButton)`
  color: #ff7622;
  transition: all 200ms linear;
  &:hover {
    color: white;
    background-color: #ff7622;
  }
`;
