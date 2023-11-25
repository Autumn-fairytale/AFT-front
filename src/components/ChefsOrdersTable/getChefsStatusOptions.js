export const getStatusOptions = (currentStatus) => {
  switch (currentStatus) {
    case 'pending':
      return ['pending', 'accepted', 'cooking', 'ready', 'canceled'];
    case 'accepted':
      return ['accepted', 'cooking', 'ready'];
    case 'cooking':
      return ['cooking', 'ready'];
    case 'ready':
      return ['ready'];
    case 'canceled':
      return ['canceled'];
    case 'completed':
      return ['completed'];
    default:
      return [];
  }
};
