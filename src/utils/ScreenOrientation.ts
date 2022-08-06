import { Dimensions } from 'react-native';

//If you need you can install this library
//import Orientation from 'react-native-orientation-locker';
import PropTypes from 'prop-types';

export default class ScreenOrientation {
  static LANDSCAPE: string = 'landscape';
  static PORTRAIT: string = 'portrait';

  static propTypes = PropTypes.oneOf([
    ScreenOrientation.LANDSCAPE,
    ScreenOrientation.PORTRAIT,
  ]);

  //   static lockPortrait() {
  //     Orientation.lockToPortrait();
  //   }

  //   static allowLandscape() {
  //     Orientation.unlockAllOrientations();
  //   }

  static isLandscape() {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  }

  static getScreenOrientation() {
    return this.isLandscape()
      ? ScreenOrientation.LANDSCAPE
      : ScreenOrientation.PORTRAIT;
  }
}
