import { isTablet } from 'react-native-device-info';

interface FontScalesStyle {
  fontSize: number;
  lineHeight: number;
}
interface FontsScales {
  s: FontScalesStyle;
  default: FontScalesStyle;
  m: FontScalesStyle;
  l: FontScalesStyle;
  xl: FontScalesStyle;
}
interface FontStyle {
  fontFamily: string;
  fontWeight:
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  fontStyle?: 'normal' | 'italic' | undefined;
}
interface Fonts {
  regular: FontStyle;
  bold: FontStyle;
  italic: FontStyle;
  light: FontStyle;
  medium: FontStyle;
}

const fonts: Fonts = {
  regular: {
    fontFamily: 'Roboto-regular',
    fontWeight: '400',
  },
  bold: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '400',
  },
  italic: {
    fontFamily: 'Roboto-italic',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  light: {
    fontFamily: 'Roboto-light',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Roboto-medium',
    fontWeight: '400',
  },
};

let fontsScales: FontsScales;

if (isTablet()) {
  fontsScales = {
    s: {
      fontSize: 14,
      lineHeight: 15 * 1.1,
    },
    default: {
      fontSize: 16,
      lineHeight: 16 * 1.1,
    },
    m: {
      fontSize: 18,
      lineHeight: 18 * 1.1,
    },
    l: {
      fontSize: 20,
      lineHeight: 20 * 1.1,
    },
    xl: {
      fontSize: 26,
      lineHeight: 26 * 1.1,
    },
  };
} else {
  fontsScales = {
    s: {
      fontSize: 12,
      lineHeight: 13 * 1.1,
    },
    default: {
      fontSize: 14,
      lineHeight: 14 * 1.1,
    },
    m: {
      fontSize: 16,
      lineHeight: 16 * 1.1,
    },
    l: {
      fontSize: 18,
      lineHeight: 18 * 1.1,
    },
    xl: {
      fontSize: 24,
      lineHeight: 24 * 1.1,
    },
  };
}
export { fonts, fontsScales };
