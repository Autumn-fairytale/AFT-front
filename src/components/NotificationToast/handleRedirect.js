export const handleRedirect = (role, navigate) => {
  switch (role) {
    case 'chef':
      navigate('/chef-account/orders');
      break;
    case 'user':
      navigate('/orders');
      break;
    case 'courier':
      navigate('/courier-account/orders');
      break;
    default:
      break;
  }
};
