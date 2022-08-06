import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import NavigationService from '_navigation/NavigationService';
import AuthStackNavigation from '_navigation/StackNavigation/AuthStackNavigation';

function Navigation() {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <AuthStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
