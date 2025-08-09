# Turborepo Ultimate Template [Preparing...]

```sh
pnpm dlx create-turbo@latest -e https://github.com/baspinarenes/turborepo-empty-template
```

## Setup

### 1. Lefthook

```bash
pnpm add -D lefthook
```

You can look at [Lefthook setup guide](https://lefthook.dev/installation/node.html) for details.

#### Conventional commit messages:

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional -w
pnpm add -D commitizen cz-conventional-changelog -w
```

You can look at [Lefthook conventional commit guide](https://lefthook.dev/examples/commitlint.html) for details.

### 2. ESLint & Prettier

```bash
pnpm add -D prettier -w
```

```bash
turbo gen workspace

? What type of workspace should be added? package
? What is the name of the package? eslint-config
? Where should "eslint-config" be added? (packages/eslint-config) <enter>
```

```bash
pnpm add -D \
  eslint @eslint/js eslint-config-prettier eslint-plugin-only-warn eslint-plugin-turbo \
  typescript typescript-eslint \
  --filter=eslint-config
```

You can look at [example eslint package](https://github.com/vercel/turborepo/tree/main/examples/basic/packages/eslint-config) for details.
