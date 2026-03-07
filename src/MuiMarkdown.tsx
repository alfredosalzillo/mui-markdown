import { type FC, useMemo } from "react";
import type { PrismTheme } from "prism-react-renderer";
import type { Components } from "react-markdown";
import Markdown, { type Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkHeaderId from "remark-heading-id";
import MuiMarkdownBlockquote from "./components/MuiMarkdownBlockquote";
import MuiMarkdownBodyOne from "./components/MuiMarkdownBodyOne";
import MuiMarkdownDivider from "./components/MuiMarkdownDivider";
import MuiMarkdownH1 from "./components/MuiMarkdownH1";
import MuiMarkdownH2 from "./components/MuiMarkdownH2";
import MuiMarkdownH3 from "./components/MuiMarkdownH3";
import MuiMarkdownH4 from "./components/MuiMarkdownH4";
import MuiMarkdownH5 from "./components/MuiMarkdownH5";
import MuiMarkdownH6 from "./components/MuiMarkdownH6";
import MuiMarkdownInlineCode from "./components/MuiMarkdownInlineCode";
import MuiMarkdownLink from "./components/MuiMarkdownLink";
import MuiMarkdownOrderedList from "./components/MuiMarkdownOrderedList";
import MuiMarkdownPreBlock from "./components/MuiMarkdownPreBlock";
import MuiMarkdownSpan from "./components/MuiMarkdownSpan";
import MuiMarkdownTable from "./components/MuiMarkdownTable";
import MuiMarkdownTableBody from "./components/MuiMarkdownTableBody";
import MuiMarkdownTableCellTd from "./components/MuiMarkdownTableCellTd";
import MuiMarkdownTableCellTh from "./components/MuiMarkdownTableCellTh";
import MuiMarkdownTableFooter from "./components/MuiMarkdownTableFooter";
import MuiMarkdownTableHead from "./components/MuiMarkdownTableHead";
import MuiMarkdownTableRow from "./components/MuiMarkdownTableRow";
import MuiMarkdownUnorderedList from "./components/MuiMarkdownUnorderedList";
import githubDark from "./prism-themes/github-dark";

const propsWithoutNode = <T,>(props: T & { node?: unknown }) => {
  const { node: _, ...others } = props;
  return others;
};

const componentWithoutNode =
  <P extends { node?: unknown }>(Component: FC<Omit<P, "node">>) =>
  (props: P) => <Component {...propsWithoutNode(props)} />;

const componentWithPropsOverrides =
  <P,>(Component: FC<P>, overrides: Partial<P>) =>
  (props: P) => (
    <Component
      {...{
        ...props,
        ...overrides,
      }}
    />
  );

const getDefaultComponents = (options: {
  prismTheme?: PrismTheme;
} = {}): Components => ({
  a: componentWithoutNode(MuiMarkdownLink),
  blockquote: componentWithoutNode(MuiMarkdownBlockquote),
  code: componentWithoutNode(MuiMarkdownInlineCode),
  h1: componentWithoutNode(MuiMarkdownH1),
  h2: componentWithoutNode(MuiMarkdownH2),
  h3: componentWithoutNode(MuiMarkdownH3),
  h4: componentWithoutNode(MuiMarkdownH4),
  h5: componentWithoutNode(MuiMarkdownH5),
  h6: componentWithoutNode(MuiMarkdownH6),
  hr: componentWithoutNode(MuiMarkdownDivider),
  ol: componentWithoutNode(MuiMarkdownOrderedList),
  p: componentWithoutNode(MuiMarkdownBodyOne),
  pre: componentWithoutNode(
    componentWithPropsOverrides(MuiMarkdownPreBlock, {
      theme: options.prismTheme ?? githubDark,
      hideLineNumbers: true,
    }),
  ),
  span: componentWithoutNode(MuiMarkdownSpan),
  table: componentWithoutNode(MuiMarkdownTable),
  tbody: componentWithoutNode(MuiMarkdownTableBody),
  td: componentWithoutNode(MuiMarkdownTableCellTd),
  tfoot: componentWithoutNode(MuiMarkdownTableFooter),
  th: componentWithoutNode(MuiMarkdownTableCellTh),
  thead: componentWithoutNode(MuiMarkdownTableHead),
  tr: componentWithoutNode(MuiMarkdownTableRow),
  ul: componentWithoutNode(MuiMarkdownUnorderedList),
});

export type MuiMarkdownProps = {
  children: string;
  remarkPlugins?: Options["remarkPlugins"];
  components?: Components;
  prismTheme?: PrismTheme;
  reactMarkdownOptions?: Omit<Options, "children" | "remarkPlugins" | "components">;
};

const MuiMarkdown: FC<MuiMarkdownProps> = ({
  children,
  remarkPlugins,
  components,
  prismTheme,
  reactMarkdownOptions,
}) => {
  const memoizedRemarkPlugins = useMemo<Options["remarkPlugins"]>(
    () => [
      [remarkGfm],
      [remarkHeaderId, { defaults: true }],
      ...(remarkPlugins ?? []),
    ],
    [remarkPlugins],
  );

  const memoizedDefaultComponents = useMemo<Components>(() => getDefaultComponents({ prismTheme }), [prismTheme]);

  const memoizedComponents = useMemo(
    () => ({
      ...memoizedDefaultComponents,
      ...components,
    }),
    [memoizedDefaultComponents, components],
  );

  return (
    <Markdown
      remarkPlugins={memoizedRemarkPlugins}
      components={memoizedComponents}
      {...reactMarkdownOptions}
    >
      {children}
    </Markdown>
  );
};

export default MuiMarkdown;
