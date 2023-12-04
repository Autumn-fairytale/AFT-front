import { useState } from 'react';

export const useIsSameData = () => {
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const isSameData = (newSubmittedData) => {
    const lastData = JSON.stringify(lastSubmittedData);
    const newData = JSON.stringify(newSubmittedData);
    const isSame = lastData === newData;
    if (!isSame) {
      setLastSubmittedData(newSubmittedData);
    }
    return isSame;
  };

  return isSameData;
};
