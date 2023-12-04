import { Box } from '@mui/material';
import styled from '@mui/system/styled';

import { route } from '@/constants';
import { RedirectLinkStyled } from '@/shared/AuthFormComponents/styles';

export const PrivacyPoliciesStyled = styled(Box)({
  fontSize: '0.8rem',
  marginTop: '0.5rem',
  opacity: '0.7',
  '& a': {
    cursor: 'pointer',
  },
});

export const PrivacyPolicies = () => {
  return (
    <PrivacyPoliciesStyled>
      <p>By clicking Create Account, you agree on the&nbsp;</p>
      <RedirectLinkStyled href={route.TERMS_OF_USE} underline="hover">
        Terms of Use
      </RedirectLinkStyled>
      &nbsp;&&nbsp;
      <RedirectLinkStyled href={route.PRIVACY_POLICY} underline="hover">
        Privacy Policy
      </RedirectLinkStyled>
    </PrivacyPoliciesStyled>
  );
};
