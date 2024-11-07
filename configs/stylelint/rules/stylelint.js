module.exports = {
  rules: {
    'scss/dollar-variable-pattern': null,
    'no-unknown-animations': true,
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,
    'font-weight-notation': 'numeric',
    'order/properties-alphabetical-order': true,
    'scss/operator-no-unspaced': null,
    'property-no-unknown': [
      true,
      {
        'ignoreSelectors': [
          '/export/'
        ]
      }
    ],
    'unit-disallowed-list': [
      'px'
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': [
          'export'
        ]
      }
    ]
  }
}