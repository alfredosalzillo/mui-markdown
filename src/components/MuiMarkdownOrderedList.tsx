import type { FC, JSX, PropsWithoutRef } from "react";
import Typography from "@mui/material/Typography";

export type MuiMarkdownOrderedListProps = PropsWithoutRef<
  JSX.IntrinsicElements["ol"]
>;
const MuiMarkdownOrderedList: FC<MuiMarkdownOrderedListProps> = (props) => (
  <Typography {...props} component="ol" sx={{ mb: 2 }} />
);

export default MuiMarkdownOrderedList;
