const { defineConfig } = require('eslint-define-config')
// ESlint 配置
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    // es6: true,
    es2022: true,
    'vue/setup-compiler-macros': true // 开启setup语法糖环境
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: 'vue-eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module' // 使用 ES 模块
  },
  extends: [
    'plugin:vue/vue3-recommended', // vue3 的规则
    'plugin:vue/recommended', // vue2语法可用的规则
    'eslint:recommended', // 引入标准 Eslint 规则，或者使用 Airbnb 规则
    'prettier',
    // prettier 的推荐规则
    // 注意，它必须放在数组的最后 ，因为它可以保证能够覆盖前面的那些配置，也就可以解决 与eslint 的冲突
    'plugin:prettier/recommended'
  ],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  // 0 关闭 1 警告 2 错误
  // vue 校验规则：https://eslint.vuejs.org/rules/
  rules: {
    'vue/no-v-model-argument': 0, // 关闭 v-model 不能带参数的校验
    'vue/multi-word-component-names': 0, // 关闭组件名必须是多个单词的限制
    'no-undef': 0, // 关闭未引入的 Vue 定义方法的限制 因为 auto-import 不需要引入 ref 等
    'vue/no-multiple-template-root': 0, // 关闭限制 template 只能有一个根元素的限制Vue3 组件支持多个根节点
    'vue/require-default-prop': 0, // 关闭 props 要求默认值
    'vue/attribute-hyphenation': 0, // 关闭自定义属性必须使用中划线的规则
    'vue/v-on-event-hyphenation': 0, // 关闭自定义事件必须使用中划线的规则
    'vue/no-mutating-props': 0, // 关闭不能修改 v-model 绑定的 props 的规则，因为 element 用 v-model 绑定显示隐藏的 visible
    'object-curly-spacing': ['error', 'always'], // 对象前后要加空格 { a: 1 }
    'vue/no-v-for-template-key': 0 // 关闭template上v-for不能添加key的限制（Vue3支持）
  }
})
