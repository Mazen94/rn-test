import { Platform, StatusBar } from 'react-native';
import { isTablet } from 'react-native-device-info';

import IOSDevicesHelper from '_utils/IOSDevicesHelper';
import ScreenOrientation from '_utils/ScreenOrientation';

const PRIVATE_API_KEY = '';

/* ----------------------------------------------------------------------------------------------------- */
/*                                                Dimensions                                             */
/*                In this section we try to create a grid system for the whole application.              */
/*  All values ​​below are just examples, please check your design screens (Zeplin, Avocode, AdobeXD ...)  */
/*                                           and update the values.                                      */
/* ----------------------------------------------------------------------------------------------------- */
const GRID_UNIT = isTablet() ? 7.5 : 5;

const UNITS = {
  GRIDx1: GRID_UNIT * 1,
  GRIDx2: GRID_UNIT * 2,
  GRIDx3: GRID_UNIT * 3,
  GRIDx4: GRID_UNIT * 4,
  GRIDx5: GRID_UNIT * 5,
  GRIDx6: GRID_UNIT * 6,
  GRIDx7: GRID_UNIT * 7,
  GRIDx8: GRID_UNIT * 8,
  GRIDx9: GRID_UNIT * 9,
  GRIDx10: GRID_UNIT * 10,
  PAGE_PADDING: GRID_UNIT * 4,
  CARD_PADDING: GRID_UNIT * 3,
  INPUT_HEIGHT: isTablet() ? 52 : 44,
  TEXT_AREA_HEIGHT: isTablet() ? 220 : 180,
  BUTTON_HEIGHT: isTablet() ? 52 : 44,
  BORDER_RADIUS: 6,
  BORDER_RADIUS_ROUNDED: 50,
  HIT_SLOP: { top: 10, left: 10, bottom: 10, right: 10 },
};

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

const isLandscape = (screenOrientation: string): boolean => {
  return screenOrientation === ScreenOrientation.LANDSCAPE;
};

const getNavBarHeight = (orientation = ScreenOrientation.PORTRAIT): number => {
  let navBarHeight;
  if (Platform.OS === 'ios') {
    if (isTablet()) {
      navBarHeight = 44;
    } else {
      if (isLandscape(orientation)) navBarHeight = 32;
      else navBarHeight = 44;
    }
  } else {
    if (isTablet()) {
      navBarHeight = 64;
    } else {
      if (isLandscape(orientation)) navBarHeight = 48;
      else navBarHeight = 56;
    }
  }
  return navBarHeight;
};

const getStatusBarHeightInLandscape = (
  screenOrientation: string,
): number | undefined => {
  if (isLandscape(screenOrientation)) {
    if (Platform.OS === 'android') {
      return StatusBar.currentHeight;
    } else {
      return IOSDevicesHelper.getDefaultStatusBarHeight();
    }
  }
  return 0;
};

const getStatusBarHeight = (screenOrientation: string): number | undefined => {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  } else {
    if (isLandscape(screenOrientation)) {
      return 0;
    } else {
      return IOSDevicesHelper.getDefaultStatusBarHeight();
    }
  }
};
// Fix for KeyboardAvoidingView with when used with react-navigation
const getScreenOffset = () => {
  const screenOrientation = ScreenOrientation.getScreenOrientation();
  const navBarHeight = getNavBarHeight(screenOrientation);
  const statusBarHeight = getStatusBarHeight(screenOrientation);
  return navBarHeight + (statusBarHeight ?? 0);
};

/* -------------------------------------------------------------------------- */
/*                                  Durations                                 */
/* -------------------------------------------------------------------------- */

const DURATIONS = {
  REQUEST_DURATION: 20000,
  DEBOUNCE_DURATION: 800,
};

export default {
  ...UNITS,
  PRIVATE_API_KEY,
  ...DURATIONS,
  getStatusBarHeightInLandscape,
  getStatusBarHeight,
  getScreenOffset,
  isLandscape,
};
