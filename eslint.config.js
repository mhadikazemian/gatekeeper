import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
      import: eslintPluginImport,
    },
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      "prettier/prettier": "error",
      "react/prop-types": "off", // TS handles prop types
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/order": [
        "error",
        {
          groups: [["builtin", "external", "internal"]],
          "newlines-between": "always",
        },
      ],
    },
  },
  eslintConfigPrettier,
];

