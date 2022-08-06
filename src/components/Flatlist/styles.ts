import { StyleSheet } from 'react-native';

import IOSDevicesHelper from '_utils/IOSDevicesHelper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLandscape: {
    marginHorizontal: IOSDevicesHelper.getHorizontalSpace(),
  },
  contentContainerCentered: {
    flex: 1,
  },
});
