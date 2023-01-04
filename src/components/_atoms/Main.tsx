import React from "react";

type TMain = React.FC<{
  children?: React.ReactNode;
}>;

export const Main: TMain = ({ children }) => {
  return <main className="p-4">{children}</main>;
};
