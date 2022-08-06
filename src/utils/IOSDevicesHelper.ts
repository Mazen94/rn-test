import {
  getStatusBarHeight as getStatusBarHeightForIOs,
  isIPhoneX,
} from 'react-native-status-bar-height';

const BOTTOM_SPACE = 34;

const IS_IPHONE_X = isIPhoneX();

const getBottomSpace = () => {
  return IS_IPHONE_X ? BOTTOM_SPACE : 0;
};

const getHorizontalSpace = () => {
  return IS_IPHONE_X ? BOTTOM_SPACE : 0;
};

const getDefaultStatusBarHeight = () => {
  return getStatusBarHeightForIOs(true);
};

export default {
  isIphoneX: IS_IPHONE_X,
  getBottomSpace,
  getHorizontalSpace,
  getDefaultStatusBarHeight,
};
