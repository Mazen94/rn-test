import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import 'react-native-gesture-handler/jestSetup';

// or use require

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-device-info', () => mockRNDeviceInfo);
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
