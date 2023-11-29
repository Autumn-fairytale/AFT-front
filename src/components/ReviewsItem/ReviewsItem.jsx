import { useCallback, useEffect, useRef, useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';

import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import { format } from 'date-fns';

import styled from '@emotion/styled';
import {
  AvatarBox,
  ButtonWrapper,
  Item,
  RatingBox,
  ReviewBox,
  ReviewText,
} from './ReviewItem.styled';
import { ReviewsItemProps } from './ReviewsItem.props';

const ColorButton = styled(IconButton)`
  &:hover {
    color: #ff7622;
  }
`;

export const ReviewsItem = ({ review }) => {
  // Test with userId
  const userId = '6561f42ef5c506ec5f36dbba';

  //
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
        {userId === review.owner.id ? (
          <p>{`${review.owner.firstName} ${review.owner.lastName}`} (your)</p>
        ) : (
          <p>{`${review.owner.firstName} ${review.owner.lastName}`}</p>
        )}
        <p style={{ fontSize: '12px', color: 'grey' }}>
          {format(new Date(review.createdAt), 'MM.yyyy')}
        </p>
        {userId === review.owner.id && (
          <ButtonWrapper>
            <ColorButton
              aria-label="edit"
              size="small"
              onClick={() => {
                console.log('Edit');
              }}
            >
              <GrEdit />
            </ColorButton>

            <ColorButton
              aria-label="delete"
              size="small"
              onClick={() => {
                console.log('Delete');
              }}
            >
              <RiDeleteBin5Line />
            </ColorButton>
          </ButtonWrapper>
        )}

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
