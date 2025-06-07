import React from 'react';

import { HOME_SIZE } from '../globalConstants';
import { getStyleObject } from '../utils';

const Home = ({ cellSize }: { cellSize: number }) => {
  return (
    <div style={getStyleObject(HOME_SIZE, HOME_SIZE, cellSize)} />
  );
};

export default Home;
