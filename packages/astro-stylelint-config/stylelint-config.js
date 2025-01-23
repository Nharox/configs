const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never',
  properties,
}));

const tailwindRules = {
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['apply', 'theme', 'utility'],
    },
  ],
  'function-no-unknown': [
    true,
    {
      ignoreFunctions: ['theme'],
    },
  ],
  'media-query-no-invalid': [
    true,
    {
      ignoreFunctions: ['theme'],
    },
  ],
};

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/astro',
    'stylelint-config-clean-order',
  ],
  rules: {
    'order/properties-order': [propertiesOrder],
    ...tailwindRules,
  },
};
