import React, { useState, useEffect } from "react";
import * as uuid from "uuid";

type TTextarea = React.FC<{
  children: React.ReactNode;
  onChange: (val: string) => void;
  value: string;
  label: string;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
}>;

export const Textarea: TTextarea = ({
  children,
  onChange,
  value,
  label,
  id = `textarea-${uuid.v4()}`,
  ariaLabel = "Textarea",
  required,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => setCurrentValue(value), [value]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className="block w-full bg-gray-200 py-2 px-4 outline-none focus:bg-white"
        aria-label={ariaLabel}
        id={id}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          onChange(e.target.value);
        }}
        value={currentValue}
        required={required}
      >
        {children}
      </textarea>
    </>
  );
};
