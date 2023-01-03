import React, { useEffect, useState } from "react";
import { matchUps } from "../../fixtures";
import { Select } from "../_atoms";

type TMatchUpSelect = React.FC<{
  onChange: (val: string) => void;
  value: string;
  required?: boolean;
}>;
export const MatchUpSelect: TMatchUpSelect = ({
  onChange,
  value,
  required,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => setCurrentValue(value), [value]);

  return (
    <Select
      id="match-up-select"
      label="Match Up"
      ariaLabel="Match Up Select"
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
    </Select>
  );
};
