module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  parser: 'vue-eslint-parser',
  // 不要改变extends，算是目前没有使用typescript开发最佳的eslint和prettier配置了，更改了会出现不兼容
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off', // 不能修改函数形参
    'consistent-return': 'off', // function必须要有返回值
    'import/prefer-default-export': 'off', // 只有一个export时必须使用export dafault
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'default-case': 'off', // switch case 语句必须有个default
    'no-plusplus': 'off', // 不能使用 ++ ,如i++
    'vue/multi-word-component-names': 'off', // 要求组件名称必须是多个单词
    'guard-for-in': 'off', // 使用循环对对象进行for in循环将包括通过原型链继承的属性。此行为可能会导致for循环中出现意外的项目。
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-shadow': 'off', // 局部变量是否可以和全部变量重名
    'import/no-cycle': 'off',
  },
}
