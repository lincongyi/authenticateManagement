module.exports = {
  root: true,
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'annotation-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] }
    ]
    // 'function-name-case': {
    //   ignoreFunctions: ['/^get.*$/']
    // }
  }
}
