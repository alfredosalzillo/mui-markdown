import type { FC, JSX, PropsWithoutRef } from "react";
import MuiDivider from "@mui/material/Divider";

type MuiMarkdownDividerProps = PropsWithoutRef<JSX.IntrinsicElements["hr"]>;
const MuiMarkdownDivider: FC<MuiMarkdownDividerProps> = (props) => (
  <MuiDivider component="hr" {...props} />
);

export default MuiMarkdownDivider;
