import { useCallback, useEffect, useRef, useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

import {
  AvatarBox,
  Item,
  RatingBox,
  ReviewBox,
  ReviewText,
} from './ReviewItemStyled';
import { ReviewsItemProps } from './ReviewsItem.props';

export const ReviewsItem = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;

  const myElementRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleOutsideClick = useCallback((e) => {
    if (myElementRef.current && !myElementRef.current.contains(e.target)) {
      setExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);

      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [handleOutsideClick]);

  const truncatedText =
    review.review.length > maxLength
      ? `${review.review.substring(0, maxLength)} ......`
      : review.review;

  return (
    <Item>
      <AvatarBox>
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
      </AvatarBox>

      <RatingBox>
        <Rating
          name="text-feedback"
          size="small"
          value={review.rating}
          readOnly
          precision={1}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </RatingBox>
      <ReviewBox>
        <ReviewText
          ref={myElementRef}
          onClick={handleClick}
          expanded={expanded}
          possibleExpand={review.review.length > maxLength}
        >
          {expanded ? review.review : truncatedText}
        </ReviewText>
      </ReviewBox>
    </Item>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = ReviewsItemProps;
