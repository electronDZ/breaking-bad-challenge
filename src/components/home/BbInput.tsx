import React from "react";

type CompProps<T extends string | number> = {
  value: T;
  setValue: (value: React.SetStateAction<T>) => void;
  placeholder: string;
};

export default function BbInput<T extends string | number>({
  value,
  setValue,
  placeholder,
}: CompProps<T>) {
  return (
    <input
      className="bd-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value as T)}
    />
  );
}
