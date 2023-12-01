export const getStatusOptions = (currentStatus) => {
  switch (currentStatus) {
    case 'pending':
      return ['pending', 'accepted', 'cooking', 'readyToDelivery', 'canceled'];
    case 'accepted':
      return ['accepted', 'cooking', 'readyToDelivery'];
    case 'cooking':
      return ['cooking', 'readyToDelivery'];
    case 'readyToDelivery':
      return ['readyToDelivery'];
    case 'canceled':
      return ['canceled'];
    case 'completed':
      return ['completed'];
    default:
      return [];
  }
};
