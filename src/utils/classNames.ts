const classnames = (baseClass: string, names: object[]): string => {
  const normalizedNames: string[] = [];
  names.forEach((name: object) => {
    if (Object.prototype.toString.call(name) === '[object Object]') {
      const key = Object.keys(name)[0];
      const value = name[key];
      if (key === 'type') {
        normalizedNames.push(`${baseClass}__${value}`);
      } else if (value) {
        normalizedNames.push(`${baseClass}__${key}`);
      }
    }
  });
  return [baseClass, ...normalizedNames].join(' ');
};

export default classnames;
