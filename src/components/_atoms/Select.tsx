import React, { useState, useEffect } from "react";
import * as uuid from "uuid";

type TSelect = React.FC<{
  children: React.ReactNode;
  onChange: (val: string) => void;
  value: string;
  label: string;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
}>;

export const Select: TSelect = ({
  children,
  onChange,
  value,
  label,
  id = `select-${uuid.v4()}`,
  ariaLabel = "Select",
  required,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => setCurrentValue(value), [value]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        className="form-select m-0 block w-full rounded border border-solid border-gray-300  px-3 py-1.5 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
      </select>
    </>
  );
};
