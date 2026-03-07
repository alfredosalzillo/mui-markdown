import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableBody from "@mui/material/TableBody";

export type MuiMarkdownTableBodyProps = PropsWithoutRef<
  JSX.IntrinsicElements["tbody"]
>;

const MuiMarkdownTableBody: FC<MuiMarkdownTableBodyProps> = (props) => (
  <MuiTableBody {...props} />
);

export default MuiMarkdownTableBody;
