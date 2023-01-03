import React, { useEffect, useState } from "react";
import { matchUps } from "../../fixtures";
import { Textarea } from "../_atoms";

type TBuildOrderTextarea = React.FC<{
  onChange: (val: string) => void;
  value: string;
  required?: boolean;
}>;
export const BuildOrderTextarea: TBuildOrderTextarea = ({
  onChange,
  value,
  required,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => setCurrentValue(value), [value]);

  return (
    <Textarea
      id="build-order-textarea"
      label="Build Order"
      ariaLabel="Build Order Textarea"
      onChange={(e) => {
        setCurrentValue(e);
        onChange(e);
      }}
      value={currentValue}
      required={required}
    >
      <option {...{ value: "", children: "" }} />
      {matchUps.map(({ label, value }, j) => (
        <option key={j} {...{ value, children: label }} />
      ))}
    </Textarea>
  );
};
