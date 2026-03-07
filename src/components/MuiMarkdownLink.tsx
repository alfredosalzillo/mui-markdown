import type { FC, JSX, PropsWithoutRef } from "react";
import MuiLink from "@mui/material/Link";

export type MuiMarkdownLinkProps = PropsWithoutRef<JSX.IntrinsicElements["a"]>;

const MuiMarkdownLink: FC<PropsWithoutRef<MuiMarkdownLinkProps>> = (props) => (
  <MuiLink {...props} component="a" />
);

export default MuiMarkdownLink;
