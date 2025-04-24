# Contributing Guide

## Development Process

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Write/update tests
5. Run tests and linting
   ```bash
   pnpm test
   pnpm lint
   ```
6. Commit your changes using conventional commits
7. Push to your fork
8. Create a Pull Request

## Commit Convention

We use conventional commits for clear changelog generation. Each commit message must follow this format:

```
<type>(<scope>): <subject>

<body>

```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or modifying tests
- `build:` - Build system or external dependencies changes
- `ci:` - CI configuration changes
- `chore:` - Maintenance tasks
- `revert:` - Reverting changes

### Scopes (optional)

- `api` - API related changes
- `ui` - UI/UX related changes
- `auth` - Authentication related changes
- `db` - Database related changes
- `config` - Configuration changes
- `deps` - Dependency updates

### Examples

```
feat(auth): add OAuth2 authentication
fix(api): handle null response in user endpoint
docs: update contributing guidelines
style: format code with prettier
refactor(ui): extract button component
test: add unit tests for auth service
chore(deps): update dependencies
```

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation when needed

## Pre-commit Hooks

The project uses Husky to enforce code quality before commits. The following checks are performed:

- ESLint validation
- Prettier formatting
- TypeScript type checking
- Commit message format validation

If any of these checks fail, the commit will be aborted.
