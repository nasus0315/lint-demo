module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    // 指定如何解析语法
	parser: "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "simple-import-sort",
    ],
    "rules": {
        "prettier/prettier": "off", // 被prettier标记的地方抛出黄色警告
        "no-console": 1,
        'semi': [1], // 语句强制分号结尾
        "no-debugger":process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-alert": 1,
        "no-unused-vars": 1,
        // "no-use-before-define": ["error", { "functions": false, "classes": true, "variables ": true }],
        "no-var": "error", // 要求使用 let 或 const 而不是 var
        "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
        "prefer-const": 1, // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
        "no-irregular-whitespace": 1, // 禁止不规则的空白
        "no-trailing-spaces": 1, // 禁用行尾空格
        "no-mixed-spaces-and-tabs": 1, // 禁止空格和 tab 的混合缩进
        "no-multi-spaces": 1, // 禁止使用多个空格
        "no-extra-semi": 1, // 禁止不必要的分号
        "no-extra-parens": 1, // 禁止不必要的括号
        "no-empty": 1, // 禁止空块语句
        "no-empty-function": 1, // 禁止空函数
        "no-empty-pattern": 1, // 禁止空解构模式
        "no-constant-condition": 1, // 禁止在条件中使用常量表达式
        "no-dupe-args": 1, // 禁止在 function 定义中出现重复的参数
        "no-dupe-keys": 1, // 禁止在对象字面量中出现重复的键
        "no-duplicate-case": 1, // 禁止重复 case 标签
        "no-duplicate-imports": 1, // 禁止重复导入
        "no-extra-boolean-cast": 1, // 禁止不必要的布尔转换
        // vue (https://eslint.vuejs.org/rules)
        "simple-import-sort/imports": "error",
        "vue/html-indent": ["error", 2],
        "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
        "vue/v-slot-style": "error", // 强制执行 v-slot 指令样式
        "vue/no-mutating-props": "off", // 不允许组件 prop的改变
        "vue/no-v-html": "off", // 禁止使用 v-html
        "vue/custom-event-name-casing": "off", // 为自定义事件名称强制使用特定大小写
        "vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
        "vue/one-component-per-file": "off", // 强制每个组件都应该在自己的文件中
        "vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
        "vue/max-attributes-per-line":1, // 强制每行的最大属性数
        "vue/multiline-html-element-content-newline": 1, // 在多行元素的内容之前和之后需要换行符
        "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容之前和之后需要换行符
        "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
        "vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
        "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
    }
};
