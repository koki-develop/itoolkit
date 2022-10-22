import React, { memo } from "react";
import Button, { ButtonProps } from "@/components/util/Button";
import Link, { LinkProps } from "@/components/util/Link";

export type LinkButtonProps = LinkProps & Pick<ButtonProps, "icon" | "active">;

const LinkButton: React.FC<LinkButtonProps> = memo(props => {
  const { active, icon, className, children, ...linkProps } = props;

  return (
    <Link {...linkProps} tabIndex={-1}>
      <Button className={className} icon={icon} active={active}>
        {children}
      </Button>
    </Link>
  );
});

LinkButton.displayName = "LinkButton";

export default LinkButton;
