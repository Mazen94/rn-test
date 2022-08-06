import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

import PropTypes from 'prop-types';

import Colors from '_utils/colors';
import { fonts, fontsScales } from '_utils/fontManager';

type PropsType = {
  size: 's' | 'default' | 'm' | 'l' | 'xl';
  weight: 'regular' | 'bold' | 'italic' | 'light' | 'medium';
  color: string;
  align: 'left' | 'right' | 'center';
  underline: boolean;
  useDefaultLineHeight: boolean;
  style?: TextStyle;
  children: any;
};

const Text = (props: PropsType) => {
  const {
    size,
    weight,
    color,
    align,
    underline,
    useDefaultLineHeight,
    style,
    children,
    ...otherProps
  } = props;

  // Build text style from props
  let sizeAttrs;
  const scale = fontsScales[size];
  if (scale) {
    const { fontSize, lineHeight } = scale;
    sizeAttrs = useDefaultLineHeight ? { fontSize } : { fontSize, lineHeight };
  }

  const customStyle: TextStyle = {
    ...(fonts[weight] || {}),
    ...(sizeAttrs || {}),
    color,
    textAlign: align,
  };
  if (underline) customStyle.textDecorationLine = 'underline';

  // Merge with existing style
  let finalStyle;
  if (Array.isArray(style)) {
    finalStyle = [customStyle, ...style];
  } else {
    finalStyle = {
      ...(customStyle || {}),
      ...style,
    };
  }

  return (
    <RNText {...otherProps} style={finalStyle}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  size: 'default',
  weight: 'regular',
  color: Colors.TEXT,
  align: 'left',
  underline: false,
  useDefaultLineHeight: false,
};

Text.propTypes = {
  size: PropTypes.oneOf(['s', 'default', 'm', 'l', 'xl']).isRequired,
  weight: PropTypes.oneOf(['regular', 'bold', 'italic', 'light', 'medium'])
    .isRequired,
  color: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
  underline: PropTypes.bool.isRequired,
  useDefaultLineHeight: PropTypes.bool.isRequired,
};

export default React.memo(Text);
