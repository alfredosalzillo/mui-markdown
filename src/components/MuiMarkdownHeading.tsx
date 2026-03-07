import type { FC } from "react";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import type { TypographyProps } from "@mui/material/Typography";
import Typography from "@mui/material/Typography";

export type HeadingProps = TypographyProps;
const MuiMarkdownHeading: FC<HeadingProps> = ({ id, children, ...props }) => (
  <Typography {...props} id={id}>
    <Link href={`#${id}`} sx={{ mr: 0.5 }} color="inherit">
      <LinkIcon fontSize="small" sx={{ transform: "rotate(90deg)" }} />
    </Link>
    {children}
  </Typography>
);

export default MuiMarkdownHeading;
