const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never',
  properties,
}));

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/astro',
    'stylelint-config-clean-order',
  ],
  rules: {
    'order/properties-order': [propertiesOrder],
  },
};
