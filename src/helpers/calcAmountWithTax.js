import config from '@/config/config.js';
import { normalizeDecimal } from './normalizeDecimal.js';

export const calcAmountWithTax = (amount, tax = config.bankTax) => {
  return normalizeDecimal(amount / (1 - tax / 100));
};
