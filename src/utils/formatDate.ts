const formatDate = (value: Date): string => {
  return Intl.DateTimeFormat(navigator.language).format(new Date(value));
};

export default formatDate;
