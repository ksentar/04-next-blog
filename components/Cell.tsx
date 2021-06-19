import { FC } from "react";
import styles from "./Cell.module.css";
export const Cell: FC<{
  colIndex: number;
  rowIndex: number;
  boardIndex: number;
  isBlack: Boolean;
}> = ({ rowIndex, colIndex, boardIndex, isBlack }) => {
  return (
    <div
      className={`${styles.cell} ${
        isBlack ? styles.cellBlack : styles.cellWhite
      }`}
      onClick={() => {
        alert(
          `row:${rowIndex},col ${colIndex},board:${boardIndex},isBlack:${isBlack}`
        );
      }}
    />
  );
};
