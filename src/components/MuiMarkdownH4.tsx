import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH4Props = PropsWithoutRef<JSX.IntrinsicElements["h4"]>;
const MuiMarkdownH4: FC<MuiMarkdownH4Props> = (props) => (
  <MuiMarkdownHeading {...props} component="h4" variant="h4" mt={3} mb={2} />
);

export default MuiMarkdownH4;
