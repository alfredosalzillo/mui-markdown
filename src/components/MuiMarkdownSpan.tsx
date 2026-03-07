import type { FC, JSX, PropsWithoutRef } from "react";
import Typography from "@mui/material/Typography";

export type MuiMarkdownSpanProps = PropsWithoutRef<
  JSX.IntrinsicElements["span"]
>;
const MuiMarkdownSpan: FC<MuiMarkdownSpanProps> = (props) => (
  <Typography {...props} component="span" variant="body1" />
);

export default MuiMarkdownSpan;
