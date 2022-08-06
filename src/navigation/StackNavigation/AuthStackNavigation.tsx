import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import UserDetails from '_screens/UserDetails/UserDetails';
import Users from '_screens/Users/UsersContainer';

import { USERS_SCREEN, USER_DETAILS_SCREEN } from '_utils/screenNames';

export type StackParamList = {
  [USERS_SCREEN]: undefined;
  [USER_DETAILS_SCREEN]: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={USERS_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={USERS_SCREEN} component={Users} />
      <Stack.Screen name={USER_DETAILS_SCREEN} component={UserDetails} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
