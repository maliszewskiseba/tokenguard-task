export const isInt = (value: number) => {
  if (isNaN(value)) {
    return false;
  }

  return value % 1 === 0;
};
