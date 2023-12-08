import styled from '@emotion/styled';

export const ProfileWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  margin: '20px 150px 30px 200px',
  alignItems: 'center',
}));

export const InfoWrapper = styled('div')(() => ({
  alignItems: 'center',
}));

export const ButtonIcon = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  gap: '5px',
}));

export const Name = styled('h1')(() => ({
  fontFamily: 'Inter',
}));

export const Location = styled('span')(() => ({
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
