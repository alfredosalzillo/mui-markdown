import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH5Props = PropsWithoutRef<JSX.IntrinsicElements["h5"]>;
const MuiMarkdownH5: FC<MuiMarkdownH5Props> = (props) => (
  <MuiMarkdownHeading
    {...props}
    component="h5"
    variant="h5"
    sx={{ mt: 3, mb: 2 }}
  />
);

export default MuiMarkdownH5;
