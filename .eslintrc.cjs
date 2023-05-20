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
    ],
    "rules": {
        "prettier/prettier": "off", // 被prettier标记的地方抛出黄色警告
        "no-console": 2,
        "vue/html-indent": ["error", 2],
        // "vue/html-self-closing": ["error", {
        //     "html": {
        //         "void": "always",
        //         "normal": "never",
        //         "component": "always"
        //     },
        //     "svg": "always",  // svg标签自闭合
        //     "math": "always"  // MathML标签自闭合
        // }],
        // "vue/max-attributes-per-line": ["error", {
        //     "singleline": {
        //         "max": 1
        //     },      
        //     "multiline": {
        //         "max": 1
        //     }
        // }]
    }
}
