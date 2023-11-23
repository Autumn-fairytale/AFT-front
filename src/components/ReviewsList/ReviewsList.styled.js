import styled from '@emotion/styled';

export const ReviewsListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    border-bottom: 1px solid green;
  }

  & > :nth-of-type(even) {
    background-color: #fff6f4;
  }
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #ff7622;
  margin-bottom: 12px;
`;
