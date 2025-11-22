import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import github from "eslint-plugin-github";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

export default defineConfig(
  {
    name: "global ignores",
    ignores: [
      "**/dist/",
      "**/build/",
      "**/out/",
      "**/public/",
      "**/.*/"
    ]
  },
  {
    name: "global options",
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error"
    }
  },
  {
    name: "vanilla",
    extends: [
      js.configs.recommended,
      unicorn.configs.recommended,
      sonarjs.configs.recommended,
      stylistic.configs.customize({
        semi: true,
        quotes: "double",
        braceStyle: "1tbs",
        commaDangle: "never"
      })
    ],
    plugins: {
      github
    },
    rules: {
      // possible problems
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-inner-declarations": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unassigned-vars": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "require-atomic-updates": "error",

      // suggestions
      "accessor-pairs": "error",
      "arrow-body-style": "error",
      "block-scoped-var": "error",
      "camelcase": "error",
      "class-methods-use-this": "error",
      "complexity": "error",
      "consistent-return": "error",
      "consistent-this": "error",
      "curly": "error",
      "default-case": "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "func-style": "error",
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "init-declarations": "error",
      "logical-assignment-operators": "error",
      "max-classes-per-file": "error",
      "max-depth": "error",
      "max-lines-per-function": "error",
      "max-nested-callbacks": "error",
      "max-params": "error",
      "max-statements": "error",
      "new-cap": "error",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-console": "error",
      "no-continue": "error",
      "no-div-regex": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-plusplus": "error",
      "no-proto": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-underscore-dangle": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "one-var": [
        "error",
        "never"
      ],
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-named-capture-group": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-await": "error",
      "symbol-description": "error",
      "yoda": "error",

      // github
      "github/array-foreach": "error",
      "github/async-currenttarget": "error",
      "github/async-preventdefault": "error",
      "github/get-attribute": "error",
      "github/no-blur": "error",
      "github/no-dynamic-script-tag": "error",
      "github/no-implicit-buggy-globals": "error",
      "github/no-inner-html": "error",
      "github/no-innerText": "error",
      "github/no-then": "error",
      "github/no-useless-passive": "error",
      "github/prefer-observers": "error",
      "github/require-passive-events": "error",
      "github/unescaped-html-literal": "error",

      // stylistic
      "@stylistic/array-element-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/array-bracket-newline": "error",
      "@stylistic/curly-newline": [
        "error",
        "always"
      ],
      "@stylistic/function-call-spacing": "error",
      "@stylistic/line-comment-position": "error",
      "@stylistic/lines-around-comment": "error",
      "@stylistic/multiline-comment-style": "error",
      "@stylistic/newline-per-chained-call": "error",
      "@stylistic/no-confusing-arrow": "error",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/semi-style": "error",
      "@stylistic/switch-colon-spacing": "error",

      // unicorn
      "unicorn/better-regex": "error",
      "unicorn/consistent-destructuring": "error",
      "unicorn/no-named-default": "off",
      "unicorn/no-null": "off",

      // sonarjs
      "sonarjs/no-collapsible-if": "error",
      "sonarjs/prefer-immediate-return": "error",
      "sonarjs/shorthand-property-grouping": "error"
    }
  },
  {
    name: "typescript",
    files: [
      "**/*.{ts,mts,cts}",
      "**/*.{svelte,vue,astro}"
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [
          ".svelte",
          ".vue",
          ".astro"
        ]
      }
    },
    extends: [
      ts.configs.strictTypeChecked,
      ts.configs.stylisticTypeChecked
    ],
    rules: {
      "class-methods-use-this": "off",
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never"
        }
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports"
        }
      ],
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "init-declarations": "off",
      "@typescript-eslint/init-declarations": "error",
      "max-params": "off",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-conversion": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "prefer-destructuring": "off",
      "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error"
    }
  }
);
