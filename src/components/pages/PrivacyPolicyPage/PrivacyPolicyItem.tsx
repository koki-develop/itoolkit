import React, { memo } from "react";

export type PrivacyPolicyItemProps = {
  title: string;
  children: React.ReactNode;
};

const PrivacyPolicyItem: React.FC<PrivacyPolicyItemProps> = memo(props => {
  const { title, children } = props;

  return (
    <div className="mb-2">
      <h2 className="mb-1 text-xl">{title}</h2>
      <p>{children}</p>
    </div>
  );
});

PrivacyPolicyItem.displayName = "PrivacyPolicyItem";

export default PrivacyPolicyItem;
