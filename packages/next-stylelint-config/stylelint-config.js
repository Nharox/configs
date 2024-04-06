const cleanOrderConfig = require('stylelint-config-clean-order');
const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never',
  properties,
}));

const tailwindRules = {
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'layer', 'apply', 'config', 'screen'],
    },
  ],
  'function-no-unknown': [
    true,
    {
      ignoreFunctions: ['theme', 'screen'],
    },
  ],
  'order/order': [
    [
      ...cleanOrderConfig.rules['order/order'][0],
      {
        type: 'at-rule',
        name: 'screen',
        hasBlock: true,
      },
    ],
  ],
};

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'order/properties-order': [propertiesOrder],
    ...tailwindRules,
  },
};
