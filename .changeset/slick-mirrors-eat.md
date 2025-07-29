---
"@clevercloud/eslint-config": major
---

Added comprehensive ESLint configurations for Clever Cloud JavaScript projects with two main presets:

**Browser Configuration** - Optimized for client-side applications with:

- ESLint recommended rules and import management
- Modern ES2022+ syntax support
- Browser-specific globals and environment settings

**Node.js Configuration** - Enhanced for server-side applications with:

- All browser configuration features
- Node.js specific rules via `eslint-plugin-n`
- CommonJS and ES module support
- Process management allowances

**Key Features:**

- Flat config format for ESLint 9+
- Strict equality enforcement (except null checks)
- CamelCase naming with exceptions
- Import extensions and ordering requirements
- Unused variable detection with underscore prefix support
- Customizable rule overrides

This package provides standardized linting rules across Clever Cloud JavaScript projects, ensuring consistent code quality and style conventions.
