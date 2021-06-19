import { FC } from "react";

import styles from "./Board.module.css";
import { Row } from "./Row";

export const Board: FC<{
  rowCount: number;
  cellCount: number;
  boardIndex: number;
}> = ({ rowCount, cellCount, boardIndex }) => {
  return (
    <div className={styles.board}>
      {Array(rowCount)
        .fill(null)
        .map((_, index) => (
          <Row
            key={index}
            cellCount={cellCount}
            rowIndex={index}
            boardIndex={boardIndex}
          />
        ))}
    </div>
  );
};
