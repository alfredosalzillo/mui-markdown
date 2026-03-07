import type { FC, JSX, PropsWithoutRef } from "react";
import Typography from "@mui/material/Typography";

export type MuiMarkdownBodyOneProps = PropsWithoutRef<
  JSX.IntrinsicElements["p"]
>;
const MuiMarkdownBodyOne: FC<MuiMarkdownBodyOneProps> = (props) => (
  <Typography {...props} component="p" variant="body1" />
);

export default MuiMarkdownBodyOne;
