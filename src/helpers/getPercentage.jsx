export const getPercentage = (currentValue, previousValue) => {
  const result = ((currentValue - previousValue) / currentValue) * 100;
  if (Number.isNaN(result)) {
    return 0;
  }
  return result;
};
