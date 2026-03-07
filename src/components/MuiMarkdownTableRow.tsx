import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableRow from "@mui/material/TableRow";

export type MuiMarkdownTableRowProps = PropsWithoutRef<
  JSX.IntrinsicElements["tr"]
>;

const MuiMarkdownTableRow: FC<MuiMarkdownTableRowProps> = (props) => (
  <MuiTableRow {...props} component="tr" />
);

export default MuiMarkdownTableRow;
