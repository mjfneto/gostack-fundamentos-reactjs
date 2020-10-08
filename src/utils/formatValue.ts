const formatValue = (value: number): string => {
  return Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default formatValue;
