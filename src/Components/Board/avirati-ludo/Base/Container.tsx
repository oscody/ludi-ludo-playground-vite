import { BASE_SIZE, INNER_BASE_SIZE } from '../globalConstants';
import { BaseColors } from '../interfaces';
import { getStyleObject } from '../utils';
import { CoinPlaceholder } from './components/CoinPlaceholder';
import styles from './Container.module.css';

interface IBaseProps {
  baseColor: BaseColors;
  cellSize: number;
}

export const Base = ({ baseColor, cellSize }: IBaseProps) => (
  <div className={styles.OuterContainer} style={getStyleObject(BASE_SIZE, cellSize, baseColor)}>
    <div className={styles.InnerContainer} style={getStyleObject(INNER_BASE_SIZE, cellSize)}>
      <CoinPlaceholder baseColor={baseColor} cellSize={cellSize}/>
      <CoinPlaceholder baseColor={baseColor} cellSize={cellSize}/>
      <CoinPlaceholder baseColor={baseColor} cellSize={cellSize}/>
      <CoinPlaceholder baseColor={baseColor} cellSize={cellSize}/>
    </div>
  </div>
);