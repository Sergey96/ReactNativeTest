export const clipText = (text: string, maxSize = 12) => {
  if (text.length > 12) {
    return text.slice(0, maxSize) + (text.length <= maxSize ? '' : '...');
  }
  return text;
};

export const capitalize = (value: string) => {
  if (!value) {
    return '';
  }
  return value?.charAt(0).toUpperCase() + value?.slice(1);
};
