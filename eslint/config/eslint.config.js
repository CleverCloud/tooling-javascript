import js from "@eslint/js";
import { importX } from "eslint-plugin-import-x";
import globals from "globals";
import nodePlugin from "eslint-plugin-n";

const commonPlugins = {
  "import-x": importX,
};

const commonRules = {
  ...js.configs.recommended.rules,
  ...importX.flatConfigs.recommended.rules,
  "accessor-pairs": "off",
  eqeqeq: ["error", "always", { null: "never" }],
  camelcase: ["error", { allow: ["_lp$"] }],
  curly: ["error", "all"],
  "no-new": "off",
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  // import plugin
  "import-x/no-unresolved": "error",
  "import-x/extensions": ["error", "always"],
  "import-x/first": "error",
  "import-x/newline-after-import": ["error", { count: 1 }],
  "import-x/no-useless-path-segments": ["error", { noUselessIndex: true }],
  "import-x/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
};

const browser = {
  plugins: commonPlugins,
  rules: commonRules,
};

const node = {
  plugins: {
    ...commonPlugins,
    n: nodePlugin,
  },
  rules: {
    ...commonRules,
    ...nodePlugin.configs["flat/recommended-script"].rules,
    "n/no-process-exit": "off",
    "n/no-extraneous-import": "off",
    "n/no-unsupported-features/es-builtins": "off",
    "n/no-unsupported-features/es-syntax": "off",
    "n/no-unsupported-features/node-builtins": "off",
  },
};

export const cleverCloud = {
  configs: {
    browser,
    node,
  },
};
