import { propertyGroups } from 'stylelint-config-clean-order';

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never',
  properties,
}));

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/astro',
    'stylelint-config-clean-order',
  ],
  plugins: ['stylelint-use-logical'],
  rules: {
    'csstools/use-logical': true,
    'order/properties-order': [propertiesOrder],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          '/.+/': ['/^--alpha/', '/^--spacing/'],
        },
      },
    ],
  },
};
