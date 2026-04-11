# AGENTS.md

This file provides context and instructions for AI coding agents working on this project.

## Setup Commands

-   Install dependencies: `npm install`
-   Build the project: `npm run build`
-   Run tests (if applicable): `npm test`

## Technology Stack

-   **TypeScript**: Use TypeScript for all code changes. Follow the existing configuration in `tsconfig.json`.
-   **MUI (Material UI)**: This project is related to MUI components. Ensure any UI-related changes are consistent with MUI patterns.
-   **Markdown**: The core functionality involves Markdown parsing or rendering. Ensure compatibility with common Markdown specifications.

## Development Workflow

1.  **Branching**: Work on feature or fix branches (e.g., `feature/description` or `fix/description`).
2.  **Build**: Before submitting, ensure the project compiles by running `npm run build`.
3.  **Code Style**: Maintain the existing code style. Use clear and descriptive names for variables and functions.

## Commit Message Guidelines

You MUST use **Conventional Commits** (compatible with Semantic Release) for all commit messages. This allows for automated versioning and changelog generation.

### Format

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

-   `feat`: A new feature (minor version update).
-   `fix`: A bug fix (patch version update).
-   `docs`: Documentation changes only.
-   `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc).
-   `refactor`: A code change that neither fixes a bug nor adds a feature.
-   `perf`: A code change that improves performance.
-   `test`: Adding missing tests or correcting existing tests.
-   `build`: Changes that affect the build system or external dependencies.
-   `ci`: Changes to CI configuration files and scripts.
-   `chore`: Other changes that don't modify src or test files.

### Breaking Changes

Breaking changes must be indicated by a `!` after the type/scope or by including `BREAKING CHANGE:` in the footer.
