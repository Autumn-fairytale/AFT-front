export const convertToMoney = (value) =>
  value.toLocaleString('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    currencyDisplay: 'code',
  });
