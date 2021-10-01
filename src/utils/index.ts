export const replaceStringWithParams = (
  txtReplace: string,
  data?: Record<string, string | number>
) => {
  // Check the existence of at least one combination of %%, separated by 1 or more non space characters
  const includesVariable = txtReplace.match(/%\S+?%/gm);

  if (includesVariable && data) {
    let interpolatedText = txtReplace;
    Object.keys(data).forEach(dataKey => {
      const templateKey = new RegExp(`%${dataKey}%`, 'g');
      interpolatedText = interpolatedText.replace(
        templateKey,
        data[dataKey].toString()
      );
    });

    return interpolatedText;
  }

  return txtReplace;
};
