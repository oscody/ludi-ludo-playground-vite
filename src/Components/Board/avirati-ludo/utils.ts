import { BaseColors } from './interfaces';
import { BASE_COLORS } from './globalConstants';

export const getStyleObject = (
  cellCountLengthwise: number,
  cellCountWidthwise: number,
  cellSize: number,
  baseColor?: BaseColors)  => ({
  backgroundColor: baseColor && getBaseHexColor(baseColor),
  height: `${cellCountWidthwise * cellSize}px`,
  width: `${cellCountLengthwise * cellSize}px`,
});

export const getBaseHexColor = (color: BaseColors) => BASE_COLORS[color];