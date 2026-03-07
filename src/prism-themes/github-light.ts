import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "#24292e",
    backgroundColor: "#ffffff",
    // @ts-expect-error
    fontSize: "0.875rem",
    fontFamily:
      '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    lineHeight: "1.5",
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "#6a737d",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "#24292e",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
        "punctuation",
      ],
      style: {
        color: "#032f62",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["url"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: [
        "attr-value",
        "punctuation.attr-equals",
        "special-attr",
        "value.css",
      ],
      style: {
        color: "#24292e",
      },
    },
    {
      types: ["selector"],
      languages: ["css"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["property"],
      languages: ["css"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["important", "atrule", "rule"],
      languages: ["css"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["keyword"],
      languages: ["js", "javascript"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["js", "javascript"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["function"],
      languages: ["js", "javascript"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["attr-name", "class-name", "function-variable"],
      languages: ["js", "javascript"],
      style: {
        color: "#e36209",
      },
    },
    {
      types: ["keyword"],
      languages: ["jsx"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["function"],
      languages: ["jsx"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["function-variable"],
      languages: ["jsx"],
      style: {
        color: "#e36209",
      },
    },
    {
      types: ["punctuation"],
      languages: ["jsx"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["attr-name", "class-name"],
      languages: ["jsx"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["string"],
      languages: ["jsx"],
      style: {
        color: "#032f62",
      },
    },
    {
      types: ["operator"],
      languages: ["json"],
      style: {
        color: "#24292e",
      },
    },
    {
      types: ["null.keyword"],
      languages: ["json"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["keyword"],
      languages: ["java"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["java"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["function"],
      languages: ["java"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["java"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["keyword"],
      languages: ["kotlin"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["kotlin"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["function"],
      languages: ["kotlin"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["kotlin"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["keyword"],
      languages: ["go"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["go"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["function"],
      languages: ["go"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["go"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["atrule"],
      languages: ["yml", "yaml"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["keyword"],
      languages: ["dockerfile"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["function"],
      languages: ["dockerfile"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["punctuation"],
      languages: ["dockerfile"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["attr-name", "class-name"],
      languages: ["dockerfile"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["string"],
      languages: ["dockerfile"],
      style: {
        color: "#032f62",
      },
    },
    {
      types: ["keyword"],
      languages: ["hcl"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["keyword"],
      languages: ["hcl"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["string"],
      languages: ["hcl"],
      style: {
        color: "#032f62",
      },
    },
    {
      types: ["property", "punctuation"],
      languages: ["hcl"],
      style: {
        color: "#24292e",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["comment", "italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.8,
      },
    },
  ],
};

export default theme;
