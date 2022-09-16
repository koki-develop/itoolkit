import React from "react";
import Base64Icon from "./base64.svg";

type IconProps = React.SVGProps<SVGElement>;

export const Base64: React.FC<IconProps> = props => {
  return <Base64Icon {...props} />;
};
