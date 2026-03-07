"use client";

import type * as React from "react";
import type { FC } from "react";
import { useState } from "react";
import CopyIcon from "@mui/icons-material/ContentCopy";
import CopySuccessIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import type { PrismTheme } from "prism-react-renderer";
import { Highlight } from "prism-react-renderer";

type CodeBlockActionsProps = {
  code: string;
};
const CodeBlockActions: FC<CodeBlockActionsProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        p: 0.5,
      }}
    >
      <Tooltip title="Copy">
        <IconButton size="small" sx={{ borderRadius: 1 }} onClick={copyCode}>
          {copied && <CopySuccessIcon fontSize="inherit" />}
          {!copied && <CopyIcon fontSize="inherit" />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

type CodeBlockProps = {
  hideLineNumbers?: boolean;
  children?: string;
  language?: string;
  theme?: PrismTheme;
};
const CodeBlock: FC<CodeBlockProps> = ({
  children = "",
  language = "tsx",
  theme,
  hideLineNumbers,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Highlight code={children} language={language} theme={theme}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Paper
          component="pre"
          elevation={0}
          sx={{
            overflow: "auto",
            p: 2,
            mb: 2,
            position: "relative",
          }}
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && <CodeBlockActions code={children} />}
          {tokens.map((line, i) => {
            if (i === 0 && line.length === 1 && line[0].content === "\n") {
              return null;
            }
            if (
              i === tokens.length - 1 &&
              line.length === 1 &&
              line[0].content === "\n"
            ) {
              return null;
            }
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: required for prism-react-renderer
              <div key={i} {...getLineProps({ line })}>
                {!hideLineNumbers && <span>{i + 1} </span>}
                {line.map((token, key) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: required for prism-react-renderer
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            );
          })}
        </Paper>
      )}
    </Highlight>
  );
};

export type PreBlockProps = {
  hideLineNumbers?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: required for pre blocks
  children?: React.ReactNode | any;
  theme?: PrismTheme;
};

const MuiMarkdownPreBlock: FC<PreBlockProps> = ({
  children,
  theme,
  hideLineNumbers,
}) => {
  if (children?.props?.className?.startsWith("language-")) {
    const code = children.props.children;
    const lang = children.props.className
      ? children.props.className.replace("language-", "")
      : "tsx";

    return (
      <CodeBlock
        language={lang}
        theme={theme}
        hideLineNumbers={hideLineNumbers}
      >
        {code}
      </CodeBlock>
    );
  }
  return (
    <Paper
      variant="outlined"
      component="pre"
      sx={{ whiteSpace: "pre-wrap", p: 2, mb: 2 }}
    >
      {children}
    </Paper>
  );
};

export default MuiMarkdownPreBlock;
