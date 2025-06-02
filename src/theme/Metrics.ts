import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const screenWidth = Math.min(width, height);
const screenHeight = Math.max(width, height);
const density = PixelRatio.get();

const ratio = {
  x: screenWidth / 414,
  y: Math.min(screenHeight, screenWidth / 0.462_05) / 896,
};

export default {
  density,
  getHeight: (value: number) => Math.floor(value * ratio.y),
  getWidth: (value: number) => Math.floor(value * ratio.x),
  ratio,
  screenHeight,
  screenWidth,
};
