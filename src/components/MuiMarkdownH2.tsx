import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH2Props = PropsWithoutRef<JSX.IntrinsicElements["h2"]>;
const MuiMarkdownH2: FC<MuiMarkdownH2Props> = (props) => (
  <MuiMarkdownHeading {...props} component="h2" variant="h2" mt={3} mb={2} />
);

export default MuiMarkdownH2;
