import React, { memo } from "react";
import Button from "@/components/util/Button";
import Link, { LinkProps } from "@/components/util/Link";

export type LinkButtonProps = LinkProps & {
  buttonClassName?: string;
  active?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = memo(props => {
  const { active, className, ...linkProps } = props;
  const { children, ...otherLinkProps } = linkProps;

  return (
    <Link {...otherLinkProps}>
      <Button className={className} active={active}>
        {children}
      </Button>
    </Link>
  );
});

LinkButton.displayName = "LinkButton";

export default LinkButton;
