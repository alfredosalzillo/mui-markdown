import type { FC, JSX, PropsWithoutRef } from "react";
import MuiTableFooter from "@mui/material/TableFooter";

export type MuiMarkdownTableFooterProps = PropsWithoutRef<
  JSX.IntrinsicElements["tfoot"]
>;

const MuiMarkdownTableFooter: FC<MuiMarkdownTableFooterProps> = (props) => (
  <MuiTableFooter {...props} component="tfoot" />
);

export default MuiMarkdownTableFooter;
