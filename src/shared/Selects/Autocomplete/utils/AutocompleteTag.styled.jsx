import CloseIcon from '@mui/icons-material/Close';
import { lighten, styled } from '@mui/material/styles';

import PropTypes from 'prop-types';

const Tag = (props) => {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 28px;
  line-height: 20px;
  background-color: ${lighten(theme.palette.primary.light, 0.2)};
  border: 1px solid ${lighten(theme.palette.primary.light, 0.1)};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    background-color: ${theme.palette.primary.light};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);
