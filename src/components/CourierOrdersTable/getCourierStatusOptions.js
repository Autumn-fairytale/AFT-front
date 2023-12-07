export const getStatusOptions = (currentStatus) => {
  switch (currentStatus) {
    case 'readyToDelivery':
      return ['delivering', 'completed'];
    case 'delivering':
      return ['completed'];
    // case 'completed':
    //   return ['completed'];
  }
};
