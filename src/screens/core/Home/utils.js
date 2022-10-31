// eslint-disable-next-line import/prefer-default-export, default-param-last
export const extractFromAddress = (components = [], type, keyType) => {
  const temp = components
    .filter((component) => component.types.indexOf(type) === 0)
    .map((item) => item[keyType] || item.name || item.shortName)
    .pop();
  console.log(type);
  console.log(temp);
  return (
    components
      .filter((component) => component.types.indexOf(type) === 0)
      .map((item) => item[keyType] || item.name || item.shortName)[0] || // Preference to long_name over short_name unless specified by keyType - for example in case of country or state.
    ''
  );
};
