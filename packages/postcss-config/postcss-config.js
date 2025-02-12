const spacing = (multiplier) => `calc(var(--spacing) * ${multiplier})`;

export default (files = [], additionalPlugins = {}) => {
  const defaultPlugins = {
    '@csstools/postcss-global-data': {
      files,
    },
    'postcss-functions': {
      functions: {
        spacing,
      },
    },
    'postcss-import': {},
    'postcss-preset-env': {},
  };

  return {
    plugins: {
      ...defaultPlugins,
      ...additionalPlugins,
    },
  };
};
