import { Base } from "./Base/Container";
import { BaseColors, WalkwayPosition } from "./interfaces";
import { BOARD_SIZE } from "./globalConstants";
import { getStyleObject } from "./utils";
import styles from "./AviratiLudoBoard.module.css";
import { Walkway } from "./Walkway/Container";
import Home from "./Home/Container";

export const AviratiLudoBoard = ({ cellSize }: { cellSize: number }) => (
  <div
    className={styles.Container}
    style={getStyleObject(BOARD_SIZE, BOARD_SIZE, cellSize)}
  >
    <Base baseColor={BaseColors.GREEN} cellSize={cellSize} />
    <Walkway position={WalkwayPosition.NORTH} cellSize={cellSize} />
    <Base baseColor={BaseColors.RED} cellSize={cellSize} />
    <Walkway position={WalkwayPosition.EAST} cellSize={cellSize}  />
    <Home cellSize={cellSize} />
    <Walkway position={WalkwayPosition.WEST} cellSize={cellSize} />
    <Base baseColor={BaseColors.YELLOW} cellSize={cellSize} />
    <Walkway position={WalkwayPosition.SOUTH} cellSize={cellSize} />
    <Base baseColor={BaseColors.BLUE} cellSize={cellSize} />
  </div>
);
