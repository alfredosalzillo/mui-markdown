import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableHead from "@mui/material/TableHead";

export type MuiMarkdownTableHeadProps = PropsWithoutRef<
  JSX.IntrinsicElements["thead"]
>;

const MuiMarkdownTableHead: FC<MuiMarkdownTableHeadProps> = (props) => (
  <MuiTableHead component="thead" {...props} />
);

export default MuiMarkdownTableHead;
