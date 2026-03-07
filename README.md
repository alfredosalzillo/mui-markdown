# @alfredosalzillo/mui-markdown

A Material UI (MUI) component to render Markdown with [react-markdown](https://github.com/remarkjs/react-markdown).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Customizing Prism Themes](#customizing-prism-themes)
  - [Customizing Components](#customizing-components)
  - [Adding Remark Plugins](#adding-remark-plugins)
  - [Passing React Markdown Options](#passing-react-markdown-options)
- [Props](#props)
- [Peer Dependencies](#peer-dependencies)
- [License](#license)

## Features

- 🎨 **MUI Components**: Automatically uses MUI components (Typography, Link, Table, etc.) for rendering.
- 📝 **GitHub Flavored Markdown**: Includes `remark-gfm` for tables, task lists, and more.
- 🆔 **Heading IDs**: Includes `remark-heading-id` for custom header IDs.
- 💻 **Syntax Highlighting**: Built-in syntax highlighting using `prism-react-renderer` with GitHub themes.
- 🛠️ **Customizable**: Override default components or add your own `remark` plugins.

## Installation

To install `@alfredosalzillo/mui-markdown`:

```bash
npm install @alfredosalzillo/mui-markdown
```

or with yarn:

```bash
yarn add @alfredosalzillo/mui-markdown
```

## Usage

```tsx
import MuiMarkdown from '@alfredosalzillo/mui-markdown';

const markdown = `
# Hello World
This is a **bold** text and a [link](https://mui.com).

\`\`\`ts
const hello = "world";
console.log(hello);
\`\`\`
`;

function App() {
  return (
    <MuiMarkdown>
      {markdown}
    </MuiMarkdown>
  );
}
```

### Customizing Prism Themes

You can import and use different Prism themes. `githubDark` is the default theme, but `githubLight` is also available:

```tsx
import MuiMarkdown from '@alfredosalzillo/mui-markdown';
import { githubLight } from '@alfredosalzillo/mui-markdown/prism-themes/github-light';

function App() {
  return (
    <MuiMarkdown prismTheme={githubLight}>
      {markdown}
    </MuiMarkdown>
  );
}
```

### Customizing Components

You can override default components by passing a `components` prop. This is useful if you want to change the style of a specific element:

```tsx
import MuiMarkdown from '@alfredosalzillo/mui-markdown';
import { Typography } from '@mui/material';

function App() {
  return (
    <MuiMarkdown
      components={{
        h1: ({ children }) => <Typography variant="h4" color="primary">{children}</Typography>,
      }}
    >
      # This will be rendered as an H4 in primary color
    </MuiMarkdown>
  );
}
```

### Adding Remark Plugins

You can add additional `remark` plugins using the `remarkPlugins` prop:

```tsx
import MuiMarkdown from '@alfredosalzillo/mui-markdown';
import remarkEmoji from 'remark-emoji';

function App() {
  return (
    <MuiMarkdown remarkPlugins={[remarkEmoji]}>
      Hello :dog:!
    </MuiMarkdown>
  );
}
```

### Passing React Markdown Options

You can pass additional props to the underlying `react-markdown` component using `reactMarkdownOptions`:

```tsx
import MuiMarkdown from '@alfredosalzillo/mui-markdown';

function App() {
  return (
    <MuiMarkdown
      reactMarkdownOptions={{
        skipHtml: true,
        unwrapDisallowed: true,
      }}
    >
      # No HTML here <span>test</span>
    </MuiMarkdown>
  );
}
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `string` | The markdown content to render. |
| `remarkPlugins` | `PluggableList` | Additional remark plugins to use. |
| `components` | `Components` | Custom component overrides for `react-markdown`. |
| `prismTheme` | `PrismTheme` | Prism theme for code blocks. Defaults to `githubDark`. |
| `reactMarkdownOptions` | `Options` | Additional options to pass to `react-markdown`. |

## Peer Dependencies

Ensure you have the following packages installed in your project:

- `@mui/material` (>=7.0.0)
- `@emotion/react` (>=11.0.0)
- `@emotion/styled` (>=11.0.0)
- `@mui/icons-material` (>=7.0.0)
- `react` (>=18.0.0)
- `react-dom` (>=18.0.0)
- `react-markdown` (>=10.1.0)
- `prism-react-renderer` (>=2.4.1)

## License

MIT © [alfredo salzillo](https://github.com/alfredosalzillo)
