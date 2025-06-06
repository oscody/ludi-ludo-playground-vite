import { BaseColors } from './interfaces';
import { BASE_COLORS } from './globalConstants';

export const getStyleObject = (
   cellCount: number,
   cellSize: number,
   baseColor?: BaseColors)  => ({
  backgroundColor: baseColor ? getBaseHexColor(baseColor) : undefined,
  height: `${cellCount * cellSize}px`,
  width: `${cellCount * cellSize}px`,
});

export const getBaseHexColor = (color: BaseColors) => BASE_COLORS[color];