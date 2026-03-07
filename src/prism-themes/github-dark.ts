import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "#c9d1d9",
    backgroundColor: "#11171f",
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
        color: "#8b949e",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "#c9d1d9",
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
        color: "#79c0ff",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "#7ee787",
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
        "attr-value",
        "punctuation",
      ],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["url"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: [
        "attr-value",
        "punctuation.attr-equals",
        "special-attr",
        "attr-value",
        "value.css",
      ],
      style: {
        color: "#c9d1d9",
      },
    },
    {
      types: ["selector"],
      languages: ["css"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["property"],
      languages: ["css"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["important", "atrule", "rule"],
      languages: ["css"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["keyword", "keyword"],
      languages: ["js", "javascript"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: [
        "operator",
        "constant",
        "boolean",
        "number",
        "atrule",
        "operator",
        "constant",
        "boolean",
        "number",
        "atrule",
      ],
      languages: ["js", "javascript"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["function"],
      languages: ["js", "javascript"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "function-variable",
        "attr-name",
        "class-name",
        "function-variable",
      ],
      languages: ["js", "javascript"],
      style: {
        color: "#ffa657",
      },
    },
    {
      types: ["keyword"],
      languages: ["jsx"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["function"],
      languages: ["jsx"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["function-variable"],
      languages: ["jsx"],
      style: {
        color: "#ffa657",
      },
    },
    {
      types: ["punctuation"],
      languages: ["jsx"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["attr-name", "class-name"],
      languages: ["jsx"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["string"],
      languages: ["jsx"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["operator"],
      languages: ["json"],
      style: {
        color: "#c9d1d9",
      },
    },
    {
      types: ["null.keyword"],
      languages: ["json"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["keyword"],
      languages: ["java"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["java", "java", "java", "java", "java"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["function"],
      languages: ["java"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["java", "java"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["keyword"],
      languages: ["kotlin"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["kotlin"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["function"],
      languages: ["kotlin"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["kotlin"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["keyword"],
      languages: ["go"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["operator", "constant", "boolean", "number", "atrule"],
      languages: ["go"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["function"],
      languages: ["go"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["attr-name", "function-variable"],
      languages: ["go"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["atrule"],
      languages: ["yml", "yaml"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["keyword"],
      languages: ["dockerfile"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["function"],
      languages: ["dockerfile"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["punctuation"],
      languages: ["dockerfile"],
      style: {
        color: "#79c0ff",
      },
    },
    {
      types: ["attr-name", "class-name"],
      languages: ["dockerfile"],
      style: {
        color: "#7ee787",
      },
    },
    {
      types: ["string"],
      languages: ["dockerfile"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["keyword"],
      languages: ["hcl"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["keyword"],
      languages: ["hcl"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["string"],
      languages: ["hcl"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["property", "punctuation"],
      languages: ["hcl"],
      style: {
        color: "#c9d1d9",
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
