import React from "react";

type Props = {
  value: string | null;
  onClick: () => void;
  isDummy?: boolean;
  isDark?: boolean;
};
export const Square = ({ value, onClick, isDummy = false, isDark }: Props) => {
  return (
    <button
      className={
        isDummy
          ? `dummy${isDark ? "_dark" : ""}`
          : `square${isDark ? "_dark" : ""}`
      }
      onClick={onClick}
    >
      {value === "d" ? null : value}
    </button>
  );
};
