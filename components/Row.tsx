import { FC } from "react";
import { Cell } from "./Cell";

import styles from "./Row.module.css";

export const Row: FC<{
  cellCount: number;
  rowIndex: number;
  boardIndex: number;
}> = ({ cellCount, rowIndex, boardIndex }) => {
  return (
    <div className={styles.row}>
      {Array(cellCount)
        .fill(null)
        .map((_, index) => {
          // if (rowindex=%2 and cellcount) {

          // } else {

          // }

          return (
            <Cell
              key={index}
              colIndex={index}
              rowIndex={rowIndex}
              boardIndex={boardIndex}
              isBlack={Boolean((rowIndex + index) % 2)}
            />
          );
        })}
    </div>
  );
};
