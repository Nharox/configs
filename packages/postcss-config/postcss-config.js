const alpha = (color, percentage) =>
  `color-mix(in oklab, ${color} ${percentage}, transparent)`;
const spacing = (multiplier) => `calc(var(--spacing) * ${multiplier})`;

export default (files, additionalPlugins) => {
  const defaultPlugins = {
    'postcss-functions': {
      functions: {
        '--alpha': alpha,
        '--spacing': spacing,
      },
    },
    'postcss-import': {},
    'postcss-preset-env': {},
  };

  let plugins = {
    ...defaultPlugins,
    ...additionalPlugins,
  };

  if (Array.isArray(files) && files.length) {
    plugins = {
      '@csstools/postcss-global-data': {
        files,
      },
      ...plugins,
    };
  }

  return { plugins };
};
