/**
 * Generic FlatList component
 * - Handle the horizontal space in landscape mode (iOS)
 * - Handle the additional bottom space in landscape mode depending on the display of the offlice notice (iOS)
 * - Center EmptyComponent
 */
import React from 'react';
import { FlatList as RNFlatlist, View } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from '_components/Flatlist/styles';

import useScreenOrientation from '_hooks/useScreenOrientation';

import IOSDevicesHelper from '_utils/IOSDevicesHelper';
import metrics from '_utils/metrics';

type FlatListType = {
  withBottomSpace?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  data: Array<any>;
  moreSpace?: number;
  [x: string]: any;
};
const FlatList = ({
  withBottomSpace,
  paddingHorizontal,
  paddingVertical,
  ...otherProps
}: FlatListType) => {
  const { data, moreSpace, renderItem } = otherProps;
  const screenOrientation = useScreenOrientation();
  const isLandscape = metrics.isLandscape(screenOrientation);

  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      <RNFlatlist
        {...otherProps}
        renderItem={renderItem}
        scrollIndicatorInsets={{ right: 1 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          { paddingHorizontal, paddingVertical },
          withBottomSpace && {
            paddingBottom:
              (paddingVertical ?? 0) +
              IOSDevicesHelper.getBottomSpace() +
              (moreSpace ?? 0),
          },
          (data === undefined || data.length === 0) &&
            styles.contentContainerCentered,
        ]}
      />
    </View>
  );
};

FlatList.defaultProps = {
  paddingHorizontal: 0,
  paddingVertical: 0,
  moreSpace: 0,
};

FlatList.propTypes = {
  withBottomSpace: PropTypes.bool,
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  moreSpace: PropTypes.number,
  listRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};

export default React.memo(FlatList);
