import classNames from "classnames";
import React, { memo } from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = memo(props => {
  const { className, ...divProps } = props;

  return <div {...divProps} className={classNames("container", className)} />;
});

Container.displayName = "Container";

export default Container;
