import styled from '@emotion/styled';

export const ReviewsListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;

  & > :not(:last-child) {
    border-bottom: 1px solid grey;
  }

  & > :nth-of-type(even) {
    background-color: #eff0f0;
  }
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #ff7622;
  margin-bottom: 12px;
`;
