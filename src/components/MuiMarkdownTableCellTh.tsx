import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableCell from "@mui/material/TableCell";

export type MuiMarkdownTableCellThProps = Omit<
  PropsWithoutRef<JSX.IntrinsicElements["th"]>,
  "align"
>;

const MuiMarkdownTableCellTh: FC<MuiMarkdownTableCellThProps> = (props) => (
  <MuiTableCell {...props} component="th" sx={{ whiteSpace: "nowrap" }} />
);

export default MuiMarkdownTableCellTh;
