import React from "react";
import Base64Icon from "./base64.svg";

type IconProps = React.SVGProps<SVGElement>;

export type Icon = React.FC<IconProps>;

export const Base64: Icon = props => {
  return <Base64Icon {...props} />;
};
