import styled from '@emotion/styled';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 40px, 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const AvatarBox = styled.div`
  padding: 8px;
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const RatingBox = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: top;

  grid-area: 1 / 2 / 2 / 3;
`;

export const ReviewBox = styled.div`
  padding: 4px;
  grid-area: 2 / 2 / 3 / 3;
`;

export const ReviewText = styled.p`
  cursor: ${(props) => (props.possibleExpand ? 'pointer' : 'auto')};
`;
