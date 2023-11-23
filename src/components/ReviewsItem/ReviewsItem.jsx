import { ReviewsItemProps } from './ReviewsItem.props';

export const ReviewsItem = ({ review }) => {
  return (
    <li>
      <div
        style={{
          width: '30px',
          height: '30px',
          border: '1px solid red',
          borderRadius: '50%',
        }}
      >
        AV
      </div>
      <p>{review.review}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = ReviewsItemProps;
