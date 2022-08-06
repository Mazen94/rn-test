/* eslint-disable no-undef */
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

type NavigationType =
  NavigationContainerRef<ReactNavigation.RootParamList> | null | null;

let navigator: NavigationType = null;

function setTopLevelNavigator(navigatorRef: NavigationType) {
  navigator = navigatorRef;
}

function getCurrentScreen() {
  return navigator?.getCurrentRoute()?.name;
}

function navigate(name: string, params: any) {
  navigator?.navigate(name as never, params as never);
}

function push(name: string, params?: object | undefined) {
  navigator?.dispatch(StackActions.push(name, params));
}

function pop() {
  navigator?.dispatch(StackActions.pop());
}

function popToTop() {
  navigator?.dispatch(StackActions.popToTop());
}

export default {
  navigate,
  push,
  setTopLevelNavigator,
  pop,
  popToTop,
  getCurrentScreen,
};
