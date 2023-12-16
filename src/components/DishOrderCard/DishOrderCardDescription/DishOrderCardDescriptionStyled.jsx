import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const DescriptionCard = styled(Card)(({ expanded }) => ({
  height: '100%',
  overflowY: expanded ? 'scroll' : 'hidden',
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.2)',
}));

export const DescriptionTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&[data-expanded="true"]': {
    WebkitLineClamp: 'none',
  },
});

export const ExpandButton = styled(Button)({
  textTransform: 'none',
  marginTop: '8px',
  padding: 0,
  margin: 0,
});
