import type { FC, JSX, PropsWithoutRef } from "react";
import Box from "@mui/material/Box";

export type MuiMarkdownBlockquoteProps = PropsWithoutRef<
  JSX.IntrinsicElements["blockquote"]
>;

const MuiMarkdownBlockquote: FC<MuiMarkdownBlockquoteProps> = (props) => (
  <Box
    {...props}
    component="blockquote"
    dir="auto"
    sx={{
      borderInlineStart: "3px solid",
      paddingInlineStart: "1.5rem",
      borderColor: "text.secondary",
      m: "0.25rem 0",
    }}
  />
);

export default MuiMarkdownBlockquote;
