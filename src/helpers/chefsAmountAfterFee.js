import config from '@/config';

export const chefsAmountAfterFee = (value = 0.01) => {
  const netPercent = 1 - config.taxPercent / 100;

  return (value * netPercent).toFixed(2);
};
