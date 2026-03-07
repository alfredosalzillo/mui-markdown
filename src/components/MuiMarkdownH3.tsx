import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH3Props = PropsWithoutRef<JSX.IntrinsicElements["h3"]>;
const MuiMarkdownH3: FC<MuiMarkdownH3Props> = (props) => (
  <MuiMarkdownHeading {...props} component="h3" variant="h3" mt={3} mb={2} />
);

export default MuiMarkdownH3;
