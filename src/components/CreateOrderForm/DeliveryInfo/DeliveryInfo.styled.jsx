import { Paper, styled, Typography } from '@mui/material';

export const DeliveryInfoSectionStyled = styled(Paper)({
  flexGrow: 1,

  padding: '20px',
});

DeliveryInfoSectionStyled.defaultProps = {
  component: 'section',
};

export const DeliveryGroupTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',

  // width: 'fit-content',

  fontWeight: 600,
  fontStyle: 'italic',

  '&::after': {
    content: '""',

    position: 'absolute',
    bottom: 0,
    left: 0,

    width: '40px',
    height: '2px',

    backgroundColor: `${theme.palette.primary.main}`,
  },
}));
DeliveryGroupTitle.defaultProps = {
  component: 'h3',
  variant: 'h6',
};
