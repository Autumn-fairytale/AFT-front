import { useCallback, useEffect, useState } from 'react';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { AppButton } from '@/shared';
import { AppTextArea } from '@/shared/AppTextArea/AppTextArea';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addReview } from '../../api/addReview';
import { editReview } from '../../api/editReviewById';
import { ReviewFormProps } from './ReviewForm.props';
import { ButtonWrapper, Form } from './ReviewForm.styled';

export const ReviewForm = ({ existingReview, dishId, onClose }) => {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(
    existingReview ? existingReview.rating : 0
  );
  const [review, setReview] = useState(
    existingReview ? existingReview.review : ''
  );

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${dishId}`);
    const savedReview = localStorage.getItem(`review_${dishId}`);

    if (!existingReview) {
      setRating(savedRating ? parseInt(savedRating, 10) : 0);
      setReview(savedReview || '');
    }
  }, [dishId, existingReview]);

  const addReviewMutate = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', dishId] });
    },
  });

  const editReviewMutate = useMutation({
    mutationFn: editReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', dishId] });
    },
  });

  const handleTextareaChange = useCallback(
    (e) => {
      setReview(e.target.value);
      localStorage.setItem(`review_${dishId}`, review);
    },
    [dishId, review]
  );

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    existingReview
      ? await editReviewMutate.mutate({
          rating,
          review,
          dishId,
          reviewId: existingReview.id,
        })
      : await addReviewMutate.mutate({ rating, review, dishId });

    if (!existingReview) {
      setRating(0);
      setReview('');
    }

    onClose();
  };

  return (
    <Form onSubmit={handleFeedbackSubmit} style={{ width: '600px' }}>
      <label>
        <Typography variant="h5" component="p" gutterBottom>
          Rating
        </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            localStorage.setItem(`rating_${dishId}`, newValue);
          }}
          sx={{ maxWidth: '205px', fontSize: '40px' }}
        />
      </label>

      <label>
        <Typography variant="h5" component="p" gutterBottom>
          Review
        </Typography>
        <AppTextArea
          minRows={5}
          maxRows={5}
          placeholder="Leave your feedback"
          value={review}
          onChange={handleTextareaChange}
          maxLength={400}
          name="review"
        />
      </label>
      <ButtonWrapper>
        <AppButton variant="contained" label="Send" type="submit" />
      </ButtonWrapper>
    </Form>
  );
};

ReviewForm.propTypes = ReviewFormProps;
