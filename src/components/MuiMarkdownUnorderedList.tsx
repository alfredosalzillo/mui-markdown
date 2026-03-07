import type { FC, JSX, PropsWithoutRef } from "react";
import Typography from "@mui/material/Typography";

export type MuiMarkdownUnorderedListProps = PropsWithoutRef<
  JSX.IntrinsicElements["ul"]
>;
const MuiMarkdownUnorderedList: FC<MuiMarkdownUnorderedListProps> = (props) => (
  <Typography {...props} component="ul" mb={2} />
);

export default MuiMarkdownUnorderedList;
