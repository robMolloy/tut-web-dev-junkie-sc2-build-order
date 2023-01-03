import React from "react";

type TForm = React.FC<{
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}>;

// export const Form: TForm = ({ , onSubmit }) => {
export const Form: TForm = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
};
