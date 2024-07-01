import type { TSESLint } from "@typescript-eslint/utils";

declare global {
  type ESLintConfig = TSESLint.ClassicConfig.Config;
  type ESLintRules = TSESLint.ClassicConfig.RulesRecord;
}
