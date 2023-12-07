import styled from '@emotion/styled';

export const ChefProfileWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  margin: '20px 150px 30px 150px',
}));

export const ChefInfoWrapper = styled('div')(() => ({
  alignItems: 'center',
}));

export const FavoriteButton = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  gap: '5px',
}));

export const ChefName = styled('h1')(() => ({
  fontFamily: 'Inter',
}));

export const Location = styled('div')(() => ({}));
export const ChefLocation = styled('span')(() => ({
  display: 'flex',
  fontSize: '20px',
}));

export const RateWrapper = styled('span')(() => ({
  marginTop: '30px',
  marginLeft: '-10px',
  display: 'flex',
}));

export const RateValue = styled('h4')(() => ({
  fontSize: '22px',
  marginRight: '10px',
  fontWeight: '600',
  alignItems: 'center',
}));

export const ChefCertificate = styled('img')(() => ({
  width: '600px',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '20px',
}));

export const ChefButtonsWrapper = styled('div')(() => ({
  display: 'flex',
  marginTop: '35px',
  gap: '40px',
}));
