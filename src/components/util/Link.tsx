import NextLink from "next/link";
import React from "react";

export type LinkProps = Omit<React.HTMLProps<HTMLAnchorElement>, "href"> & {
  href: string;
  locale?: string;
  external?: boolean;
};

const Link: React.FC<LinkProps> = React.memo(props => {
  const { external, locale, ...linkProps } = props;

  if (external) {
    return <a target="_blank" rel="noreferrer noopener" {...linkProps} />;
  }

  const { href, ...otherLinkProps } = linkProps;

  return (
    <NextLink href={href} locale={locale}>
      <a {...otherLinkProps} />
    </NextLink>
  );
});

Link.displayName = "Link";

export default Link;
