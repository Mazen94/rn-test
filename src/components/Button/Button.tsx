import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '_components/Text/Text';

import colors from '_utils/colors';

import { styles } from './styles';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  onPress(): void;
}

export default function CustomButton(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: props.backgroundColor ?? colors.PRIMARY,
      }}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled ? props.disabled : false}>
      <Text color={props.textColor ?? colors.WHITE}>{props.text}</Text>
    </TouchableOpacity>
  );
}
