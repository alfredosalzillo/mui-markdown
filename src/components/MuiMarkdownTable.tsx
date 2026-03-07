import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTable from "@mui/material/Table";

export type MuiMarkdownTableProps = PropsWithoutRef<
  JSX.IntrinsicElements["table"]
>;
const MuiMarkdownTable: FC<MuiMarkdownTableProps> = (props) => (
  <MuiTable component="table" {...props} />
);

export default MuiMarkdownTable;
