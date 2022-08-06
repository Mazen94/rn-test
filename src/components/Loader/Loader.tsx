import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from '_components/Loader/styles';

import Colors from '_utils/Colors';

type LoaderType = {
  cover: boolean;
  color: string;
};
const Loader = (props: LoaderType) => {
  let containerStyle: any = styles.container;
  if (props.cover) {
    containerStyle = [styles.container, styles.containerAbsolute];
  }
  return (
    <View style={containerStyle}>
      <ActivityIndicator color={props.color} />
    </View>
  );
};
export default React.memo(Loader);

Loader.defaultProps = {
  color: Colors.TEXT,
  cover: false,
};

Loader.propTypes = {
  color: PropTypes.string,
  cover: PropTypes.bool,
};
