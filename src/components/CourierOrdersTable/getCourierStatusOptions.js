export const getStatusOptions = (currentStatus) => {
  switch (currentStatus) {
    case 'readyToDelivery':
      return ['readyToDelivery', 'delivering'];
    case 'delivering':
      return ['delivering', 'completed'];
    case 'completed':
      return ['completed'];
  }
};
