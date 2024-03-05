"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const layout_formatting_1 = __importDefault(require("./rules/layout-formatting"));
const github_1 = __importDefault(require("./rules/plugins/github"));
const simple_import_sort_1 = __importDefault(require("./rules/plugins/simple-import-sort"));
const stylistic_1 = __importDefault(require("./rules/plugins/stylistic"));
const typescript_1 = __importDefault(require("./rules/plugins/typescript"));
const unused_imports_1 = __importDefault(require("./rules/plugins/unused-imports"));
const possible_problems_1 = __importDefault(require("./rules/possible-problems"));
const suggestions_1 = __importDefault(require("./rules/suggestions"));
module.exports = {
    root: true,
    env: {
        browser: true
    },
    reportUnusedDisableDirectives: true,
    plugins: [
        "github",
        "@stylistic",
        "unused-imports",
        "simple-import-sort"
    ],
    extends: [
        "eslint:recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:jsonc/recommended-with-json",
        "plugin:yml/standard"
    ],
    rules: {
        ...possible_problems_1.default,
        ...suggestions_1.default,
        ...layout_formatting_1.default,
        ...github_1.default,
        ...stylistic_1.default,
        ...unused_imports_1.default,
        ...simple_import_sort_1.default
    },
    overrides: [{
            files: "*.ts",
            extends: [
                "plugin:@typescript-eslint/strict-type-checked",
                "plugin:@typescript-eslint/stylistic-type-checked",
                "plugin:deprecation/recommended"
            ],
            parserOptions: {
                project: true
            },
            rules: {
                ...typescript_1.default
            }
        }, {
            files: "*.cjs",
            env: {
                browser: false,
                node: true
            }
        }]
};
