/**
 * vscode插件安装 stylelint,必须
 * stylelint 是运行工具
 * stylelint-config-standard 是stylelint的推荐配置
 */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss'],
  defaultSeverity: 'error',
  rules: {
    indentation: 2,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['deep']
    }],
    "at-rule-no-unknown": null
  }
}
