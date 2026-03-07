import type { FC, JSX, PropsWithoutRef } from "react";
import MuiMarkdownHeading from "./MuiMarkdownHeading";

type MuiMarkdownH6Props = PropsWithoutRef<JSX.IntrinsicElements["h6"]>;
const MuiMarkdownH6: FC<MuiMarkdownH6Props> = (props) => (
  <MuiMarkdownHeading {...props} component="h6" variant="h6" mt={3} mb={2} />
);

export default MuiMarkdownH6;
