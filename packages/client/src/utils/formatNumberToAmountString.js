import numeral from 'numeral';

export function formatNumberToAmountString(value) {
  const amountString = numeral(value).format('0,0[.]00');

  return amountString;
}
