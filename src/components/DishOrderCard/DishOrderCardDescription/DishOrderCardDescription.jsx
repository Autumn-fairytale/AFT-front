import { DishOrderCardDescriptionProps } from './DishOrderCardDescription.props';
import {
  DescriptionCard,
  DescriptionTypography,
  ExpandButton,
} from './DishOrderCardDescriptionStyled';

export const DishOrderCardDescription = ({
  expanded,
  description,
  handleExpandClick,
}) => {
  return (
    <DescriptionCard elevation={0}>
      <DescriptionTypography variant="body2" color="text.secondary">
        {description}
      </DescriptionTypography>
      <ExpandButton onClick={handleExpandClick}>
        {expanded ? 'Less' : 'More'}
      </ExpandButton>
    </DescriptionCard>
  );
};

DishOrderCardDescription.propTypes = DishOrderCardDescriptionProps;
