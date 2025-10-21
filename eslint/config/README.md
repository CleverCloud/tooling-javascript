# @clevercloud/eslint-config

ESLint configuration package for Clever Cloud JavaScript projects, providing standardized linting rules and configurations for modern JavaScript development.

## 📦 Installation

```bash
npm install --save-dev @clevercloud/eslint-config
```

## 🚀 Usage

This package provides two main configurations optimized for different environments:

### Browser Configuration

For client-side JavaScript applications:

```javascript
// eslint.config.js
import { cleverCloud } from '@clevercloud/eslint-config';
import globals from 'globals';

export default [
  {
    ...cleverCloud.configs.browser,
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Add browser globals if needed
        ...globals.browser,
      }
    }
  }
];
```

### Node.js Configuration

For server-side JavaScript applications:

```javascript
// eslint.config.js
import { cleverCloud } from '@clevercloud/eslint-config';
import globals from 'globals';

export default [
  {
    ...cleverCloud.configs.node,
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Add Node.js globals if needed
        ...globals.node,
      }
    }
  }
];
```

### Mixed Environment

For projects with both browser and Node.js code:

```javascript
// eslint.config.js
import { cleverCloud } from '@clevercloud/eslint-config';
import globals from 'globals';

export default [
  {
    ...cleverCloud.configs.node,
    files: ['server/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      }
    },
  },
  {
    ...cleverCloud.configs.browser,
    files: ['client/**/*.js', 'public/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      }
    }
  }
];
```

## 🔧 Configuration Details

### Browser Configuration Features

- **Base Rules**: ESLint recommended rules
- **Import Management**: Enforces proper import/export usage
- **Code Quality**: Ensures consistent coding standards
- **Modern JavaScript**: Supports ES2022+ features

### Node.js Configuration Features

- **All Browser Features**: Includes all browser configuration rules
- **Node.js Specific**: Optimized for Node.js environment
- **Module System**: Supports both CommonJS and ES modules
- **Process Management**: Allows `process.exit()` usage

### Key Rules Included

- **Equality**: Enforces strict equality (`===`) except for null checks
- **Camelcase**: Enforces camelCase naming convention
- **Curly Braces**: Requires braces for all control statements
- **Unused Variables**: Allows underscore prefix for unused variables
- **Import Extensions**: Requires file extensions in import statements
- **Import Order**: Enforces import statement organization
- **No Extraneous Dependencies**: Prevents importing unlisted dependencies

## 🛠️ Customization

You can extend or override any rules:

```javascript
// eslint.config.js
import { cleverCloud } from '@clevercloud/eslint-config';

export default [
  {
    ...cleverCloud.configs.node,
    files: ['**/*.js'],
    rules: {
      // Override specific rules
      'no-console': 'warn',
      'camelcase': 'off',
      // Add custom rules
      'prefer-const': 'error',
    }
  }
];
```

## 📋 Requirements

- **ESLint**: ^9.0.0 (peer dependency)
- **Node.js**: Compatible with modern Node.js versions
- **JavaScript**: Supports ES2022+ syntax

## 🔍 Included Plugins

- **@eslint/js**: Core ESLint recommended rules
- **eslint-plugin-import-x**: Import/export statement management
- **eslint-plugin-n**: Node.js specific rules (Node.js config only)
