import React from "react";
import { IconType } from "react-icons";
import Base64Icon from "./base64.svg";
import JsonYamlIcon from "./jsonYaml.svg";

type IconProps = React.SVGProps<SVGElement>;
type CustomIcon = React.FC<IconProps>;

export type Icon = CustomIcon | IconType;

export const Base64: CustomIcon = props => {
  return <Base64Icon {...props} />;
};

export const JsonYaml: CustomIcon = props => {
  return <JsonYamlIcon {...props} />;
};
