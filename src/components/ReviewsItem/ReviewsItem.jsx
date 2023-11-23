import { useCallback, useEffect, useRef, useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import { format } from 'date-fns';

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
        <Avatar src={review.owner.avatar} />
      </AvatarBox>

      <RatingBox>
        <p>{`${review.owner.firstName} ${review.owner.lastName}`}</p>
        <p style={{ fontSize: '12px', color: 'grey' }}>
          {format(new Date(review.createdAt), 'MM.yyyy')}
        </p>
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
