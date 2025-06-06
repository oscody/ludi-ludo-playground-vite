import { COIN_PLACEHOLDER_SIZE, COIN_SIZE } from "../../globalConstants";
import { BaseColors } from "../../interfaces";
import { getStyleObject } from "../../utils";
import styles from "./CoinPlaceholder.module.css";

interface ICoinPlaceholderProps {
  baseColor: BaseColors;
  cellSize: number;
}

export const CoinPlaceholder = ({
  baseColor,
  cellSize,
}: ICoinPlaceholderProps) => (
  <div
    className={styles.Container}
    style={getStyleObject(COIN_PLACEHOLDER_SIZE, cellSize)}
  >
    <div
      className={styles.Circle}
      style={getStyleObject(COIN_SIZE, cellSize, baseColor)}
    />
  </div>
);
