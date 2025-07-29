# Contributing to Clever Cloud JavaScript Tooling

## 🔄 Pull Request Requirements

### Changesets

**Important**: Every pull request that introduces changes to any package must include a changeset. This is required for proper version management and changelog generation.

#### What is a changeset?

A changeset is a file that describes the changes made to packages in the monorepo. It helps with:
- Automatic version bumping
- Changelog generation
- Release management

#### Generating a changeset

Before submitting your PR, run the following command:

```bash
npm run changesets
```

This will:
1. Prompt you to select which packages have been changed
2. Ask you to categorize the type of change:
   - **patch**: Bug fixes, documentation updates, or other non-breaking changes
   - **minor**: New features that are backward compatible
   - **major**: Breaking changes that may affect existing users
3. Request a summary of your changes
4. Generate a changeset file in the `.changeset` directory

#### Example workflow

```bash
# Make your changes to the codebase
git add .
git commit -m "feat: add new ESLint rule"

# Generate a changeset
# Note: The changeset is automatically comitted afterwards
npm run changesets

# Push and create your PR
git push origin feature-branch
```

## 🚫 What happens if you forget a changeset?

If you submit a PR without a changeset, the changesets bot will request that you add one before the PR can be merged. This ensures consistent release management across all packages.

## 📚 Additional Resources

- [Changesets Documentation](https://github.com/changesets/changesets)
