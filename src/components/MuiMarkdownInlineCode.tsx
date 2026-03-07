"use client";

import type { FC, JSX, PropsWithoutRef } from "react";
import { lighten } from "@mui/material";
import Box from "@mui/material/Box";

export type MuiMarkdownInlineCodeProps = PropsWithoutRef<
  JSX.IntrinsicElements["code"]
>;

const MuiMarkdownInlineCode: FC<MuiMarkdownInlineCodeProps> = (props) => (
  <Box
    {...props}
    component="code"
    sx={({ palette }) => ({
      backgroundColor: lighten(palette.background.default, 0.07),
      borderRadius: 1,
      padding: "0.25rem 0.5rem",
    })}
  />
);

export default MuiMarkdownInlineCode;
