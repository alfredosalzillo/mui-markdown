import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH1Props = PropsWithoutRef<JSX.IntrinsicElements["h1"]>;
const MuiMarkdownH1: FC<MuiMarkdownH1Props> = (props) => (
  <MuiMarkdownHeading
    {...props}
    component="h1"
    variant="h1"
    sx={{ mt: 3, mb: 2 }}
  />
);

export default MuiMarkdownH1;
