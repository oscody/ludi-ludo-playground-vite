import { Base } from "./Base/Container";
import { BaseColors } from "./interfaces";
import { BOARD_SIZE } from "./globalConstants";
import { getStyleObject } from "./utils"; 
import styles from "./AviratiLudoBoard.module.css";

export const AviratiLudoBoard = ({ cellSize }: { cellSize: number }) => (
  <div className={styles.Container} style={getStyleObject(BOARD_SIZE, cellSize)}>
    <Base baseColor={BaseColors.RED}  cellSize={cellSize}/>
  </div>
);
