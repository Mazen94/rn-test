import React from 'react';
import { Text, View } from 'react-native';

import { strings } from '_i18n';

const UserDetails = () => {
  return (
    <View>
      <Text>{strings('screens.sign_up')}</Text>
    </View>
  );
};

export default UserDetails;
