import React from "react";

type TFormFieldContainer = React.FC<{
  children: React.ReactNode;
  center?: boolean;
  hideBottomSpace?: boolean;
}>;

export const FormFieldContainer: TFormFieldContainer = ({
  children,
  center,
  hideBottomSpace,
}) => {
  const bottomSpaceClass = hideBottomSpace ? "" : "pb-4";
  const centerClass = center ? " flex justify-center" : "";

  const className = [bottomSpaceClass, centerClass]
    .filter((val) => !!val)
    .join(" ");

  return <div className={className}>{children}</div>;
};
