import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableCell from "@mui/material/TableCell";

export type MuiMarkdownTableCellTdProps = Omit<
  PropsWithoutRef<JSX.IntrinsicElements["td"]>,
  "align"
>;

const MuiMarkdownTableCellTd: FC<MuiMarkdownTableCellTdProps> = (props) => (
  <MuiTableCell {...props} component="td" sx={{ whiteSpace: "nowrap" }} />
);

export default MuiMarkdownTableCellTd;
