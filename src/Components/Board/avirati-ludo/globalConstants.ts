import { BaseColors } from './interfaces';

// export const CELL_SIZE = 40; // pixels
export const BOARD_SIZE = 15; // cells
// export const BOARD_DIMENSION = CELL_SIZE * BOARD_SIZE; // pixels
export const BASE_SIZE = 6; // cells
export const INNER_BASE_SIZE = 4; // cells
export const COIN_PLACEHOLDER_SIZE = 2; // cells
export const COIN_SIZE = 1; // cells

export const BASE_COLORS = {
  [BaseColors.RED]: '#D22E2E',
  [BaseColors.GREEN]: '#088812',
  [BaseColors.BLUE]: '#17669F',
  [BaseColors.YELLOW]: '#E3DE3B',
};

export const WALKWAY_LENGTH = 6; // Cells
export const WALKWAY_WIDTH = 3;  // Cells
export const HOME_SIZE = 3;      // Cells