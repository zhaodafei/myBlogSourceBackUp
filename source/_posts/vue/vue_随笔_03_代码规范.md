---
title: -vue 随笔03
date: 2025-03-28
categories: 
- Vue
tags:
- Vue
---
通过使用`prettier`,配置代码规范,格式化代码
通过使用`prettier`,配置代码规范,格式化代码
通过使用`prettier`,配置代码规范,格式化代码

<!-- more -->

### 01)配置代码规范`prettier`

当前node的环境`node V16.16.0`, 编辑器`webstorm2024.3.1.1`

#### 文件01`.editorconfig`

```shell
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = false # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

#### 文件02`.eslintignore`

```shell
node_modules
dist
dist-staging
.vscode
bin/*
package-lock.json
CHANGELOG.en-US.md
!.*

```

#### 文件03`.eslintrc.js`

```shell
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

```

#### 文件04`.npmrc`

```shell
engine-strict = true
```

#### 文件05`.prettierignore`

```shell
.vscode/
bin/
dist/
dist-staging/
node_modules/
/public/*
**/*.svg
**/*.sh
*.html
```

#### 文件06`.prettierrc.js`

```shell
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  vueIndentScriptAndStyle: true,
  endOfLine: 'auto',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict'
}


```

#### 文件07`package.json`

```json
  "scripts": {
    "dev": "vite",
    "build:prod": "vite build",
    "build:stage": "vite build --mode staging",
    "preview": "vite preview --open chrome",
    "lint": "eslint --fix --ext .js --ext .vue src/views"
  },

  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^8.52.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-define-config": "^1.24.1",
    "eslint-plugin-prettier": "^5.0.1",
    "eslint-plugin-vue": "^9.17.0",
    "prettier": "^3.0.3",
    "vue-eslint-parser": "^9.3.2"
  }
```

```shell
#命令安装
npm install babel-eslint --save-dev
npm install eslint --save-dev
npm install eslint-config-prettier --save-dev
npm install eslint-define-config --save-dev
npm install eslint-plugin-prettier --save-dev
npm install eslint-plugin-vue --save-dev
npm install prettier --save-dev
npm install vue-eslint-parser --save-dev

```



### 最后配置`webstorm`

```shell
#01) 打开set配置 -> ESLint 把下面2个选项都选择
Automatic ESLint configuration
Run eslint --fix on save
```

### 02) 精简配置代码规范 `prettier`

当前node的环境`node V20.15.1`

```json
  "devDependencies": {
    "prettier": "^2.8.7",
  }
```

#### 文件01`.prettierignore`

```shell
.vscode/
.idea/
bin/
dist/
dist-staging/
node_modules/
/public/*
**/*.svg
**/*.sh
*.html
```

#### 文件02`.prettierrc.js`

```js
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  vueIndentScriptAndStyle: true,
  endOfLine: 'auto',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict'
}

```

#### 最后配置`webstorm`中的`prettier`

```shell
#01) 打开set配置 ->  Languages & Frameworks -> JavaScript -> Prettier
Automatic Prettier configuration
Run on save All actions save...


##注意这个可以优化吧 .idea 目录下面的文件 prettier.xml 拷贝处理,复制到新项目中 
## prettier.xml 中的内容为如下:

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="PrettierConfiguration">
    <option name="myConfigurationMode" value="AUTOMATIC" />
    <option name="myRunOnSave" value="true" />
    <option name="myFilesPattern" value="**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts,vue,astro,,wxml,wxss,json,scss}" />
  </component>
</project>
```

### 在`vscode`中配置`prettier`

![vscode中prettier](/img/vue/prettier/prettier_001.png "vscode中prettier")

### 规则翻译

```js
  semi: false,  // 禁止在语句末尾添加分号
  singleQuote: true, // 强制使用单引号'而不是双引号"
  printWidth: 120, // 每行代码的最大宽度为 120 个字符，超过时会自动换行（格式化时生效）
  tabWidth: 2, // 缩进使用 2 个空格（而不是 4 个空格或 Tab 制表符）。
  useTabs: false, // 禁止使用 Tab 制表符缩进，强制使用 空格（由 tabWidth 控制空格数）。
  trailingComma: 'none',  // 禁止在对象、数组等末尾添加多余的逗号。
  arrowParens: 'avoid', // 当箭头函数只有一个参数时，省略参数的括号。
  vueIndentScriptAndStyle: true, //  Vue 文件中，缩进 <script> 和 <style> 标签内的代码（与模板保持一致）
  endOfLine: 'auto', // 自动检测换行符（LF（\n）或 CRLF（\r\n），保持原有风格。
  proseWrap: 'never', // 禁止自动换行 Markdown 等文本内容（保持原样）。
  htmlWhitespaceSensitivity: 'strict' // 严格处理 HTML 中的空格（避免破坏布局）。
```








### 底部

没有了























